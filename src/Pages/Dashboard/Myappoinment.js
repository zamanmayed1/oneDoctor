import React, { useState, useEffect } from 'react';
import auth from '../../Firebase/Fireabse.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const Myappoinment = () => {
  const [user] = useAuthState(auth)
  const [appoinments, setAppoinment] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://stark-bastion-02508.herokuapp.com/mybooking?email=${user?.email}`, {
      method: 'GET'
      ,
      headers: {
        'authorization': `beare ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {

        if (res.status === 401 || res.status === 403) {
          signOut(auth)
          localStorage.removeItem('accessToken')
          navigate('/')
        }
        return res.json()
      })
      .then(data => setAppoinment(data))
  }, [])
  return (
    <div>
      <h2 className='text-3xl font-bold text-purple-700'>My Booked Appoinment {appoinments?.length} </h2>
      <div className="grid md:grid-cols-3 gap-20 mt-4 md:hidden">

        {
          appoinments?.map(a => <div className=' shadow-lg h-[150px]  border-l-8 relative three rounded-md p-4' key={a._id}>
            <h2 className='text-center text-green-600 text-xl font-bold mt-5'>{a.tratment}</h2>
            <h2 className='text-center text-gray-600  font-bold'>{a.date}</h2>
            <h2 className='text-center text-gray-600  font-bold'>{a.slot}</h2>
            <span className=' top-0 right-0  rounded-full bg-green-400 absolute'>Pending..</span>
          </div>)
        }
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>

              <th>Name</th>
              <th>Date</th>
              <th>Slot</th>
              <th>Phone</th>
              <th>Service Id</th>

            </tr>
          </thead>
          <tbody>
            {
              appoinments?.map(a =>
                <tr key={a._id}>

                  <td>{a.tratment}</td>
                  <td>{a.date}</td>
                  <td>{a.slot}</td>
                  <td>{a.phone}</td>
                  <td>{a._id}</td>

                </tr>
              )}
          </tbody>
          <tfoot>
            <tr>

              <th>Name</th>
              <th>Date</th>
              <th>Slot</th>
              <th>Phone</th>
              <th>Service Id</th>

            </tr>
          </tfoot>
        </table>
      </div>

    </div>
  );
};

export default Myappoinment;
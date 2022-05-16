import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';


const Alluser = () => {
    const { isLoading, error, data: users, refetch } = useQuery('user', () =>
        fetch('https://stark-bastion-02508.herokuapp.com/allusers', {
            method: 'GET',
            headers: {
                'authorization': `Barer ${localStorage.getItem('accessToken')}`
            }

        }).then(res => res.json()))


    const makeAdmin = (email) => {
        fetch(`https://stark-bastion-02508.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Barer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed To Make an Admin')

                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Maked Admin SuccessFull')
                    refetch()
                }

            })
    }

    return (
        <div>
            <h1 className="text-2xl text-purple-700">All User {users?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>

                            <th>User Id</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(u =>

                                <tr key={u._id}>
                                    <td>{u._id}</td>
                                    <td>{u.email}</td>
                                    <td>

                                        {u.role !== 'admin' && <button onClick={() => makeAdmin(u?.email)} className="btn btn-xs">Make Admin</button>}

                                    </td>
                                    <td><button className="btn btn-xs bg-red-500">Delete</button></td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Alluser;
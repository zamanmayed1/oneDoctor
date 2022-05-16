import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase/Fireabse.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <div className='p-5'>
                    <h2>{user?.email}</h2>
                    <Outlet />
                </div>


            </div>
            <div className="drawer-side " >
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-cyan-900 text-white	 ">

                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' >Profile</Link></li>
                    <li><Link to='myappoinment' >My Appoinment</Link></li>
                    <li><Link to='booked'>Booked</Link></li>
                    <li><Link to='myhistory'>My History</Link></li>
                   {admin &&  <li><Link to='alluser'>Alluser</Link></li>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/Fireabse.init';

const Navbar = () => {
    const [user] = useAuthState(auth)

    return (
        <div className="navbar bg-base-100 md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li className='mx-2 font-bold '><NavLink to={'/'}>Home</NavLink></li>
                        <li className='mx-2 font-bold '><NavLink to={'/about'}>About</NavLink></li>
                        <li className='mx-2 font-bold '><NavLink to={'/appoinment'}>Appointment</NavLink></li>
                        <li className='mx-2 font-bold '><NavLink to={'/reviews'}>Reviews</NavLink></li>
                        {
                            user ? <>
                                <li className='mx-2 font-bold '><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                                <button onClick={() => signOut(auth)} className='btn'>Log Out</button>
                            </> : <li className='mx-2 my-2 font-bold '><NavLink to={'/login'}>Login</NavLink></li>
                        }
                    </ul>
                </div>
                <h1 className='text-2xl font-bold text-red-500'>Zaman Medical Hall</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='mx-2 font-bold '><NavLink to={'/'}>Home</NavLink></li>
                    <li className='mx-2 font-bold '><NavLink to={'/about'}>About</NavLink></li>
                    <li className='mx-2 font-bold '><NavLink to={'/appoinment'}>Appointment</NavLink></li>
                    <li className='mx-2 font-bold '><NavLink to={'/reviews'}>Reviews</NavLink></li>
                    {
                        user ? <>
                            <li className='mx-2 font-bold '><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                            <button onClick={() =>
                            { 
                                signOut(auth) 
                                localStorage.removeItem('accessToken')
                            }}
                             className='btn'>Log Out</button>
                        </> : <li className='mx-2  font-bold '><NavLink to={'/login'}>Login</NavLink></li>
                    }


                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Call Now</a>
                <label htmlFor="my-drawer-2" className="ml-2 w-10 h-10 drawer-button lg:hidden"><img src="https://i.ibb.co/23h1s2n/dashboard.png" /></label>
            </div>
        </div >
    );
};

export default Navbar;
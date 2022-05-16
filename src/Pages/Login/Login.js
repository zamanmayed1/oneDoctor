import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Fireabse.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Googlesignin from '../../Firebase/Googlesignin';
import { useForm } from "react-hook-form";
import useToken from '../../Hooks/useToken';


const Login = () => {
    const [alltypeuser, alltypeloading, alltypeerror] = useAuthState(auth)
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(email, password)
    }

    const [token] = useToken(alltypeuser)



    let errormessage;
    if (error || alltypeerror) {
        errormessage = <p>{error?.message || alltypeerror?.message}</p>
    }
    let loadm;
    if (loading || alltypeloading) {
        loadm = <progress className="progress w-full my-2"></progress>

    }
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }

    }, [token])
    return (
        <div className='w-full'>
            <div className="card max-w-xs h-auto bg-base-100 shadow-md mx-auto mt-10 p-4">

                <h1 className='text-xl font-bold text-center'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Input Filed */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-black">Email</span>

                        </label>
                        <input
                            type="eamil"
                            placeholder="Your Email"
                            className="input input-bordered w-full "
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },

                                pattern: {
                                    value: /^[a-z0-9.+_-]+@[a-z.-]+\.[a-z]{2,15}$/,
                                    message: 'Enter a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email && <span className="label-text-alt text-red-600">{errors.email.message}</span>}


                        </label>
                    </div>
                    {/* Password Input Fled */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-black ">Password</span>

                        </label>
                        <input
                            type="password"
                            placeholder="Your Password"
                            className="input input-bordered w-full "
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Your Password is longer then 6'
                                }


                            })}
                        />
                        <label className="label">
                            {errors.password && <span className="label-text-alt text-red-600">{errors.password.message}</span>}


                        </label>
                    </div>

                    {loadm}
                    <p className="text-red-500">
                        {errormessage}
                    </p>
                    <input className='btn w-full max-w-xs' type="submit" value={"LOGIN"} />
                </form>
                <div className="flex flex-col w-full border-opacity-50 ">
                    <p className='text-center my-2 text-sm'> New to OneDoctor ? <span className="text-blue-500 font-bold"><Link to={'/signup'}>Create An Account</Link></span>  </p>

                    <div className="divider px-4">OR</div>
                    <Googlesignin />
                </div>

            </div>

        </div>
    );
};

export default Login;
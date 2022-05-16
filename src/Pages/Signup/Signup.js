import React from 'react';
import auth from '../../Firebase/Fireabse.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Googlesignin from '../../Firebase/Googlesignin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useToken from '../../Hooks/useToken';

const Signup = () => {
    const [alltypeuser, alltypeloading, alltypeerror] = useAuthState(auth)
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
    console.log(user || alltypeuser);
    const [token] = useToken(user || alltypeuser)

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        const email = data.email
        const password = data.password
        const name = data.name
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });

    }

    let errormessage;
    if (error || alltypeerror || updateerror) {
        errormessage = <p>{error?.message || alltypeerror?.message}</p>
    }
    let loadm;
    if (loading || updating || alltypeloading) {
        loadm = <progress className="progress w-full my-2"></progress>

    }
    const navigate = useNavigate()
    let location = useLocation();


    if (token) {
        navigate('/appoinment');
    };
    return (
        <div className="card max-w-xs h-auto bg-base-100 shadow-md mx-auto mt-10 p-4">

            <h1 className='text-xl font-bold text-center'>SignUp</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="form-control -my-2 w-full ">
                    <label className="label">
                        <span className="label-text text-black">Name</span>
                    </label>
                    <input
                        type="name"
                        placeholder="Name"
                        className="input input-bordered w-full "
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name && <span className="label-text-alt text-red-600">{errors.name.message}</span>}


                    </label>
                </div>
                {/* Email Input Filed */}
                <div className="form-control -my-2 w-full ">
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
                <div className="form-control -my-2 w-full ">
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
                <input className='btn w-full max-w-xs' type="submit" value={"SignUp"} />
            </form>
            <div className="flex flex-col w-full border-opacity-50 ">
                <p className='text-center my-2 text-sm'> Already have account ? <span className="text-blue-500 font-bold"> <Link to={'/login'}>Login</Link></span> </p>
                <div className="divider px-4">OR</div>
                <Googlesignin />
            </div>

        </div>
    );
};

export default Signup;
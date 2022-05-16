import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Fireabse.init'

const Googlesignin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);


    const googlesignin = () => {
        signInWithGoogle()
    }
    return (
        <div className='px-4'>
            <button onClick={googlesignin} className='border btn bg-white text-black w-full hover:text-white  border-accent uppercase'>CONTINUE WITH GOOGLE </button>
        </div>
    );
};

export default Googlesignin;
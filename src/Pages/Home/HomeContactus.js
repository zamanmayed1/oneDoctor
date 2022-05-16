import React from 'react';

const HomeContactus = () => {
    return (
        <div className='my-12 h-auto  bg-apbg p-2'>
            <h1 className='text-secondary font-bold text-center'>Contact Us</h1>
            <h1 className='text-2xl text-white text-center'>Stay connected with us</h1>
            <div className="p-2 my-3">
                <form className='block mx-auto md:w-[384px]' action="">
                    <input className='block w-full px-2 py-2 rounded-md mb-4' type="text" placeholder='Email Address' />
                    <input className='block w-full px-2 py-2 rounded-md mb-4' type="text" placeholder='Subject' />
                    <textarea className='block w-full h-[130px] px-2 py-2 rounded-md' type="text" placeholder='Your message' />
                </form>
            </div>
        </div>
    );
};

export default HomeContactus;   
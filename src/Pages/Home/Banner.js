import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div>
            <div className="hero w-full md:h-[70vh] h-[100vh] md:bg-bannerbg bg-no-repeat bg-left	">
                <div className="hero-content flex-col lg:flex-row-reverse -mt-10 ">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-left   '>
                        <h1 className="text-4xl font-bold ">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <button className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
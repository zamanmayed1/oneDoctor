import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse -mt-10">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-left md:w-3/5 px-4'>
                        <h1 class="text-4xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
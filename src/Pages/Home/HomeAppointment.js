import React from 'react';

const HomeAppointment = () => {
    return (
        <div className=' md:mt-32 '>
            <div className='bg-apbg bg-no-repeat bg-cover 2xl:h-[40vh]  md:py-5 h-[auto] relative grid lg:grid-cols-2' >
                <div>
                    <img className=' lg:w-2/6 md:block hidden mx-auto absolute bottom-0' src="https://i.ibb.co/4T4BgfB/doctor-small.png" alt="" />
                </div>
                <div className='text-left pb-5'>
                    <h1 className='text-primary  font-bold'>Appointment</h1>
                    <h2 className='md:text-xl lg:text-2xl text-white'>Make an appointment Today</h2>
                    <p className='lg:w-3/4 text-white text-lg	'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-secondary mt-3 uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>

                </div>
            </div>


        </div>
    );
};

export default HomeAppointment;
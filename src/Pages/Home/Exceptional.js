import React from 'react';

const Exceptional = () => {
    return (
        <div>
            <div className="hero my-5 h-[auto] 	">
                <div className="hero-content flex-col md:flex-row  px-2 ">
                    <div className='md:max-w-sm'>
                        <img src='https://i.ibb.co/MP0SLtG/treatment.png' className=" rounded-lg shadow-2xl" />
                    </div>
                    <div className='text-left md:w-3/5 px-4 '>
                        <h1 className="text-4xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Exceptional;
import React from 'react';

const Services = () => {
    const services = [
        {
            _id: 1,
            title: 'Fluoride Treatment',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: 'https://i.ibb.co/92kGTD1/fluoride.png',

        },
        {
            _id: 2,
            title: 'Cavity Filling',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: 'https://i.ibb.co/Vxwfx15/cavity.png',

        },
        {
            _id: 3,
            title: 'Teeth Whitening',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: 'https://i.ibb.co/4RnmkLh/whitening.png',

        }

    ]
    return (
        <div className=' mt-16 p-2'>
            <h2 className='font-bold text-secondary'>OUR SERVICES</h2>
            <h1 className='text-gray-800 text-2xl mb-9'>Services We Provide</h1>

            <div className='grid md:grid-cols-3 gap-8'>
                {
                    services.map(s =>

                        <div key={s._id} className='shadow-md p-3 rounded-xl' >
                            <img className='mx-auto mb-1 w-1/4' src={s.icon} alt="" />
                            <h1 className='text-xl font-bold text-gray-900'>{s.title}</h1>
                            <h1 className=' text-gray-800'>{s.des}</h1>


                        </div>


                    )
                }
            </div>
        </div>
    );
};

export default Services;
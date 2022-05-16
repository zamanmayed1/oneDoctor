import React from 'react';

const Testimonial = () => {
    const testimonials = [
        {
            _id: 1,
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero deserunt atque enim esse harum, debitis iusto minus qui, omnis voluptates quasi recusandae repudiandae ex aliquam vel non sint! Incidunt, error!',
            profile: 'https://i.ibb.co/NZzvzJW/people1.png',
            name: 'Winson Herry',
            loaction: 'California'
        },
        {
            _id: 2,
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero deserunt atque enim esse harum, debitis iusto minus qui, omnis voluptates quasi recusandae repudiandae ex aliquam vel non sint! Incidunt, error!',
            profile: 'https://i.ibb.co/NZzvzJW/people1.png',
            name: 'Winson Herry',
            loaction: 'California'
        },
        {
            _id: 3,
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero deserunt atque enim esse harum, debitis iusto minus qui, omnis voluptates quasi recusandae repudiandae ex aliquam vel non sint! Incidunt, error!',
            profile: 'https://i.ibb.co/NZzvzJW/people1.png',
            name: 'Winson Herry',
            loaction: 'California'
        },
        {
            _id: 4,
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero deserunt atque enim esse harum, debitis iusto minus qui, omnis voluptates quasi recusandae repudiandae ex aliquam vel non sint! Incidunt, error!',
            profile: 'https://i.ibb.co/NZzvzJW/people1.png',
            name: 'Winson Herry',
            loaction: 'California'
        },
        {
            _id: 5,
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero deserunt atque enim esse harum, debitis iusto minus qui, omnis voluptates quasi recusandae repudiandae ex aliquam vel non sint! Incidunt, error!',
            profile: 'https://i.ibb.co/NZzvzJW/people1.png',
            name: 'Winson Herry',
            loaction: 'California'
        },
        {
            _id: 6,
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero deserunt atque enim esse harum, debitis iusto minus qui, omnis voluptates quasi recusandae repudiandae ex aliquam vel non sint! Incidunt, error!',
            profile: 'https://i.ibb.co/NZzvzJW/people1.png',
            name: 'Winson Herry',
            loaction: 'California'
        },
    ]

    return (
        <div className='  bg-testimbg bg-no-repeat bg-right-top lg:my-4 p-2'>
            <div className='my-2 pt-4 pb-8 '>
                <h1 className='font-bold text-left text-secondary'>Testimonial</h1>
                <h1 className='font-bold text-left md:text-2xl text-xl'>What Our Patients Says</h1>

            </div>
            <div className="cardsdiv bg-none md:p-4 p-2  md:w-full  grid items-center lg:grid-cols-3 gap-10">
                {
                    testimonials.map(t => <div key={t._id} className="card  p-2 py-4">
                        <p>{t.text}</p>
                        <div className="flex p-2">
                            <img className=' mr-4 ring-4 rounded-full w-14 ' src={t.profile} alt="" />
                            <div className='text-left'>
                                <h1 className='text-xl'>{t.name}</h1>
                                <h1 className='text-sm'>{t.loaction}</h1>
                            </div>
                        </div>

                    </div>)
                }


            </div>
        </div>
    );
};

export default Testimonial;
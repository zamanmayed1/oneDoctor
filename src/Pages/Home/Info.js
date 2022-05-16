import React from 'react';

const Info = () => {
    const allinfo = [
        {
            _id: 1,
            title: 'Opening Hours',
            des: 'Lorem Ipsum is simply dummy text of the pri',
            icon: 'https://i.ibb.co/SK9KpV3/clock.png',
            bg: 'primary',
            id: 'one'
        },
        {
            _id: 2,
            title: 'Visit our location',
            des: 'Lorem Ipsum is simply dummy text of the pri',
            icon: 'https://i.ibb.co/Fx0d75L/Path-7199.png',
            bg: 'primary',
            id: "two"
        },
        {
            _id: 3,
            title: 'Contact us now',
            des: '01755429524',
            icon: 'https://i.ibb.co/QHQ7mBq/Path-7196.png',
            bg: 'primary',
            id: 'three'
        }

    ]
    return (
        <div className=' p-2 my-4'>
            <div className="grid md:grid-cols-3 gap-8">
                {
                    allinfo.map(i =>
                        <div key={i._id} className='rounded-lg  text-white text-left px-3 py-6 md:flex justify-between items-center' id={i.id} >
                            <img className=' mx-auto w-16 ' src={i.icon} alt="" />
                            <div className='text-left w-full ml-4'>
                                <h2 className='font-bold'>{i.title}</h2>
                                <h2 className='text-sm'>{i.des}</h2>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Info;
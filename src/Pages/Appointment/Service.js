import React from 'react';

const Service = ({ service, setOption }) => {
    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title mx-auto text-secondary">{name}</h2>
                <p className='text-center font-bold'>{
                    slots.length
                        ? <span className='font-bold'>{slots.length[0]}</span>
                        : <span className='text-red-500 font-bold'> No Slot Available . Try Another Day</span>

                }</p>
                <p className='text-center'> {slots.length === 0 ? <span className='text-red-500'> Sorry ! No Space Available </span> : <span>{slots.length} {slots.length > 1 ? 'Spaces' : 'space'} Available</span>} </p>
                <div className="card-actions justify-end">

                    <label onClick={() => setOption(service)} disabled={slots.length == 0} htmlFor="booking-modal" className="btn mx-auto btn-secondary mt-3 uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appoinment</label>

                </div>
            </div>
        </div >
    );
};

export default Service;
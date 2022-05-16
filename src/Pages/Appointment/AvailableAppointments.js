import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import Bookingmodal from './Bookingmodal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([])
    const [option, setOption] = useState(null)
    const formateddate = format(date, 'PP')
    
    useEffect(() => {
        fetch(`https://stark-bastion-02508.herokuapp.com/available?date=${formateddate}`)
            .then(res => res.json())
            .then(data => setServices(data))

    }, [services])

//     const { isLoading, error, data:services } = useQuery(['available' , formateddate], () =>
//     fetch(`https://stark-bastion-02508.herokuapp.com/available?date=${formateddate}`).then(res =>
//       res.json()
//     )
//   )
    return (
        <div>
            <p className={' rounded-lg p-2 text-center text-secondary font-bold'}>You Have Selected {format(date, 'PP')} </p>
            <div className='grid gap-16 my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setOption={setOption}
                    ></Service>)
                }
            </div>
            {
                option && <Bookingmodal option={option} setOption={setOption} date={date} ></Bookingmodal>
            }


        </div>
    );
};

export default AvailableAppointments;
import React from 'react';
import { format } from 'date-fns';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Fireabse.init';
import { toast } from 'react-toastify';



const Bookingmodal = ({ option, date, setOption }) => {
    const [user] = useAuthState(auth)
    const { _id, name, slots } = option
    const formatedDate = format(date, 'PP')
    const handleBooking = (e) => {
        e.preventDefault()
        const bookingData = {
            tratmentId: _id,
            tratment: name,
            date: formatedDate,
            slot: e.target.time.value,
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        }
        const url = 'https://stark-bastion-02508.herokuapp.com/booking'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)

        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {

                    toast.error(`You already Book ${data?.booking?.tratment}  ${data?.booking?.date} on ${data?.booking.slot} `)
                    setOption(null)
                    console.log(data)
                }
                else {
                    toast(`Thanks For Book  ${data?.booking?.tratment}  ${data?.booking?.date} on ${data?.booking.slot}  `)
                    setOption(null)
                    console.log(data)
                }
            }

            )


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary my-3">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-center' action="">
                        <input name='date' type="text " value={format(date, 'PP')} className="input my-1 bg-gray-200 font-bold input-bordered w-full" />
                        <select name='time' className="select select-bordered w-full">
                            {
                                slots?.map((s, index) => <option key={index} value={s} > {s}</option>)
                            }
                        </select>
                        <input name='name' type="text" value={user?.displayName || ''} disabled className="input my-1 input-bordered w-full" />
                        <input name='email' type="text" value={user?.email || ''} disabled className="input my-1 input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input my-1 input-bordered w-full" required />
                        <input type="submit" value='Submit' className="btn btn-accent text-white w-full" />

                    </form>

                </div>
            </div>

        </div >
    );
};

export default Bookingmodal;
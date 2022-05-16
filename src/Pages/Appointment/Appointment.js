import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Fireabse.init';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [user] = useAuthState(auth)
    const [date, setDate] = useState(new Date())
    return (
        <div>


            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>

            <AvailableAppointments date={date}></AvailableAppointments>

            <Footer />

        </div>
    );
};

export default Appointment;
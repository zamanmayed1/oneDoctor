import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppoinmentBanner = ({ date, setDate }) => {


    return (
        <div className="hero my-10 lg:max-h-max ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className={'shadow-lg rounded-lg p-2'}
                    />
                </div>

            </div>
        </div>
    );
};

export default AppoinmentBanner; <h1>AppoinmentBanner</h1>
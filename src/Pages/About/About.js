import React from 'react';

const About = () => {
    const deleteall = () => {
        fetch('https://stark-bastion-02508.herokuapp.com/deleteall', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }


        })
    }
    return (
        <div>
            <h2>ami dr afzal hussen soggane sob appoint ment batil kore dici</h2>
            <button onClick={deleteall} className='btn btn-error'>Delete All Bookings</button>
        </div>
    );
};

export default About;
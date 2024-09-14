import React, { useState, useEffect } from 'react';

function SimpleDigitalClock({ countryCode }) {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        console.log("Started Clock Interval.");

        return () => {
            clearInterval(intervalId);
            console.log("Cleared Clock interval.")
        }
    }, []);

    return (
        <div className='clock-container'>
            <div className='clock'>
                <span>{time.toLocaleTimeString(countryCode)}</span>
            </div>
        </div>
    );
}
export default SimpleDigitalClock;
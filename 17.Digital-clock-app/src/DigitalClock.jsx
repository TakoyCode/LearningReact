import React, { useState, useEffect } from 'react';

function DigitalClock() {

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

    function formatTimeMiridian() {
        let hours = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();

        const miridian = hours >= 12 ? "PM" : "AM"
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${miridian}`;
    }

    function formatTime() {
        let hours = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)}`;
    }

    function padZero(number) {
        // return (number < 10 ? "0" : "") + number;
        return String(number).padStart(2, '0');
    }


    return (
        <div className='clock-container'>
            <div className='clock'>
                <span>00:00:00</span> <br />
                <span>{formatTime()}</span> <br />
                <span>{formatTimeMiridian()}</span> <br />
                <span>{time.toLocaleTimeString("no")}</span>
            </div>
        </div>
    );
}

export default DigitalClock;
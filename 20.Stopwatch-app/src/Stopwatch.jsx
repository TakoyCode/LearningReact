import { useState, useEffect, useRef } from "react";

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        // runs on unmount or if isRunning changes
        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);

        startTimeRef.current = Date.now() - elapsedTime;
        // console.log(startTimeRef.current);
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        setElapsedTime(0);
    }

    function formatTime() {
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        const min = Math.floor(elapsedTime / (1000 * 60) % 60);
        const sec = Math.floor(elapsedTime / (1000) % 60);
        const milli = Math.floor((elapsedTime % 1000) / 10);

        return `${padTime(min)}:${padTime(sec)}:${padTime(milli)}`;
    }

    function formatTimeDate() {
        const time = new Date(elapsedTime);
        const min = time.getMinutes();
        const sec = time.getSeconds();
        // Both millisec variables as far as i know gets the same output
        // I don't really understand tho how the |0 truncates the milliseconds tho
        const millisec = (time.getMilliseconds() / 10 | 0);
        // const millisec = Math.floor(time.getMilliseconds() / 10).toFixed(0);

        return `${padTime(min)}:${padTime(sec)}:${padTime(millisec)}`;
    }

    function padTime(time) {
        return String(time).padStart(2, '0');
    }

    return (
        <div className="stopwatch">
            {/* <div className="display">{formatTime()}</div> */}
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;
import React, { useState, useEffect } from 'react';

function UseEffectExample() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // Makes an EventListener every render
    // window.addEventListener("resize", handleResize);
    // console.log("EVENT LISTENER ADDED")

    // Only makes an EventListener on mount
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED")

        // Removes the EventListener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED")
        }
    }, [])

    // Can have as many useEffect hooks as you want in a component
    useEffect(() => {
        document.title = `Width: ${width} Height: ${height}`;
    }, [width, height])

    return (
        <>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </>
    )
}

export default UseEffectExample;
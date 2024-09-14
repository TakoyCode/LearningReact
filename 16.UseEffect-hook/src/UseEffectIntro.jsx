// useEffect() = React Hooky that tells React DO SOME CODE WHEN (pick one):
//               - This component re-renders
//               - This component mounts
//               - The state of a value changes

// Syntax example:
// useEffect(function, [dependencies])

// Different ways to write it, and what the differences are
// 1. useEffect(() => {})          - Runs after every re-render
// 2. useEffect(() => {}, [])      - Runs only on mount
// 3. useEffect(() => {}, [value]) - Runs on mount + when value changes

// useEffect() USES:
// 1. Event Listeners
// 2. DOM manipulation
// 3. Subscriptions (real-time updates)
// 4. Fetching DATA from an API
// 5. Clean up when a component unmounts

import React, { useState, useEffect } from 'react';

function UseEffectIntro() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // Remember to put useEffect near the top of your component
    useEffect(() => {
        document.title = `Count: ${count} Color: ${color}`;

        // Cleanup function:
        // Calls the cleanup function when it unmounts 
        // or before the next render (if no dependencies) 
        return () => {
            // Do some cleanup code
        }

    }, [count, color]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
        console.log(color);
    }

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button> <br />
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default UseEffectIntro;
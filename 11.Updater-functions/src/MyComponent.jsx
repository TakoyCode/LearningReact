// updater function = A function passed as an argument to setState() usually
//                    ex. setYear( y => y + 1 )
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

import React, { useState } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);

    const incrementNoUpdateFunc = () => {
        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.

        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        // UPDATES count

        // So what happends here is that setCount doesn't update the count variable
        // before all of the setCounts have run.
        // So instead of added +3 to count it adds only +1
    }

    const incrementUpdateFunc = () => {
        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater funciton in a queue (waiting in line)
        // During the next render, it will call them in the same order.

        // For the variabel name that represents the previous value in the updater function
        // either use the original name + prev infront of it ex. prevCount
        // or just use the first letter in the originale name ex. c 

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
    };

    const reset = () => {
        // Doesn't need an updater function cause we aren't using the previous state
        setCount(0);
    }

    // so i can easer swap between the types of increment functions
    const increment = incrementUpdateFunc;

    return (
        <div className="counter-container">
            <p className="count-display">Count: {count}</p>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={reset}>Reset</button >
            <button className="counter-button" onClick={decrement}>Decrement</button >
        </div>
    );
}

export default MyComponent;
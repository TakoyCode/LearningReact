// updater function = A function passed as an argument to setState() usually
//                    ex. setYear( updater function (that is usually an arrow function) )
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
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
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
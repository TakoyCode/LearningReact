import React, { useState } from 'react';

function MyComponent() {

    // When you use the setter function of a stateful variable,
    // it will trigger a rerender of the virtual DOM.
    const [name, setName] = useState("Guest");

    // Usestate returns an array with 2 elements in it
    // We then use array destructoring to create a stateful variable and a setter function
    const [age, setAge] = useState(0);

    // the value in the useState parameter is the default value of the stateful variable
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Audun");
    };

    const incrementAge = () => {
        setAge(age + 1);
    };

    const toggleIsEmployed = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleIsEmployed}>Change Employment Status</button>
            {/* <button onClick={() => { setName("name") }}>Set Name</button> */}
        </div>
    )

};
export default MyComponent;
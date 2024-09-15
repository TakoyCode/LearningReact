// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but don't want that information to trigger new renders.

//            useRef is useful for:
//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals


import { useState, useEffect, useRef } from 'react';

function MyComponent() {
    const [number, setNumber] = useState(0);

    // useRef returns an object, it only has one property called 'current'
    const ref = useRef(0);
    console.log(ref);

    // Often used to refer to a html element
    const inputRef = useRef();

    // Is here so you can see when the component re-renders
    useEffect(() => {
        console.log("COMPONENT RENDERED");
        // console.log(inputRef);
    });

    // Re-renders the component after every change
    function handleClickState() {
        setNumber(n => n + 1);
    }
    useEffect(() => console.log(number), [number]);

    // Doesn't re-render the component after every change
    function handleClickRef() {
        ref.current++;
        console.log(ref.current);
    }

    // Doesn't re-render the component after every change
    function handleClickInputRef() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "teal";
    }

    // Muliple Input refs example
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();

    function handleClickInputRef1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "red";

        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClickInputRef2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";

        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClickInputRef3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "green";

        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }


    return (
        <div>
            <div>
                <button onClick={handleClickState}>State Click me</button> <br />
                <button onClick={handleClickRef}>Ref Click me</button> <br />
                <button onClick={handleClickInputRef}>InputRef Click me</button> <br />
                <input ref={inputRef} />
            </div> <br />

            <div>
                <button onClick={handleClickInputRef1}>InputRef Click me 1</button>
                <input ref={inputRef1} /> <br />

                <button onClick={handleClickInputRef2}>InputRef Click me 2</button>
                <input ref={inputRef2} /> <br />

                <button onClick={handleClickInputRef3}>InputRef Click me 3</button>
                <input ref={inputRef3} /> <br />
            </div>
        </div>
    );
}

export default MyComponent;
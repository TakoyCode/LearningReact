import React, { useState } from "react";
import ComponentB from "./ComponentB.jsx";

// Passing down props to the lowest level component, is called prop drilling
function ComponentA() {

    const [user, setUser] = useState("Takoy");

    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>Hello {user}</h2>
            {/* <h2>{`Hello ${user}`}</h2> */}
            <ComponentB user={user} />
        </div>
    );
}
export default ComponentA;
import React, { useState } from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const foodInput = document.getElementById("foodInput");

        const newFood = foodInput.value;

        setFoods((f) => [...f, newFood]);

        foodInput.value = "";
    }

    function handleRemoveFood(index) {
        // Using a _ for a parameter is a convention to show that the 
        // parameter that is passed to the function is ignored.
        setFoods(foods.filter((_, i) => i !== index));
    }


    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => {
                    return <li onClick={() => handleRemoveFood(index)} key={index}>{food}</li>
                })}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent;
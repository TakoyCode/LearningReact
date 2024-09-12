import React, { useState } from 'react'

function MyComponent() {

    const [cars, setCars] = useState([{ year: 2001, make: "Toyota", model: "Corrola" }]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    function handleAddCar() {
        const newCar = { year: carYear, make: carMake, model: carModel };
        setCars((c) => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCars((c) => c.filter((_, i) => i !== index));
    }

    function handleChangeYear(e) {
        setCarYear(e.target.value);
    }

    function handleChangeMake(e) {
        setCarMake(e.target.value);
    }

    function handleChangeModel(e) {
        setCarModel(e.target.value);
    }

    const style = { margin: 0 }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map(
                    (car, i) =>
                        <li onClick={() => handleRemoveCar(i)} key={i}>
                            {car.year} {car.make} {car.model}
                        </li>
                )}
            </ul>

            <div><strong>New Car:</strong></div>
            <label>Year</label> <br />
            <input type="number" value={carYear} onChange={handleChangeYear}
                placeholder="Enter car year" /> <br />

            <label>Make</label> <br />
            <input type="text" value={carMake} onChange={handleChangeMake}
                placeholder="Enter car make" /> <br />

            <label>Model</label> <br />
            <input type="text" value={carModel} onChange={handleChangeModel}
                placeholder="Enter car model" /> <br />

            <button onClick={handleAddCar}>Add new Car</button>
        </div >
    );
}

export default MyComponent;
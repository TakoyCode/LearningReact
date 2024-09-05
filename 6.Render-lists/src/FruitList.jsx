function FruitList() {

    const fruits = [
        { id: 1, name: 'apple', calories: 52, },
        { id: 2, name: 'watermelon', calories: 30, },
        { id: 3, name: 'banana', calories: 88, },
        { id: 4, name: 'grapes', calories: 66, },
        { id: 5, name: 'pear', calories: 57, }
    ];

    // Alphabeticaly sort the array via name
    // fruits.sort((a, b) => a.name.localeCompare(b.name));

    // Reverse alphabeticaly sort the array via name
    // fruits.sort((a, b) => b.name.localeCompare(a.name));

    // Numeric sort by calories
    // fruits.sort((a, b) => a.calories - b.calories);

    // Reverse numeric sort by calories
    fruits.sort((a, b) => b.calories - a.calories);

    const lowCalFruits = fruits.filter((f) => f.calories <= 60);

    const HighCalFruits = fruits.filter((f) => f.calories > 60);


    const FruitslistItems = fruits.map((f) => <li key={f.id}>
        {f.name}: &nbsp;
        <strong>{f.calories}</strong></li>);

    const lowCalListItems = lowCalFruits.map((f) => <li key={f.id}>
        {f.name}: &nbsp;
        <strong>{f.calories}</strong></li>);

    const HighCalListItems = HighCalFruits.map((f) => <li key={f.id}>
        {f.name}: &nbsp;
        <strong>{f.calories}</strong></li>);
    return (
        <>
            {/* {fruits} */}

            <ul>
                <div><strong>Fruits</strong></div>
                {FruitslistItems}
            </ul>
            <ul>
                <div><strong>Low cal. fruits</strong></div>
                {lowCalListItems}
            </ul>
            <ul>
                <div><strong>High cal. fruits</strong></div>
                {HighCalListItems}
            </ul>
        </>
    );
}

export default FruitList
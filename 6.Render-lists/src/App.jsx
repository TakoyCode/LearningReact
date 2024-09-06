import FruitList from "./FruitList.jsx"
import List from "./List.jsx";

function App() {

  const fruits = [
    { id: 1, name: 'apple', calories: 52, },
    { id: 2, name: 'watermelon', calories: 30, },
    { id: 3, name: 'banana', calories: 88, },
    { id: 4, name: 'grapes', calories: 66, },
    { id: 5, name: 'pear', calories: 57, }
  ];

  const drinks = [
    { id: 1, name: 'pepsi', calories: 27, },
    { id: 2, name: 'cola', calories: 37, },
    { id: 3, name: 'fanta', calories: 19, },
    { id: 4, name: 'sprite', calories: 39, },
    { id: 5, name: 'monster', calories: 42, }
  ];

  return (
    <>
      {/* using the ternery operator to conditionally render the component */}
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}

      {/* using logical AND(&&) to conditionally render the component */}
      {drinks.length > 0 && <List items={drinks} category="Drinks" />}

      {drinks.length > 0 && <List />}
      {/* <FruitList /> */}
    </>
  )
}

export default App

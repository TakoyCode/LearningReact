// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

// Passing down props to the lowest level component, is called prop drilling

// PROVIDER COMPONENT (Where you send the value from, kinda like a radio tower)
// Setup example of a provider component:
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS (Where you want to receive/use the value, kinda like a radio)
// You can have more than 1 consumer component.
// Setup example of a consumer component:
// 1. import React, { useContext } from 'react';
//    import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);


import ComponentAContext from "./UseContextExample/ComponentA.jsx"
import ComponentADrill from "./PropDrillingExample/ComponentA.jsx"

function App() {

  return (
    <>
      {/* <ComponentADrill /> */}
      <ComponentAContext />
    </>
  )
}

export default App

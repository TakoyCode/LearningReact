// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

import Student from './Student.jsx'

function App() {
  return (
    <>
      <Student name='Bingus' age={6} isStudent={false} />
      <Student name='Audun' age={22} isStudent={true} />
      <Student name='Frøya' age={4} isStudent={false} />
      <Student name='Kåre' age={30} isStudent={false} />
      <Student name='Bongus' age={32} isStudent={true} />
      <Student />
      <Student name='Big boi' />
    </>
  )
}

export default App

// Conditional rendering = allows you to control what gets rendered
//                         in your  application based on certian conditions
//                         (f.eks help you: show, hide, or change components)
import UserGreeting from "./assets/UserGreeting"
function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Bingus" />
      <br />
      <UserGreeting username="Bingus" />
      <br />
      <UserGreeting isLoggedIn={true} />

    </>
  )
}

export default App

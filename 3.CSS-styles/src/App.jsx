import ButtonExternal from './ButtonExternal.jsx'
import ButtonModule from './ButtonModule/ButtonModule.jsx'
import ButtonInline from './ButtonInline.jsx'

function App() {

  return (
    <>
      <ButtonExternal />
      <div style={{ margin: '20px' }}></div>
      <ButtonModule />
      <div style={{ margin: '20px' }}></div>
      <ButtonInline />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setcounter] = useState(15) //change in UI in all place if counter variable available

  //let counter = 15

  function addvalue(){
    //counter += 1
    setcounter((prevCounter) => {
      return prevCounter + 1
  }) //it's like callback function so we can update the varaiable
    setcounter((prevCounter) => prevCounter + 1)
    setcounter(prevCounter => prevCounter + 1)
    setcounter(prevCounter => prevCounter + 1)
  }

  const removevalue = ()=>{
    if(counter > 0){
      setcounter(counter-1)
    }
    else{
      setcounter(0)
    }
  }

  return (
    <>
      <h1>chai aur code</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <button onClick={removevalue}>remove value {counter}</button>
    </>
  )
}

export default App

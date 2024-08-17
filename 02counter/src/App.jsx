import { useState } from 'react'
<<<<<<< HEAD
=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
>>>>>>> c8978ecd185e7aaf4e007194e23f653dc2292b57
import './App.css'

function App() {

<<<<<<< HEAD
  const [counter, setcounter] = useState(15) //change in UI in all place if counter variable available
=======
  let [counter, setcounter] = useState(15) //change in UI in all place if counter variable available
>>>>>>> c8978ecd185e7aaf4e007194e23f653dc2292b57

  //let counter = 15

  function addvalue(){
    //counter += 1
<<<<<<< HEAD
=======
    console.log(counter)
>>>>>>> c8978ecd185e7aaf4e007194e23f653dc2292b57
    setcounter(counter + 1)
  }

  const removevalue =()=>{
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

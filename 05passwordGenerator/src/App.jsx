import { useState,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(0)
  const [number, setNumber] = useState(false)
  const [char,setChar] = useState(false)
  const [password, setPassword] = useState("")

  //ref hook
  const passwordref = useRef(null)

  //cache memory ma rakhse and optimize
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number){
      str += "0123456789"
    }

    if (char){
      str += "&^%$#@!*+="
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)  
    }

    setPassword(pass)

  }, [length,number,char])

  const copyPassword = useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  //run aa hooks thi thase
  useEffect(()=>{
    passwordGenerator()
  }, [length,char,number])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-3 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mt-3 mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordref}></input>

          <button
          onClick={copyPassword} 
          className='outline-none bg-blue-700 text-white px-3 py-2 shrink-0 hover:bg-blue-500'>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6}
            max = {100} value={length} className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}></input>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={number} id='numberInput' 
            onChange={() => setNumber((prev) => !prev)}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={char} id='charInput' 
            onChange={() => setChar((prev) => !prev)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

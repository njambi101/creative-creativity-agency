import { useState } from 'react'
import React from 'react'

import './App.css'

function App() {
  
  const [inputValue, setInputValue] = useState("")
  const [bio, setBio] = useState('')
  const [role, setRole] = useState('developer')
  return (
    <div>
      <form >
        <label >Enter text</label>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        
      </form>
      <br />

      <h1>Entered Value : {inputValue}</h1>
      <textarea 
      value = {bio}
      onChange={(e) => setBio(e.target.value)}
      placeholder="Write something...."
      />

      <select value="{role}" onChange={(e) => setRole(e.target.value)} ></select>
        <option value="developer">Developer</option>
        <option value="designer">Des</option>
    </div>

  )
}

export default App

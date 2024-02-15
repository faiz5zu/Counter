import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    if(count<20){
      setCount(count => count +2);
      setCount(count +2);


    }
  


  };

  const removeValue = () => {
    if ( count > 0){
      setCount(removeValue => removeValue -2);
    }
   
  };


  

  return (
    <>
      <h1>project</h1>

      <button onClick={addValue}
      > Add</button>
      <p>{count}</p>
      <br />
      <button onClick={removeValue}
      >remove</button>
    </>
  )
}

export default App

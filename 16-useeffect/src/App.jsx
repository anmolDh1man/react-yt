// import { useState } from "react"
// import { useEffect } from "react"

import { useEffect } from "react"
import { useState } from "react"

// const App = () => {
//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)
//   useEffect(function(){
//     console.log('use effect is running....')
//   },[num])
//   return (
//     <div>
//       <h1>num {num}</h1>
//       <h2>num2 {num2}</h2>
//       <button
//       onMouseEnter={()=>{
//         setNum(num+1)
        
//       }}
//       onMouseLeave={()=>{
//         setNum2(num2+1)
//       }}
//       >
//       Hover
//       </button>
//     </div>
//   )
// }
// export default App


const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(100)

  useEffect(function(){
    bChanging();
    
    
  },[b])

  function aChanging(){
    console.log('A is Changing');
    
  }

  function bChanging(){
    console.log('B is Changing')
  }


  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}
      >
        A
      </button>
      <button onClick={()=>{
        setB(b+1)
      }}
      >
        B
      </button>
    </div>
  )
}
export default App
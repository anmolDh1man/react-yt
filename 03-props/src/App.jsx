import Card from "./components/Card"

const App = () => {
  return (
    <div className="parent">
     
   
    <Card user='Anmol' age={21} img='https://plus.unsplash.com/premium_photo-1760583232675-44b82dcfc19f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600'/>
    <Card user='Precious' age={22} img='https://plus.unsplash.com/premium_photo-1757782323237-cc11aab3ccc0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600'/>
    </div>
   
  )
}
export default App
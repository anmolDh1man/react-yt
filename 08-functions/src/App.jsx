const App = () => {

  const scrollSlide = (elem) =>{
    console.log('Scrolling Slide........',elem )
  }

  return (
    <div onWheel={(elem)=>{
      scrollSlide(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}
export default App
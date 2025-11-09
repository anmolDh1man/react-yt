import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center px-4 py-8 justify-between bg-cyan-800">
      <h2 className="text-2xl font-bold">Precious</h2>
      <div className="flex gap-10">
        <Link className="text-lg font-medium" to='/'>Home</Link>
        <Link className="text-lg font-medium" to='/about'>About</Link>
        <Link className="text-lg font-medium" to='/contact'>Contact</Link>
        <Link className="text-lg font-medium" to='/courses'>Courses</Link>
        <Link className="text-lg font-medium" to='/product'>Product</Link>
        
      </div>
    </div>
  )
}
export default Navbar
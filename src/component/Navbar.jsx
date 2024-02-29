import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="header">
      <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">RJ</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({isActive})=> isActive ? 'text-blue-500' : 'rgb(215 216 174)'}>

            About
        </NavLink>
        <NavLink to="/projects" className={({isActive})=> isActive ? 'text-blue-500' : 'rgb(215 216 174)'}>

            Projects
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar

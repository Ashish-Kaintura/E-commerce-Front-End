import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const auth = localStorage.getItem('user');
  // for back to navigation page after logout 
  const navigate = useNavigate();
  //get clear data from user storage  
  const logout = () => {
    localStorage.clear();
    navigate("/signup")
  }
  return (
    <div>
      {
        auth ?
          <ul className='nav-ul'>
            <li><Link className='nav-link' to="/" > Product </Link></li>
            <li><Link className='nav-link' to="/add" >Add Product </Link></li>
            {/* <li><Link className='nav-link' to="/update/:id" >Update </Link></li> */}
            <li><Link className='nav-link' to="/profile" >Profile</Link></li>
            <li><Link className='nav-link' onClick={logout} to="/signup">Logout ({JSON.parse(auth).Name})</Link>  </li>
          </ul> :

          <ul className=" nav-ul  nav-right">
            <li><Link className="nav-link  " to="/signup" >Signup</Link></li>
            <li><Link className="nav-link " to="/login" >Login</Link></li>
          </ul>
      }
    </div>
  )
}

export default Navbar;

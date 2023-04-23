import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import {ShoppingCart, User, UserCircle} from 'phosphor-react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
const Header = ()=> {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="header">
     
        <ul className='header-menu'>
           <li><Link to="/home" className='link' >Home</Link></li>
            <li><Link to="/shop"  className='link'> shop</Link></li>
           <li><Link to="/health" className='link'> Health</Link></li> 
           <Link to="/mainscreen" className='link'> Snake</Link>
           <Link to="/Quiz" className='link'>Quiz</Link>
            
            
            <Link to ="/cart" className='link' ><ShoppingCart size={40} /> </Link>
            <div className="user">
            <User size={40} />
             {user && user.email}
            

            <button onClick={handleLogout} className='logout'>
              Logout
            </button>
            </div>
        </ul>
    </div>
  )
}

export default Header
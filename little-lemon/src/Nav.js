import logo from './Assets/logo.png';
import {Link} from 'react-router-dom';



function Nav() {
    return(
        <>
        <img src={logo} className='logo' alt="logo" />
           <nav className="nav">
            <ul className='nav-list'>
            <li><Link to='/home' className='nav-item'>Home</Link></li>
            <li><Link to="/about" className='nav-item'>About</Link></li>
            <li><Link to='/menu' className='nav-item'>Menu</Link></li>
            <li><Link to='/reservations' className='nav-item'>Reservations</Link></li>
            <li><Link to='/order_online' className='nav-item'>Order Online</Link></li>
            <li><Link to='/login' className='nav-item'>Login</Link></li>
            <li><Link to='/confirmed' className='nav-item'>Confirmed</Link></li>
          </ul>
        </nav>
        </>
    )
}

export default Nav;
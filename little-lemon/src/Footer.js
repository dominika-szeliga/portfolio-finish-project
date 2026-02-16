import logo2 from './Assets/logo2.png';
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <img src={logo2} alt='logo'/>
            <section className="footer_section">
                <article className="footer_article">
                    <h1>Doormat Navigation</h1>
                    <nav className="footer_nav">
                        <ul className='footer-list'>
                        <li><Link to='/home' className='nav-item'>Home</Link></li>
                        <li><Link to='/about' className='nav-item'>About</Link></li>
                        <li><Link to='/menu' className='nav-item'>Menu</Link></li>
                        <li><Link to='/reservations' className='nav-item'>Reservations</Link></li>
                        <li><Link to='/order_online' className='nav-item'>Order Online</Link></li>
                        <li><Link to='/login' className='nav-item'>Login</Link></li>
                        </ul>
                    </nav>
                </article>
                <article className="footer_article">
                    <h1>Contact</h1>
                    <p>Adress</p>
                    <p>Phone number</p>
                    <p>Email</p>
                </article>
                <article className="footer_article">
                    <h1>Social Media Links</h1>
                    <p>Adress</p>
                    <p>Phone number</p>
                    <p>Email</p>
                </article>
            </section>
            <p>Little Lemon • © 2026</p>

        </footer>
    )
}

export default Footer;
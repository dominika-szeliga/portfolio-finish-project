function Footer() {
    return(
        <footer>
            <img src='logo2.png' alt='logo'/>
            <section className="footer_section">
                <article className="footer_article">
                    <h1>Doormat Navigation</h1>
                    <nav className="footer_nav">
                        <ul>
                            <li><a href='home'>Home</a></li>
                            <li><a href='about'>About</a></li>
                            <li><a href='menu'>Menu</a></li>
                            <li><a href='reservation'>Reservation</a></li>
                            <li><a href='order online'>Order Online</a></li>
                            <li><a href='login'>Login</a></li>
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
        
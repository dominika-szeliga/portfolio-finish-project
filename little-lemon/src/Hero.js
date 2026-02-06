function Hero() {
    return(
            <section className="hero">
                <div className="hero_text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, <br />
                focused on traditional recipes served with a modern twist. </p>
                 <button type='submit' className="button_hero">Reserve a table</button>
                </div>
                <div className="hero_image">
                
                <img src='chief.png' alt='chief'/>
                </div>

             </section>
    )
}
export default Hero;
function Highlights() {
    return(

        <>
            <section className="main_highlights">
                <h1>This week's specials!</h1>
                <button type="submit" className="button_main">Online menu</button>
              </section>
            <section className="highlights">
            <article>
              <img src='salad.png' alt='salad'/>
            <h2>Greek salad</h2>
            <h3>Extra price 12.99$</h3>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutions.Order a delivery 
              <img src='delivery_icon.png' alt='icon'/>
            </p>
            </article>
          <article>
            <img src='bruschetta.png' alt='bruschetta'/>
            <h2>Bruschetta</h2>
            <h3>Extra price 5.99$</h3>
            <p>Our Bruchetta is made from grilled bread that has been smeared with garlic
            and seasoned with salt and olive oil.Order a delivery <img src='delivery_icon.png' alt='icon'/></p>
          </article>
          <article>
            <img src='lemon dessert.png' alt='lemon dessert'/>
            <h2>Lemon Dessert</h2>
            <h3>Extra price 5.00$</h3>
            <p>This comes straight from
          grandma’s recipe book every last ingredient has been sourced and is as authenics as can be imagined.
          Order a delivery <img src='delivery_icon.png' alt='icon'/></p>
          </article>
          </section>
          </>
              

    )
}

export default Highlights;
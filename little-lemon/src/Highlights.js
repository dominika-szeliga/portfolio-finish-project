function Highlights() {
    return(

        <>
            <section className="main">
                <h1>This week's specials!</h1>
                <button type="submit" className="button_main">Online menu</button>
              </section>
            <section className="highlights">
            <article>
            <h2>Greek salad</h2>
            <img src='salad.png' alt='salad'/>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutions.Order a delivery 
              <img src='delivery_icon.png' alt='icon'/>
            </p>
            </article>
          <article>
            <h2>Bruschetta</h2>
            <img src='bruschetta.png' alt='bruschetta'/>
            <p>Our Bruchetta is made from grilled bread that has been smeared with garlic
            and seasoned with salt and olive oil.Order a delivery <img src='delivery_icon.png' alt='icon'/></p>
          </article>
          <article>
            <h2>Lemon Dessert</h2>
            <img src='lemon dessert.png' alt='lemon dessert'/>
            <p>This comes straight from
          grandma’s recipe book every last ingredient has been sourced and is as authenics as can be imagined.
          Order a delivery <img src='delivery_icon.png' alt='icon'/></p>
          </article>
          </section>
          </>
              

    )
}

export default Highlights;
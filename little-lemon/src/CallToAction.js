import chief from './Assets/chief.png';

function CallToAction() {
    return(
            <section className="callToAction">
                <div className="callToAction_text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, <br />
                focused on traditional recipes served with a modern twist. </p>
                 <button type='submit' className="button_callToAction">Reserve a table</button>
                </div>
                <div className="callToAction_image">

                <img src={chief} alt='chief'/>
                </div>

             </section>
    )
}
export default CallToAction;
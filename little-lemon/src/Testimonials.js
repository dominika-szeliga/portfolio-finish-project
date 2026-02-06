function Testimonials() {
    return(
        <section className="testimonials">
            <h1>Testimonials</h1>
            <form method='post' className="testimonials_form">
                <div>
                    <label htmlFor='user_name'>Name</label><br />
                    <input type='text' name='user_name' id='user_name' required minlength='3' maxlength='15'/>
                </div>
                <label>Rating:</label>
                <fieldset id='rating'>
                    <label>
                        <input type='radio' name='rating' value='1'/>1
                    </label>
                    <label>
                        <input type='radio' name='rating' value='2'/>2
                    </label>
                    <label>
                        <input type='radio' name='rating' value='3'/>3
                    </label>
                    <label>
                        <input type='radio' name='rating' value='4'/>4
                    </label>
                    <label>
                        <input type='radio' name='rating' value='5'/>5
                    </label>
                </fieldset>
            <label htmlFor='review'>Review</label>
            <textarea id='review' name='review' rows='3' cols='20' maxlength='100' required></textarea>
            <button type='submit' className="button_testimonials">Submit</button>
            </form>
        </section>
    )
}

export default Testimonials;
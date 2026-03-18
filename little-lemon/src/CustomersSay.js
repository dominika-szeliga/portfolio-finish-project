import { useState,useEffect } from "react";

function CustomersSay() {

    const[submitted, setSubmitted]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted(true);
        e.target.reset(); // czyści formularz
    }

    useEffect(()=>{
        if(submitted){
            alert('Thank you for your opinion')
        }},[submitted])

    return(
        <section className="customersSay">
            <h1>Testimonials</h1>

            <form method='post' className="customersSay_form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='user_name'>Name</label><br />
                    <input type='text' name='user_name' id='user_name' required minLength='3' maxLength='15'/>
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
            <textarea id='review' name='review' rows='3' cols='20' maxLength='100' required></textarea>
            <button type='submit' className="button_customersSay" aria-label='Submit opinion'>📩</button>
            </form>
        </section>
    )
}

export default CustomersSay;
import { useState } from "react";
import React from "react";


function BookingForm({times, dispatch}){

    const[date, setDate]=useState('');
    const[time, setTime]=useState('');
    const[guests, setGuests]=useState('');
    const[occasion, setOccasion]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault(); /*zapobiega przeładowaniu strony przy wysyłaniu formularza */
        alert('Form is submitted')
        clearForm();
    }

    const getIsFormValid=()=>{
    return(
        guests && time && date)
}

const clearForm =()=>{
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('')
}


    return(
        <div className='booking_form'>
        <form style={{display:'grid', maxWidth:'200px', gap:'20px'}} onSubmit={handleSubmit}>
            <fieldset>
                <div className="Field">
            <label htmlFor='booking_date'>Booking date <sup>*</sup> </label>
            <input type='date' name='booking_date' id='booking_date' value={date}
             onChange={(e)=>{setDate(e.target.value); dispatch({type:'UPDATE_TIMES', date: e.target.value})}}/>
            </div>
            <div className="Field">
            <label htmlFor='booking_time'>Booking time <sup>*</sup> </label>
            <select id='booking_time' name='booking_time' value={time} onChange={(e)=>{setTime(e.target.value)}}>
            {times.map(el=>{return (
                    <option value={el} key={el}>{el}</option>
                )
            })}
            </select>
           </div>
            <div className="Field">
            <label htmlFor='booking_guests'>Number of guests <sup>*</sup> </label>
            <input type='number' id='booking_guests' name='booking_guests' min='1' max='10' placeholder='1' value={guests} onChange={(e)=>{setGuests(e.target.value)}}/>
            </div>
            <div className="Field">
            <label htmlFor='booking_occasion'>Occasion </label>
            <input type='text' id='booking_occasion' name='booking_occasion' list='datalist' value={occasion} onChange={(e)=>{setOccasion(e.target.value)}}/>
            <datalist id='datalist'>
                <option value='Birthday'>Birthday</option>
                <option value='Anniversary'>Anniversary</option>
            </datalist>
            </div>
            <div>
                <button type='submit' disabled={!getIsFormValid()}>Make Your reservation</button>
            </div>
         </fieldset>

        </form>
        </div>
    )
}

export default BookingForm;
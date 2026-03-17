import { useState } from "react";
import React from "react";


function BookingForm({ times, dispatch, submitForm }) {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); /*zapobiega przeładowaniu strony przy wysyłaniu formularza */
        submitForm({
            date,
            time,
            guests,
            occasion
        });                               //submitForm oczekuje parametru formData
        clearForm();
    }

    const getIsFormValid = () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); //ustawiam dzisiejszą datę na początek dnia (00:00)
        return (
            guests > 0 && time && date && new Date(date) >= today);
    }

    const clearForm = () => {
        setDate('');
        setTime('');
        setGuests(0);
        setOccasion('')
    }


    return (
        <div className='booking_form'>
            <form style={{ display: 'grid', maxWidth: '350px', gap: '20px', fontSize: '20px', padding: '1rem' }} onSubmit={handleSubmit}>
                <h1>Booking Form</h1>
                <fieldset>
                    <div className="Field">
                        <label htmlFor='booking_date'>Booking date <sup>*</sup> </label>
                        <input type='date' name='booking_date' id='booking_date' required aria-required='true' value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                                const newDate = new Date(e.target.value);
                                setTime(''); //reset godziny po zmianie daty, bo lista times zmienia się po: dispatch, a wybrana godzina mogłaby już nie istnieć
                                dispatch({ type: 'UPDATE_TIMES', date: newDate })
                            }} />
                    </div>
                    <div className="Field">
                        <label htmlFor='booking_time'>Booking time <sup>*</sup> </label>
                        <select id='booking_time' name='booking_time' required aria-required='true' value={time} onChange={(e) => { setTime(e.target.value) }}>

                            <option value="">Select time</option>
                            {times.map(el => {
                                return (
                                    <option value={el} key={el}>{el}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="Field">
                        <label htmlFor='booking_guests'>Number of guests <sup>*</sup> </label>
                        <input type='number' id='booking_guests' name='booking_guests' min='1' max='10' placeholder='1' required aria-required='true' value={guests} onChange={(e) => { setGuests(Number(e.target.value)) }} />
                    </div>
                    <div className="Field">
                        <label htmlFor='booking_occasion'>Occasion </label>
                        <input type='text' id='booking_occasion' name='booking_occasion' list='datalist' value={occasion} onChange={(e) => { setOccasion(e.target.value) }} />
                        <datalist id='datalist'>
                            <option value='Birthday'>Birthday</option>
                            <option value='Anniversary'>Anniversary</option>
                        </datalist>
                    </div>
                    <div>
                        <button type='submit' disabled={!getIsFormValid()} >Make Your reservation</button>
                    </div>
                </fieldset>

            </form>
        </div>
    )
}

export default BookingForm;
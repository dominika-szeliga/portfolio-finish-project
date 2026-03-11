import BookingForm from "./BookingForm";
import { useEffect, useReducer } from "react";
import {fetchAPI, submitAPI} from './api';
import {useNavigate} from 'react-router-dom';


export const updateTimes=(state,action)=>{
    if(action.type==='UPDATE_TIMES') {
         return fetchAPI(action.date);}  // fetchAPI oczekuje obiektu Date
            return state;                   //zwracam obecny stan gdy nic nie pasuje
    }

export const initializeTimes =()=>{
    const today= new Date();
    return fetchAPI(today);
}



function BookingPage() {

/*const[availableTimes, setAvailableTimes] =useState(['17:00','18:00','19:00','20:00','21:00','22:00']); stan z użyciem useState*/ 

const[availableTimes, dispatch]=useReducer(updateTimes, [], initializeTimes);

const navigate=useNavigate();

const submitForm =(formData)=>{
    const success= submitAPI(formData);      //submitForm(formData) wywołuje submitAPI(formData)


    if(success){
        navigate('/confirmed');
    }
}

return(
    <BookingForm times={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
)
// muszę pamiętać aby przekazać funkcję submitForm do formularza
}
export default BookingPage;
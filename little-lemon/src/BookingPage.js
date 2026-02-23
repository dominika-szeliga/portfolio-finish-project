import BookingForm from "./BookingForm";
import { useReducer } from "react";


const updateTimes=(state,action)=>{
    if(action.type==='UPDATE_TIMES') {
        console.log('Selected date:', action.date); //tylko tekstowo
         return ['17:00','18:00','19:00','20:00','21:00','22:00'];}
            return state;
    }

const initializeTimes =()=>{
    return ['17:00','18:00','19:00','20:00','21:00','22:00'];
}

function BookingPage() {

/*const[availableTimes, setAvailableTimes] =useState(['17:00','18:00','19:00','20:00','21:00','22:00']); stan z użyciem useState*/ 

const[availableTimes, dispatch]=useReducer(updateTimes, undefined, initializeTimes);

return(
    <>
    <BookingForm times={availableTimes} dispatch={dispatch}/>
    </>
)

}
export default BookingPage;
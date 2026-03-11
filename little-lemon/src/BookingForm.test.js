import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import {updateTimes, initializeTimes} from './BookingPage';
import { fetchAPI } from './api';



describe('Booking Form', ()=> {
  test('Renders the BookingForm heading', () => {

    const today= new Date();
    const availableTimes= fetchAPI(today);
    const dispatch = jest.fn();
    const submitForm = jest.fn();


  render (<BookingForm times={availableTimes} dispatch={dispatch} submitForm={submitForm}/>)
  const headingElement = screen.getByText('Booking Form');
  expect(headingElement).toBeInTheDocument();
});

})

describe('initializeTimes', ()=>{
  test('Returns the correct expected value', ()=>{

    const expectedValue= ['17:00','18:00','19:00','20:00','21:00','22:00'];
    const result = initializeTimes();

    expect(result).toEqual(expectedValue);
    expect(Array.isArray(result)).toBe(true); // to jest dodatkowa kontrola, że wynik to tablica
  })
})

describe('updateTimes', ()=>{
  test('Returns the same value that is given in the state', ()=>{

    const newDate= new Date(); //tworzę nową datę, e nie istnieje w testach
    const state= ['17:00','18:00','19:00','20:00','21:00','22:00'];
    const action = {type:'UNKNOWN_ACTION', date: newDate}

    const results=updateTimes(state, action);

    expect(results).toBe(state);
  })
})
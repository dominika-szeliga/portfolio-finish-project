import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import {updateTimes, initializeTimes} from './BookingPage';
import { fetchAPI } from './api';
import { isFormValid } from './validation';



describe('Booking Form', ()=> {

  let availableTimes;
  let dispatch;
  let submitForm;

  beforeEach(()=>{
    const today=new Date();
    availableTimes=fetchAPI(today);
    dispatch=jest.fn();
    submitForm=jest.fn();
    render(
      <BookingForm times={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    )
  }) //ten kod wykona się przed każdym testem w tym bloku describe

  test('Renders the BookingForm heading', () => {

  const headingElement = screen.getByText('Booking Form');
  expect(headingElement).toBeInTheDocument();
});

test('input date has got an attributtes required and type date', ()=>{

  const dateInput=screen.getByLabelText(/booking date/i);
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('type', 'date');
})

test('select time has got an attribute required', ()=>{

  const timeSelect=screen.getByLabelText(/booking time/i);
  expect(timeSelect).toHaveAttribute('required');
})

test('input number of guests has got an attributes: required, min, max and type number', ()=>{

  const numberOfGuestsInput=screen.getByLabelText(/number of guests/i);
  expect(numberOfGuestsInput).toHaveAttribute('required');
  expect(numberOfGuestsInput).toHaveAttribute('min', '1');
  expect(numberOfGuestsInput).toHaveAttribute('max','10');
  expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
})

test('input occasion accepts data from datalist', ()=>{
  const inputOccasion=screen.getByLabelText(/occasion/i);
  expect(inputOccasion).toHaveAttribute('list', 'datalist')
})

test('input first name has got an attribute required, minLength, maxLength',()=>{
  const firstNameInput=screen.getByLabelText(/first name/i);
  expect(firstNameInput).toHaveAttribute('required');
  expect(firstNameInput).toHaveAttribute('minLength','3');
  expect(firstNameInput).toHaveAttribute('maxLength', '10');
})

test('input last name has got an attribute required, minLength, maxLength',()=>{
  const lastNameInput=screen.getByLabelText(/last name/i);
  expect(lastNameInput).toHaveAttribute('required');
  expect(lastNameInput).toHaveAttribute('minLength','3');
  expect(lastNameInput).toHaveAttribute('maxLength', '12');
})

test('input email has got an attribute required and type email', ()=>{
  const emailInput=screen.getByLabelText(/email/i);
  expect(emailInput).toHaveAttribute('required');
  expect(emailInput).toHaveAttribute('type','email');
})

test('input phone numer has got an attribute required, type tel and minLength',()=>{
  const phoneNumberInput=screen.getByLabelText(/phone number/i);
  expect(phoneNumberInput).toHaveAttribute('required');
  expect(phoneNumberInput).toHaveAttribute('type', 'tel');
  expect(phoneNumberInput).toHaveAttribute('minLength', '9');

})

  test('submit button has got an attribute disabled', ()=>{
    const submitButton=screen.getByRole('button', {name:/make your reservation/i});
    expect(submitButton).toBeDisabled();
  })
})


describe('initializeTimes', ()=>{
  test('Returns the correct expected values', ()=>{

    const result = initializeTimes();
    const expectedValues= ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    expect(result).toEqual(expectedValues);
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


describe('isFormValid',()=>{
  test('returns true for valid data',()=>{
    expect(isFormValid(2,'18:00','2099-07-07')).toBe(true);
  })

  test('return false when guests=0',()=>{
    expect(isFormValid(0,'17:00','2099-05-05')).toBe(false);
  })

  test('returns false when time is empty',()=>{
    expect(isFormValid(5, '', '2099-09-08')).toBe(false);
  })

  test('returns false when date is empty',()=>{
    expect(isFormValid(7,'17:00','')).toBe(false);
  })

  test('returns false for date from past',()=>{
    expect(isFormValid(4,'20:00','2000-03-10')).toBe(false);
  })
})

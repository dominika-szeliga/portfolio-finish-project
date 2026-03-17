 export function fetchAPI(date){
 return ['17:00','18:00','19:00','20:00','21:00','22:00']
}  // fetchAPI zwraca tablicę dostępnych godzin dla podanej daty


export function submitAPI(formData){
    console.log('Sent data:', formData);
    return true;
}
// submitAPI przyjmuje dane formularza i zwraca true jeśli "wysłano"




/*export function fetchAPI(date){
  if(date.getDay() === 0 || date.getDay() ===6){
    return ['17:00','18:00','19:00','20:00','21:00','22:00']
  }
    return ['17:00','18:00,'19:00','20:00']
} */
//zapis z różnymi godzinami w zależności od dnia tygodnia



export function fetchAPI(date){
    return ['17:00','18:00','19:00','20:00','21:00','22:00']
}
// fetchAPI zwraca tablicę dostępnych godzin dla podanej daty


export function submitAPI(formData){
    console.log('Sent data:', formData);
    return true;
}
// submitAPI przyjmuje dane formularza i zwraca true jeśli "wysłano"
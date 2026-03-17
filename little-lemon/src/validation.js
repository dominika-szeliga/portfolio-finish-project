export const isFormValid=(guests,time,date)=>{

    const today=new Date();
    today.setHours(0,0,0,0);

    if(guests<=0) return false;
    if(!time) return false;
    if(!date) return false;

    return new Date(date) >=today;
}

//wydzielam funkcje getIsFormValid(), czyli wyjmuję logikę z komponentu, do osobnej niezależnej funkcji
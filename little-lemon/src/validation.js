export const isFormValid=(guests,time,date)=>{

    const today=new Date();
    today.setHours(0,0,0,0);

    return(
        guests >0 &&
        time !==''&&
        date !==''&&
        new Date(date)>=today
    );
}

//wydzielam funkcje getIsFormValid(), czyli wyjmuję logikę z komponentu, do osobnej niezależnej funkcji
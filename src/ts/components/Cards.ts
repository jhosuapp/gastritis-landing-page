const Cards = (()=>{

    const _CardsConfig = ()=>{
        const getAllCards = document.querySelectorAll<HTMLElement>('.cancer__cards__item');

        getAllCards.forEach((data : any)=>{
            data.addEventListener('click', ()=>{
                data.classList.toggle('active');
            });
        });
    }

    /*
    *Retornamos las funciones hijas en un objeto
    */
    return{
        setHandleEvent: function(){
            try { _CardsConfig(); } catch (error) { }
        }
    }
})();

/*
*Cargamos las funciones globales y las exportamos 
*/
const loadCardsHandlers = ():void=>{
    Cards.setHandleEvent();
}

export { loadCardsHandlers }
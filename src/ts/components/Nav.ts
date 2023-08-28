const Nav = (()=>{

    /*
    *Hamburgers menú in mobile
    */
    const _NavHamburger = ()=>{
        const getBtnHeaderHamburger = document.querySelector<HTMLDivElement>('#header-hamburger');
        const getNavHeader = document.querySelector<HTMLElement>('.header nav');
        getBtnHeaderHamburger?.addEventListener('click', ()=>{
            getBtnHeaderHamburger?.classList.toggle('active');
            getNavHeader?.classList.toggle('active');
        });
    }

    /*
    *Return childs functions
    */
    return{
        setHandleEvent: function(){
            try { _NavHamburger(); } catch (error) { }
        }
    }
})();

/*
*Load global functions
*/
const loadNavHandlers = ():void=>{
    Nav.setHandleEvent();
}

export { loadNavHandlers }
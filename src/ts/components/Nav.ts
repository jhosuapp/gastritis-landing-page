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
    *Efect scroll menu
    */
    const _NavScrollEfect = ()=>{
        const getLogoNav = document.querySelector<HTMLElement>('.header .header__logo img');

        window.addEventListener('scroll', ()=>{
            const getPostionY : number = window.scrollY;
            getPostionY > 0 ? getLogoNav?.classList.add('active') : getLogoNav?.classList.remove('active');
        })
    }

    /*
    *Return childs functions
    */
    return{
        setHandleEvent: function(){
            try { _NavHamburger(); } catch (error) { }
            try { _NavScrollEfect(); } catch (error) { }
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
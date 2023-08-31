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
    *Cliq items
    */
   const _NavStateItems = ()=>{
        const getAllItemsNav = document.querySelectorAll<HTMLElement>('.header nav a');
        const getNav = document.querySelector<HTMLElement>('.header nav');

        getAllItemsNav.forEach((data: any)=>{
            data.addEventListener('click', ()=>{
                getNav?.classList.remove('active');
                getAllItemsNav.forEach((nestedData: any)=>{
                    nestedData.classList.remove('active');
                });
                data.classList.add('active');
            });
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
    /Loader NAv
    */
   const _NavLoader = ()=>{
        const getLoader = document.querySelector('.loader');

        setTimeout(()=>{
            getLoader?.classList.remove('active');
        },1000);
   }

    /*
    *Return childs functions
    */
    return{
        setHandleEvent: function(){
            try { _NavHamburger(); } catch (error) { }
            try { _NavScrollEfect(); } catch (error) { }
            try { _NavStateItems(); } catch (error) { }
            try { _NavLoader(); } catch (error) { }
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
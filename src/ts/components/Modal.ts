const Modal = (()=>{

    const _ModalConfig = ()=>{
        const getModalWelcome = document.querySelector<HTMLElement>('#modal-welcome');
        const getAllBtnCloseModal = document.querySelectorAll<HTMLElement>('.modal--close');

        setTimeout(()=>{
            getModalWelcome?.classList.add('active');
        },5000);

        /*
        /CLOSE MODAL
        */
        getAllBtnCloseModal.forEach((data : any)=>{
            data.addEventListener('click', ()=>{
                const getParent : any = data.closest('.modal'); 
                getParent?.classList.remove('active');
            });
        });
    }

    /*
    /Open modal iframe
    */

    const _ModalOpen = ()=>{
        const getBtnOpenModal = document.querySelector<HTMLElement>('#open-modal');
        const getCtnModal = document.querySelector<HTMLElement>('#modal-iframe');

        getBtnOpenModal?.addEventListener('click', ()=>{
            getCtnModal?.classList.add('active');
        });
    }

    /*
    *Retornamos las funciones hijas en un objeto
    */
    return{
        setHandleEvent: function(){
            try { _ModalConfig(); } catch (error) { }
            try { _ModalOpen(); } catch (error) { }
        }
    }
})();

/*
*Cargamos las funciones globales y las exportamos 
*/
const loadModalHandlers = ():void=>{
    Modal.setHandleEvent();
}

export { loadModalHandlers }
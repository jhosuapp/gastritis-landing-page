import Swiper, {Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const SwiperLib = (()=>{

    const _SwiperLibConfig = ()=>{
        new Swiper(".swiper-banner", {
            modules: [Autoplay, Navigation, Pagination, EffectFade],
            slidesPerView: 1,
            spaceBetween: 20,
            // loop: true,
            effect: "fade",
            // autoplay: {
            //     delay: 0,
            //     disableOnInteraction: true,
            // },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }

    /*
    *Retornamos las funciones hijas en un objeto
    */
    return{
        setHandleEvent: function(){
            try { _SwiperLibConfig(); } catch (error) { }
        }
    }
})();

/*
*Cargamos las funciones globales y las exportamos 
*/
const loadSwiperLibHandlers = ():void=>{
    SwiperLib.setHandleEvent();
}

export { loadSwiperLibHandlers }
//Import styles
import "../sass/main.scss";
//Import components
import {loadNavHandlers} from "./components/Nav";
import {loadSwiperLibHandlers} from "./components/Swiper";
import {loadCardsHandlers} from "./components/Cards";
import {loadModalHandlers} from "./components/Modal";

/*
*Execute functions
*/
window.addEventListener('load', ()=>{
    loadNavHandlers();
    loadSwiperLibHandlers();
    loadCardsHandlers();
    loadModalHandlers();
});
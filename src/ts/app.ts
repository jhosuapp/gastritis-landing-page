//Import styles
import "../sass/main.scss";
//Import components
// import {loadExampleHandlers} from "./components/example";
import {loadNavHandlers} from "./components/Nav";
import {loadSwiperLibHandlers} from "./components/Swiper";

/*
*Execute functions
*/
window.addEventListener('load', ()=>{
    loadNavHandlers();
    loadSwiperLibHandlers();
});
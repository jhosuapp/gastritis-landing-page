//Import styles
import "../sass/main.scss";
//Import components
// import {loadExampleHandlers} from "./components/example";
import {loadNavHandlers} from "./components/Nav";

/*
*Execute functions
*/
window.addEventListener('load', ()=>{
    loadNavHandlers();
});
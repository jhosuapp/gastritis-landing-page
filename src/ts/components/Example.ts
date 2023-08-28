const Example = (()=>{

    const _exampleConfig = ()=>{
        console.log('example runing')
    }

    /*
    *Retornamos las funciones hijas en un objeto
    */
    return{
        setHandleEvent: function(){
            try { _exampleConfig(); } catch (error) { }
        }
    }
})();

/*
*Cargamos las funciones globales y las exportamos 
*/
const loadExampleHandlers = ():void=>{
    Example.setHandleEvent();
}

export { loadExampleHandlers }
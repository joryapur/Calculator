
/*Eventlistener que escucha cuando se carga el documento 
html. Esto es para evitar que cuando preguntemos por display
o botones nos diga que no existe porque si Js corre antes de que se
cargue hmtl y busca un elemento que todavia no se creo va a decir
que no exite.*/

window.addEventListener('load', ()=>{

    /*Dentro creamos las dos constantes para buscar y guardar
     el display y los botones(dentro de un html collection)*/

   const display=document.querySelector('.calculator-display');
   const keypadButtons= document.getElementsByClassName('keypad-button');
   
   /*Creamos otra constanta para convertir a Array el html collection 
    de los botones que creamos antes y asi poder iterarlo*/

   const keypadButtonsArray= Array.from(keypadButtons);

   /*iteramos por el nuevo array de botones que se creo*/

   keypadButtonsArray.forEach( (button) => {

    /*A cada boton le agregamos un Listener para 
    cuando se hace click*/

      button.addEventListener( 'click', ()=> {
         /*imprime el html que tiene adentro cada boton*/
        /*console.log(button.innerHTML);*/
        calculadora(button,display)
      
      })

   })
   
})

function calculadora(button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        
        case '=':
            calcular(display);
            break;
    
        default:
            actualizar(display,button);
            break;
    }
}

function calcular(display){
    display.innerHTML= eval(display.innerHTML) /*toma el string de lo que hay en el display y lo resuelve y lo guarda en el innerhtml del display)*/
     
}

function actualizar(display,button){
    if (display.innerHTML == 0) {
        display.innerHTML = ""; /*las comillas es para dejar un string vacio, sacar el 0*/
    }
       /*para mostrar en el display los botones que vayamos tocando uno al lado del otro*/
    display.innerHTML += button.innerHTML
}

function borrar(display){
    display.innerHTML = 0
}
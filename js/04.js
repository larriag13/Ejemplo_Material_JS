const buttons=document.querySelectorAll("button");//Selecciona todos los botones

for(let i=0;i<buttons.length;i++){//Recorre los botones
    buttons[i].addEventListener("click",muestraEdad);//Añade un evento a cada botón
}
function muestraEdad(){
    let anacimiento=parseInt(prompt('Ingrese año de nacimiento: '));
    let fechaActual=new Date();
    let añoActual=fechaActual.getFullYear();
    let edadActual=añoActual-anacimiento;
    console.log("La edad actual es: "+edadActual);
}

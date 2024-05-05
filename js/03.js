function muestraEdad(){
    let anacimiento=parseInt(prompt('Ingrese año de nacimiento: '));
    let fechaActual=new Date();
    let añoActual=fechaActual.getFullYear();
    let edadActual=añoActual-anacimiento;
    console.log("La edad actual es: "+edadActual);
}


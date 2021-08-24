const listaHamburguesa = [];
let   cantidad     = 2;


do{
  let entrada = prompt("Ingresar tu combo");
  listaHamburguesa.push(entrada.toUpperCase());
  console.log(listaHamburguesa.length);
}while(listaHamburguesa.length != cantidad) {
  alert("Productos: " + listaHamburguesa);
  
}
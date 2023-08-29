
let listaContacto = ["MarilinDeLaOssa", "SebastianMarimon", "MagalisMestra"]

function agregarContacto(nuevoContacto){
 listaContacto.push(nuevoContacto)

}
function borrarContacto(contactoABorrar){
  let nuevaLista = listaContacto.filter((contacto) => contacto !== contactoABorrar)
  listaContacto = nuevaLista
}
function imprimirContactos(){
    console.log(listaContacto)
}

agregarContacto("NellysMartinez");
imprimirContactos()
borrarContacto("SebastianMarimon")
imprimirContactos()
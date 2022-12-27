class Comidas {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    toString() {
        return this.nombre + ' ' + this.precio;
    }

}

let pedido = [];
let total = 0;




let milaComun = new Comidas("mila común", 650)
let milaCompleta = new Comidas("mila completa", 800)
let papas = new Comidas("agregado de papas", 100)
let napo = new Comidas("mila napolitana", 1000)

// ------------AGREGAR PEDIDO------------

function pedirMila(){
    pedido.push(milaComun);
    total += milaComun.precio;
}
function pedirMilaCompleta(){
    pedido.push(milaCompleta);
    total += milaCompleta.precio;
    
}
function pedirPapas() {
    pedido.push(papas);
    total += papas.precio;
    
}
function pedirNapo() {
    pedido.push(napo);
    total += napo.precio;
    
}
let totalActual = document.getElementById("totalactual");

document.getElementById("select-mila").onclick = function () {
    pedirMila();
    console.log(pedido);
    console.log("Por ahora el total es: $" + total)
    
    totalActual.innerText = 'El total es: $' + total;
    localStorage.setItem("pedido", pedido);
    localStorage.setItem("total", total);
}
document.getElementById("select-milacompleta").onclick = function () {
    pedirMilaCompleta();
    console.log(pedido);
    console.log("Por ahora el total es: " + total)
    
    totalActual.innerText = 'El total es: $' + total;
    localStorage.setItem("pedido", pedido);
    localStorage.setItem("total", total)
}
document.getElementById("select-napo").onclick = function () {
    pedirNapo();
    console.log(pedido);
    console.log("Por ahora el total es: " + total)
    
    totalActual.innerText = 'El total es: $' + total;
    localStorage.setItem("pedido", pedido);
    localStorage.setItem("total", total)
}
document.getElementById("select-papas").onclick = function () {
    pedirPapas();
    console.log(pedido);
    console.log("Por ahora el total es: " + total)
    
    totalActual.innerText = ' El total es: $' + total;
    localStorage.setItem("pedido", JSON.stringify(pedido));
    localStorage.setItem("total", total)
}

let totalGuardado = localStorage.getItem("total");
let pedidoGuardado = localStorage.getItem("pedido");

if(totalGuardado > 0){
    
    totalActual.innerText = ' El total es: $' + totalGuardado;
}


// ---------------ELIMINAR PEDIDO-------------------


function deleteLast() {
    let eliminado = pedido.pop();
    total -= eliminado.precio;
    totalActual.innerText = ' El total es: $' + total;
}


document.getElementById("delete-last").onclick = function () {
    deleteLast();
    console.log(pedido)
    console.log("Por ahora el total es: " + total);
    localStorage.setItem("total", total);
    localStorage.setItem("pedido", pedido);
}



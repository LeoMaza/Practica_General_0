
const PRECIO_CHOCOLATE = 400;
const PRECIO_ALFAJOR = 200;
const PRECIO_PAPAS_FRITAS = 300;
const PAGO_EFECTIVO = 1;
const TARJETA_1_PAGO = 2;
const TARJETA_3_PAGOS = 3;
const TARJETA_6_PAGOS = 4;


let elegirA = "num ppor def";
let elegirC = "num por def";
let elegirP = "num por def";
let cantidadCuotas = "num por def";

function sumaProductos() {
    let elegirC = Number(document.querySelector("#chocolate").value);
    let elegirA = Number(document.querySelector("#alfajor").value);
    let elegirP = Number(document.querySelector("#papasFritas").value);
  

}


function agregarCarrito() {
    let elegirC = Number(document.querySelector("#chocolate").value);
    let elegirA = Number(document.querySelector("#alfajor").value);
    let elegirP = Number(document.querySelector("#papasFritas").value);
    let sumProductos = elegirA + elegirC + elegirP;
    let producto = document.querySelector("#resultado");
    let total = PRECIO_CHOCOLATE * elegirC;
    let total2 = PRECIO_ALFAJOR * elegirA;
    let total3 = PRECIO_PAPAS_FRITAS * elegirP ;
    let precioFinal = total + total2 + total3 ;

   





    if (sumProductos <= 2) {
        producto.innerHTML = `
        <h3> El valor de los productos elegidos es de $${precioFinal} </h3>
        <h3> Por favor elija su medio de pago </h3>
        <select name="" id="lista">
        <option value="0">Seleccione..</option>
        <option value="1">Efectivo</option>
        <option value="2">1 Pago </option> 
        
        </select>
       `
    }
    else if ((sumProductos >= 3) && (sumProductos <= 6)) {
        producto.innerHTML = `
        <h3> El valor de los productos elegidos es de $${precioFinal} </h3>
        <h3> Por favor elija su medio de pago </h3>
        <select name="" id="lista">
        <option value="0">Seleccione..</option>
        <option  value="1">Efectivo</option>
        <option value="2">1 Pago </option>
        <option  value="3">3 Pagos </option>
        </select>
        
        `

    }
    else if (sumProductos >= 7) {
        producto.innerHTML = `
        <h3> El valor de los productos elegidos es de $${precioFinal} </h3>
        <h3> Por favor elija su medio de pago </h3>
        <select name="" id="lista">
        <option value="0">Seleccione..</option>
        <option  value="1">Efectivo</option>
        <option  value="2">1 Pago </option>
        <option  value= "3">3 Pagos </option>
        <option  value="4">6 Pagos </option>
        </select>
        
        `

    }
}

function finalizarCompra() {
    let elegirC = Number(document.querySelector("#chocolate").value);
    let elegirA = Number(document.querySelector("#alfajor").value);
    let elegirP = Number(document.querySelector("#papasFritas").value);
    let cantidadCuotas = document.querySelector("#lista").value;
    let producto = document.querySelector("#resultado2");
    let cantidadElegidaC = elegirC * PRECIO_CHOCOLATE;
    let cantidadElegidaP = elegirP * PRECIO_PAPAS_FRITAS;
    let cantidadElegidaA = elegirA * PRECIO_ALFAJOR;
    let eleccionParaDesc = cantidadElegidaC + cantidadElegidaA + cantidadElegidaP;
    let descuentoEf = ( eleccionParaDesc * 20) / 100;
    let precioFinalEF = eleccionParaDesc - descuentoEf;
    let tarjetaUnPago = eleccionParaDesc;
    let tarjetaTresCuotas = eleccionParaDesc / 3;
    let tarjetaSeisCuotas = eleccionParaDesc / 6;



    switch (Number(cantidadCuotas)) {
        case PAGO_EFECTIVO:
            producto.innerHTML = `
            <h3>En efectivo tiene un 20% de descuento, el precio final es de $${precioFinalEF}</h3>`;
            break;
        case TARJETA_1_PAGO:
            producto.innerHTML = `
            <h3>Con tarjeta de credito en 1 pago, el precio final es de $${tarjetaUnPago}  </h3>`;
            break;
        case TARJETA_3_PAGOS:
            producto.innerHTML = `
            <h3>Con tarjeta de credito en 3 pagos, el precio final es de $${eleccionParaDesc} en 3 cuotas de $${tarjetaTresCuotas.toFixed(2)}  </h3>`
            break;
        case TARJETA_6_PAGOS:
            producto.innerHTML = `
            <h3>Con tarjeta de credito en 6 pagos, el precio final es de $${eleccionParaDesc} en 6 cuotas de $${tarjetaSeisCuotas.toFixed(2)} </h3>
            `
            break;
        default:
            producto.innerHTML = `
            <h3>La opcion no es valida  </h3>
            `
            break;
    }




}
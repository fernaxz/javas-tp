function calcular(){
	//creacion de variabloes en donde se van a almacenar los datos capturados en las cajas de texto
var monto_ini =0;
var desc =0.80;
var total =0;

//Asignacion del valor capturado en la caja del texto enla variable
monto_ini = document.getElementById('inputNumber1').value;
operando = document.getElementById('selectOper').value;

//cálculo del descuento 
imp_desc = (inputNumber1 * desc)/100;

//calculo del total: monto inicial - importe del descuento de acuerdo al porcentaje del descuento y se asigna a la variable total
total = monto_ini - imp_desc
//Asignación del valor de la variable total a la caja de texto total
document.getElementById('par-total').innerHTML = "El total es de: " + total;

console.log(total);
}




//alert('funcionou?');
'user strict'


//document.getElementById('caixa').innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'

var btblue = document.getElementById ('azul');
var btgreen = document.getElementById ('verde');
var btorange = document.getElementById ('laranja');
var textoh3 = document.querySelector ('textoone');


btblue.onmouseover = () => document.body.style.backgroundColor = "blue";
btblue.onclick = () => textoh3.textContent = 'azul significa...';
btgreen.onmouseover = () => document.body.style.backgroundColor = "green";
btgreen.onclick = () => textoh3.textContent = 'verde significa...';
btorange.onmouseover = () => document.body.style.backgroundColor = "orange";
btorange.onclick = () => textoh3.textContent = 'laranja significa...';






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










    
    var btazul = document.getElementById('btazul');
    var btverde = document.getElementById('btverde');
    var btlaranja = document.getElementById('btlaranja');
    var textoH2 = document.querySelector('#textos');
    //alert("Funcionou!");

btnAzul.onmouseover = () => document.body.style.backgroundColor = "blue"; 
btnAzul.onclick = () => textoH2.textContent = 'Azul Significa Harmonia';
btnVerde.onmouseover = () => document.body.style.backgroundColor = "green"; 
btnVerde.onclick = () => textoH2.textContent = 'Verde Significa Saúde e Esperança';
btnLaranja.onmouseover = () => document.body.style.backgroundColor = "orange";
btnLaranja.onclick = () => textoH2.textContent = 'Laranja Significa Força e Energia';


    // btazul.addEventListener('click' , function(){
    //    // document.className = '' //Limpar Classe (versao mais simples)
    //     document.body.classList.remove('btverde' , 'btlaranja');
    //     document.body.classList.add('btazul');
    //     textoH2.textContent = 'Azul Significa Harmonia e Maturidade';
        
    // });
    
    
    
    // btverde.addEventListener('click' , function(){
    //    // document.className = '' //Limpar Classe (versao mais simples)
    //     document.body.classList.remove('btazul' , 'btlaranja');
    //     document.body.classList.add('btverde');
    //     textoH2.textContent =  'Verde Significa Saude e Esperanca';
        
    // });
    
    
    
    // btlaranja.addEventListener('click' , function(){
    //     //document.className = '' //Limpar Classe (versao mais simples)
    //     document.body.classList.remove('btverde' , 'btazul');
    //     document.body.classList.add('btlaranja');
    //    textoH2.textContent = 'Laranja Significa Forca e Energia';
              
        
    // });

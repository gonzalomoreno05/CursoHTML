$(function() {

    var pantalla = $("#pantalla"), num = 0, op ="";

   pantalla.on("click", function() {
           pantalla.val("");
       });

<!--------ESTA FUNCION DEVUELVE TRUE SI EL NUMERO NO ES VALIDO---------->
function numeroNoValido(x){
return (isNaN(x) || x == " "); <!----------------- || verdadero si alguno es verdadero, && verdadero si los dos son verdadero---->
}

$("#suma").on("click", function(){
operacion();
op = "+";
});

$("#resta").on("click", function(){
operacion();
op = "-";
});

$("#multiplicacion").on("click", function(){
operacion();
op = "*";
});

$("#division").on("click", function(){
operacion();
op = "/";
});


function operacion(){
if (op === "+"){
num += (+pantalla.val());
}
else if (op === "-"){
  num -= (+pantalla.val());
  } else if(op === "*"){
    num *= (+pantalla.val());
    } else if(op === "/"){
      num /= (+pantalla.val());
    }
  
  else {
  num = +pantalla.val();
  }
}
  
$("#cuadrado").on("click", function(){
var num = pantalla.val();
if(numeroNoValido(num)){
num = "Error";
}else{
num *= num;
}
pantalla.val(num);

});

$("#inverso").on("click", function(){
var num = pantalla.val();
if(numeroNoValido(num)){
num = "Error";
}else{
num = 1/num;
}
pantalla.val(num);

});

$("#raiz").on("click", function(){
var num = pantalla.val();
if(numeroNoValido(num) || num<0){
num = "Error";
}else{
num = Math.sqrt(num);
}
pantalla.val(num);

});

$("#pentera").on("click", function(){
var num = pantalla.val();
if(numeroNoValido(num)){
num = "Error";
}else{
num = Math.round(num);
}
pantalla.val(num);

});

$("#potencia2").on("click", function(){
var num = pantalla.val();
if(numeroNoValido(num)){
num = "Error";
pantalla.val("Error");
}else{
num = Math.pow(2, num);
}
pantalla.val(num);

});

$("#factorial").on("click", function(){
var num = pantalla.val();
if (num <0 || numeroNoValido(num) || num % 1 !== 0){ <!-----------SI EL RESTO ES DISTINTO DE 1------------->
num = "Error";
}
else{ 
var resultado = 1;
for (var i = 1; i <=num; i++) {
   resultado *= i;
   }
num = resultado;
}
pantalla.val(num);
});

$("#igual").on("click", function(){
operacion();
op = "";
if(numeroNoValido(num)){
num = "Error";  
}
pantalla.val(num);

});


$("#limpiar").on("click", function(){
num = pantalla.val();
num = " ";
pantalla.val(num);
});
});
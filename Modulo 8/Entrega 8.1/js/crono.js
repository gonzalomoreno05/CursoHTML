$(function(){
    function mostrar() {
        crono.html((+crono.html() + 0.1).toFixed(1));
    };
    function arrancar() {
        t=setInterval(mostrar, 100);
    };
    function parar() { 
        clearInterval(t);
        t=undefined;
    };
    function cambiar() {
        if (!t) arrancar();
        else {
            parar();
            memoria.push(crono.html());
            localStorage.memoria = JSON.stringify(memoria);
            mostrar_tabla();
        };
    };
    function inicializar() {
        if (t===undefined) {
            crono.html("0.0");
            memoria = [];
            localStorage.memoria = JSON.stringify(memoria);                 
            mostrar_tabla();
        };
    };
    function mostrar_tabla() {
        tabla = "";
        var i = 0;
        for (i=0; i<memoria.length; i++) {
            tabla += "<span class='formato'>&nbsp" + (i+1) + " - <strong style='color:#DF0101;'>" + memoria[i] + "</strong> seg&nbsp</span><br>";                   
        };
        $("#lista").html(tabla);
    };

    var t;
    var crono = $("#crono");            
    var cuerpo = $("#eventos");
    localStorage.memoria = localStorage.memoria || '[]';
    var memoria = JSON.parse(localStorage.memoria);                     
    if (memoria.length === 0) crono.html("0.0");
    else crono.html(memoria[memoria.length-1]);
    mostrar_tabla();            
    cuerpo.on("tap", cambiar);
    cuerpo.on("swipe", inicializar);
    $("#inicializar").on("click", inicializar);
    $("#cambiar").on("click", cambiar);
    alert("Los eventos touch funcionan en el cuerpo del cronómetro\n\nToque: Arrancar/Parar.\nDeslizar: Inicializar.");});    
//inicializamos la calculadora
		$(function(){
			var num, acc =0, op="";

			$("#pant").val("Introduzca número");
			
			
			$("#pant").on("click", function(){
				$("#pant").val("");
			});
			//Calculo del cuadrado
			$("#cuadrado").on("click", function(){
				$("#pant").val($("#pant").val()*$("#pant").val());
			});
			//Calculo del inverso
			$("#inverso").on("click", function(){
				num=$("#pant").val();
				$("#pant").val(1/num);

			});
			//Raiz cuadrada
			$("#raizc").on("click", function(){
				num=$("#pant").val();
				$("#pant").val(Math.sqrt(num));

			});
			//Parte entera
			$("#parte").on("click", function(){
				num=$("#pant").val();
				if (num>0) { num=Math.floor(num);}
				else{num=-Math.ceil(num);};
				$("#pant").val(num);

			});
			//operaciones binarias
			//Suma
			$("#suma").on("click", function(){
				num=$("#pant").val();
				op="+";
			});
			//resta
			$("#resta").on("click", function(){
				num=$("#pant").val();
				op="-";
			});
			//multiplicación
			$("#multip").on("click", function(){
				num=$("#pant").val();
				op="*";
			});
			//división
			$("#divi").on("click", function(){
				num=$("#pant").val();
				op="/";
			});
			//exponenciación
			$("#expon").on("click", function(){
				num=$("#pant").val();
				op="e";
			});
			//Sumatorio
			$("#Sumatorio").on("click", function(){
				var lista=$("#pant").val().split(",");
				var i=0, acc=0;
				while (i<lista.length){
					acc=acc+(+lista[i]);
					i++;
				}
				$("#pant").val(acc);
			});
			//Productorio de ne números
			$("#Producto").on("click", function(){
				var lista=$("#pant").val().split(",");
				var i=0, acc=1;
				while (i<lista.length){
					acc=acc*(+lista[i]);
					i++;
				}
				$("#pant").val(acc);
			});

			//Calcular
			$("#calcula").on("click", function(){
		
				if (op==="+") {num = (+num + +$("#pant").val())};
				if (op==="-") {num=+num - +$("#pant").val()};
				if (op==="*") {num=(+num * +$("#pant").val())};
				if (op==="/") {num=(+num / +$("#pant").val())};
				if (op==="e") {num=Math.pow(+num,+$("#pant").val())};

				$("#pant").val(num);

			});


		});
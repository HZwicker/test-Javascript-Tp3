    (function() {
      
       let c5 = app.getComponente('c5');
       let $ctrl = c5.$ctrl;

       $ctrl.triangulo = function (){
         
        
			var calcQ5 = document.getElementById("q5");
	        var Q5 = document.createElement('form'); 
	        calcQ5.appendChild(Q5);

	        var labelLA = document.createElement('label'); 
	        labelLA.innerHTML = "Lado A: ";
	        Q5.appendChild(labelLA);  

	        var inputLA = document.createElement('input'); 
	        inputLA.setAttribute("type", "number");
	        inputLA.setAttribute("id", "ladoA");
	        Q5.appendChild(inputLA);  

	        var linebreak = document.createElement('br');
	        Q5.appendChild(linebreak);  

	        var labelLB = document.createElement('label'); 
	        labelLB.innerHTML = "Lado B: ";
	        Q5.appendChild(labelLB);  

	        var inputLB = document.createElement('input'); 
	        inputLB.type = 'number'
	        inputLB.id = "ladoB";
	        Q5.appendChild(inputLB); 

	        linebreak = document.createElement('br');
	        Q5.appendChild(linebreak);  

	        var labelLC = document.createElement('label'); 
	        labelLC.innerHTML = "Lado C: ";
	        Q5.appendChild(labelLC);  

	        var inputLC = document.createElement('input'); 
	        inputLC.setAttribute("type", "number");
	        inputLC.setAttribute("id", "ladoC");
	        Q5.appendChild(inputLC); 

	        linebreak = document.createElement('br');
	        Q5.appendChild(linebreak);   

	  	    var botao = document.createElement('input'); 
	        botao.setAttribute("type", "button");
	        botao.setAttribute("value", "Calcular");

	        botao.onclick = function (){
		        var ladoA = document.getElementById('ladoA').value;
				var ladoB = document.getElementById('ladoB').value;
				var ladoC = document.getElementById('ladoC').value;
				var resultado = null;
				var resultado_calculo = document.getElementById('resultado_calculo');

				if( (ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoC + ladoB > ladoA)) {
					if (ladoA === ladoB && ladoA === ladoC) {
						resultado = "equilatero";
					} 
					else if ((ladoA === ladoB) || (ladoB === ladoC)){
						
						resultado =  "isosceles";	
					}
					else {
						resultado = "escaleno";
					}
				} 
				else {
					resultado = "não é um triangulo "
				}

				resultado_calculo = resultado;
				resultado_calculo.innerHTML;
				alert(resultado_calculo);

				
				
		    }

		    Q5.appendChild(botao); 
	      	

        }  

    })();
    
  
    app.c5.$ctrl.triangulo();

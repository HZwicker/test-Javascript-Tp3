 (function() {
      
       let c2 = app.getComponente('c2');
       let $ctrl = c2.$ctrl;

       $ctrl.calcularFatorial = function(){
         
            var calcQ2 = document.getElementById("q2");
            var Q2 = document.createElement('form'); 
           calcQ2.appendChild(Q2);

            var label = document.createElement('label'); 
            label.innerHTML = "Insira um número para  ser calculado a fatorial: ";
            Q2.appendChild(label);  

            var inputFat = document.createElement('input'); 
            inputFat.setAttribute("type", "number");
            inputFat.setAttribute("id", "fat");
            Q2.appendChild(inputFat);  

            var linebreak = document.createElement('br');
            Q2.appendChild(linebreak);  

            var botao = document.createElement('input'); 
            botao.setAttribute("type", "button");
            botao.setAttribute("value", "Calcular");
            
            botao.onclick = function (){
          //fazer o calculo aqui
            var fatorial = document.getElementById('fat').value;
            var resultado = null;

            var a = performance.now();

                function fatorialCalc(n){
                    

                    if ((n == 0) || (n == 1)){
                     return 1;
                    }
                    else{
                     return (n * fatorialCalc(n - 1));
                    }
                    

    		      }

                resultado = fatorialCalc(fatorial);

            var b = performance.now();
            alert("Resultado do fatorial: " + resultado + " | " + "Tempo: " + (b - a) + ' ms.');



            }

            Q2.appendChild(botao); 
        }  

        
         
       
      
    })();
    
  
    app.c2.$ctrl.calcularFatorial();

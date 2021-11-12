

  	alert("Hello World");
  	
    function calcula(operacion) {
        var n1 = document.calculadora.n1.value
        var n2 = document.calculadora.n2.value
        var resultado = eval(n1+operacion+n2)
        document.calculadora.resultado.value= resultado
        // body...
    }
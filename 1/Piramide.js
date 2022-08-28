const ladoA = document.querySelector("#ladoA");
const ladoB = document.querySelector("#ladoB");
const ladoC = document.querySelector("#ladoC");
let resultado = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");   
const lA = document.querySelector("#lA");
const lB = document.querySelector("#lB");
const lC = document.querySelector("#lC");

    btn.onclick = () =>
    {
        if(ladoA.value =="")
        {
            ladoA.focus();
        }else if(ladoB.value =="")
        {
            ladoB.focus();
        }else if(ladoC.value =="")
        {
            ladoC.focus();
        }else
        {
            resultado.value = tipoTriangulo(ladoA.value, ladoB.value, ladoC.value);
        }
    }

    const tipoTriangulo = (valor1, valor2, valor3) =>
    {
        valor1 = parseInt(valor1);
        valor2 = parseInt(valor2);
        valor3 = parseInt(valor3);
        if (valor1 < (valor2 + valor3) && valor2 < (valor1 + valor3) && valor3 < (valor1 + valor2))
        {   
            if(valor1 == valor2 && valor2 == valor3)
            {
                resultado = 'Triângulo Equilátero';
                return resultado;
            }else if(valor1 == valor2 || valor1 == valor3 || valor3 == valor2) 
            {
                resultado = 'Triângulo Isóceles';
                return resultado;
            }else if(valor1 != valor2 && valor1 != valor3 && valor2 != valor3)
            {
                resultado = 'Triângulo Escaleno';
                return resultado;
            }
        }else
        {
            resultado = 'Não é Triângulo';
            return resultado;
        }
    }
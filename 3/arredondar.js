const n1 = document.querySelector("#nota1");
let res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");   
const l1 = document.querySelector("#l1");
const aviso = document.querySelector("#aviso");
      
    btn.onclick = () =>
    {
        if(n1.value =="" )
        {
            n1.focus();
        }else if(n1.value > 100 || n1.value < 0 )
        {
            n1.value = "";
            res.value = "";
            aviso.innerText = "Somente valores entre 0 e 100";
        }else
        {
            res.innerHTML=classificaAluno(n1.value);
            aviso.innerText = "";
        }
    }

    function classificaAluno(nota) {
        const notaCorrigida = arredondar(parseInt(nota));
        return notaCorrigida;
    }
    
    function arredondar (nota) {
        console.log(nota);
        if (nota < 38) {
            return nota;
        } else if (nota % 5 >= 3 ) {
            nota = (nota + (5 - (nota % 5)));
            console.log(nota);
            return nota;
        } else {
            nota = nota - (nota % 5);
            console.log(nota);
            return nota;
        }
    }
    
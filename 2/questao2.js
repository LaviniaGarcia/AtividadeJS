const valA = document.querySelector("#valorA");
const valB = document.querySelector("#valorB");
const valC = document.querySelector("#valorC");
let resu = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");

btn.onclick = () =>
    {
        if(valA.value =="")
        {
            valA.focus();
        }else if(valB.value =="")
        {
            valB.focus();
        }else if(valC.value =="")
        {
            valC.focus();
        }else
        {
            resu.value = calculaBhaskara(valA.value, valB.value, valC.value);
        }
    }

    function calculaBhaskara(valA, valB, valC) {
    const delta = valB ** 2 - 4 * valA * valC;
    if (delta >= 0) {
        const res = [];
        v1 = (-valB + Math.sqrt(delta))/( 2 * valA);
        res.push(v1);
        v2 = (-valB - Math.sqrt(delta))/( 2 * valA);
        res.push(v2);
        return res;
    } else {
        return "Delta é negativo";
    }
}
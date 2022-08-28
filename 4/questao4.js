const val = document.querySelector("#valor");
let contagem = document.querySelector("#contador");
const btn = document.querySelector("#contar");

btn.onclick = () =>
    {
        if(val.value =="")
        {
            val.focus();
        }else
        {
            contagem.value = substituir(val.value);
        }
    }

function substituir (val){

    let contagem = []
    
    for( let i = 1; i <= val; i++){
         if(i % 5 == 0){
            contagem.push("Luidy")
         }
         if(i % 9 == 0){
            contagem.push("Moura")
         }
         if (i % 5 == 0 && i % 9 == 0){
            contagem.push("LuidyMoura")
         }
         if (i % 5 != 0 || i % 9 != 0) {
            contagem.push(i)
         }
    }
    console.log(contagem);
    return (contagem)
 }
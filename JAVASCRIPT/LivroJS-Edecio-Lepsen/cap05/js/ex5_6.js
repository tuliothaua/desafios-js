//Obtém os elementos da pagina
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let temDivisoes = 0 // variavel flag

    //Percorre todos os possiveis divisores de num
    for(let i = 2; i <= num / 2; i++){

        if(num % i == 0){ //se tem um divisor
            temDivisoes = 1 //Muda o flag
            break
        }
    }
    
    //Se num > 1 e não possui divisor
    if(num > 1 && !temDivisoes){
        resp.innerText = `${num} é primo`
    } else {
        resp.innerText = `${num} não é primo`
    }
})
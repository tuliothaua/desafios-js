//Obtém os elementos da pagina
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let numDivisoes = 0

    //Percorre todos os possiveis divisores de num
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            numDivisoes++
        }
    }
    //Se possui apenas 2 divisões (é primo)
    if(numDivisoes == 2){
        resp.innerText = `${num} é primo`
    } else {
        resp.innerText = `${num} não é primo`
    }
})
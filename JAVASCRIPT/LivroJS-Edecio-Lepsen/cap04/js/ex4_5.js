//Cria a referência ao form
const frm = document.querySelector("form")
const resp = document.querySelector("h3")


//Cria um "ouvinte"
frm.addEventListener("submit", (e) => {
    //Evita o envio do form
    e.preventDefault()

    //Obtém os valores
    const num = Number(frm.inNumero.value)

    //Calculo
    const raiz = Math.sqrt(num)

    //Exibe na tela o resultado
    if(Number.isInteger(raiz)){
        resp.innerText = `A Raiz quadrada de ${num} é ${raiz}`
    } else {
        resp.innerText = `Não há raiz exata para ${num}`
    }
})
//Cria Referência
const frm = document.querySelector("form")
const textResp = document.querySelector("h3")

//Cria o "ouvinte"
frm.addEventListener("submit", (e) => {
    const valorUso = Number(frm.inValor.value)
    const tempoUso = Number(frm.inTempo.value)

    const calculo = Math.ceil(tempoUso / 15) * valorUso
    textResp.innerText = `Valor a Pagar R$: ${calculo.toFixed(2)}`

    e.preventDefault()
})
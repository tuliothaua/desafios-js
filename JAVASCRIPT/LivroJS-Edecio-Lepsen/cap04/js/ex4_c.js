const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    //Evita o envio do form
    e.preventDefault()

    //Obtém os dados
    const valor = Number(frm.inValor.value)
    let troco = 0

    //Processo
    resp1.innerText = ``
    resp2.innerText = ``
    if (valor < 1.00){
        resp1.innerText = `Valor insuficiente.`
    } else if (valor >= 1.00 && valor < 1.75) {
        resp1.innerText = `Tempo 30 min`
        troco = valor - 1.00
        if(troco != 0){
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
        }
    } else if (valor >= 1.75 && valor < 3.00) {
        resp1.innerText = `Tempo 60 min.`
        troco = valor - 1.75
        if (troco != 0){
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
        }
    } else if (valor >= 3.00){
        resp1.innerText = `Tempo 120 min (máximo)`
        troco = valor - 3.00
        if(troco != 0){
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
        }
    }
})

frm.addEventListener("reset", (e) => {
    location.reload()
})
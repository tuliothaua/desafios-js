//Cria referência
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//Cria um "ouvinte"
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)
    
    const promo = Math.round(preco)
    const total = promo + promo

    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${total.toFixed(2)}`

    e.preventDefault() // evita o envio do form
})
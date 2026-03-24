//Cria referência
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//Cria o ouvinte
frm.addEventListener("submit", (e) => {

    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    const desconto = (preco * 0.50) + preco + preco
    const promo = preco * 0.50

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${desconto.toFixed(2)}`
    resp2.innerText = "O 3º Produto custa apenas R$ " + promo.toFixed(2)

    e.preventDefault()
})
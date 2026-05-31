//Referência ao form
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


let resposta = "" // string da resposta
let numContas = 0 // Contador
let valorTotal = 0 // Acumulador

//Cria o "ouvinte"
frm.addEventListener("submit", (e) => {

    //Evita envio do form
    e.preventDefault()

    //Entrada
    const desc = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    //Processo
    numContas++
    valorTotal = valorTotal + valor // valorTotal += valor
    resposta = resposta + desc + " - R$: " + valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta} ---------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`

    frm.inDescricao.value = "" // Limpa campos do form
    frm.inValor.value = ""
    frm.inDescricao.focus() // Posiciona no campo inDescricao do form
})
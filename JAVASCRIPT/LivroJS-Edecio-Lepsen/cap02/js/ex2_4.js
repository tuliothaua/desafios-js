//Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Cria um "ouvinte" de evento, acionado quando botão submit for clicado 
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value) //Obtém o conteúdo dos campos
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo //Calcula valora ser pago
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` //Exibe a resposta

    e.preventDefault() //evita o envio do form
})
//Cria a referência do form
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

//Cria um "ouvinte"
frm.addEventListener("submit", (e) => {
    //Evita o envio do form  
    e.preventDefault()

    //Obtém o valor do form
    const valor = Number(frm.inSaque.value)
    let auxValor = valor
   
    
    //Verificação
    if(valor % 10 != 0){
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
        frm.inSaque.focus()
        return
    }
    
    //Processamento
    const nota100 = Math.floor(valor / 100)
    let sobra = valor % 100

    const nota50 = Math.floor(sobra / 50)
    sobra = sobra % 50

    const nota10 = Math.floor(sobra / 10)
    sobra = sobra % 10

    

    //Exibe a resposta //270 ; 2; 1; 2;
    // 270 = 70 = 20 
    if(nota100 > 0){
        resp1.innerText = `Notas de R$ 100: ${nota100}`
    }
    if(nota50 > 0){
        resp2.innerText = `Notas de R$ 50: ${nota50}`
    }
    if(nota10 > 0){
        resp3.innerText = `Notas de R$ 10: ${nota10}`
    }
})
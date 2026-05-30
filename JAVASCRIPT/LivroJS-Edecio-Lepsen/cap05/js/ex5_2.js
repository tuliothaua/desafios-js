const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let resposta = ""

    for(let i = numero; i >= 1; i--){

        if(i > 1){
            resposta =  `${resposta} ` + i + ","
        } else {
            resposta =  `${resposta} ` + i + "."
        }
    }

    resp.innerText = `Entre ${numero} e 1: ` + resposta
})

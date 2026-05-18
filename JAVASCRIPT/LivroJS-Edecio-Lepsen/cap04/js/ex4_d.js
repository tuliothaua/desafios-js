//Referencia
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//Ouvinte
frm.addEventListener("submit", (e) => {
    //Evita o envio do form
    e.preventDefault()

    //Obtem os dados
    const A = Number(frm.inA.value)
    const B = Number(frm.inB.value)
    const C = Number(frm.inC.value)

    //Processo
    if (A > B + C){
        resp1.innerText = `Os Lados não formam um Triângulo`
    } else if (B > A + C) {
        resp1.innerText = `Os Lados não formam um Triângulo`
    } else if (C > A + B){
        resp1.innerText = `Os Lados não formam um Triângulo`
    } else {
        
        resp1.innerText = `Os Lados podem formar um Triângulo`

         if (A == B && B == C && C == A){
            resp2.innerText = `Tipo: Equilátero`
        } else if (A == B || B == C || A == C){
            resp2.innerText = `Tipo: Isóceles`
        } else if (A != B && B != C && C != A){
            resp2.innerText = `Tipo: Escaleno`
        }
    }

   

   
})
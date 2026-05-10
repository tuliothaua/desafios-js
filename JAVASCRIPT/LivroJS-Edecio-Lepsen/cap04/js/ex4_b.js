//Referencia
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Ouvinte
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    //Obtendo as informações
    const veloPermitida = Number(frm.inVelocidade.value)
    const veloCondutor = Number(frm.inCondutor.value)

    const velo20 = veloPermitida * 1.20

      if (veloCondutor <= veloPermitida){
        resp.innerText = `Situação: Sem Multa`
    } else if (veloCondutor <= velo20){
        resp.innerText = `Situação: Multa Leve`
    } else if (veloCondutor > velo20){
        resp.innerText = `Situação: Multa Grave`
    }
})
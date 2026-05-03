const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let resultado

    if (num % 2 == 0){
        resultado = "Par"
    } else {
        resultado = "Ímpar"
    }
    resp.innerText = `${num} é ${resultado}`
})
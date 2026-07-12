const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let estrelas = ""
    for(let i = 1; i <= num; i++){
        if(i % 2 == 1){
            estrelas = estrelas + "*" // na posição impar do i: *
        } else {
            estrelas = estrelas + "_" // na posição par
        }
    }
    resp.innerText = estrelas 
})
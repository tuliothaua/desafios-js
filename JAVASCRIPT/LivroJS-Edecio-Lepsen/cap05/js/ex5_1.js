const frm = document.querySelector("form")
let resp = document.querySelector("pre")




frm.addEventListener("submit", (e) => {
    
    e.preventDefault()
    
    const x = Number(frm.inNumero.value)
    let resposta = ""
    let y = 0

    for(let c = 0; c <= 10; c++ )
    {   
        y = x * c 
        resposta = resposta + `\n${x} X ${c} = ${y}`    
    }
   
    resp.innerText = resposta
})

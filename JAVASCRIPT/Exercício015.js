/* TÚLIO THAUÃ DUTRA */

//Contador de Vogais: A E I O U
let word = 'Tulio Thaua Dutra'

//Process
function countVogais(word){
    let resultado = 0
    word.split("")
    for(let i=0; i < word.length; i++){
        //verificar qnts letras tem a palavra: resultado = i
        if(word[i] == 'A' || word[i] == 'a'){
            resultado ++
        } else if (word[i] == 'E' || word[i] == 'e'){
            resultado ++
        } else if (word[i] == 'I' || word[i] == 'i'){
            resultado ++
        } else if(word[i] == 'O' || word[i] == 'o'){
            resultado ++
        } else if(word[i] == 'U' || word[i] == 'u'){
            resultado ++
        } else {
            continue;
        }
    }
    return resultado
}

//Creating the exit
console.log(countVogais(word))

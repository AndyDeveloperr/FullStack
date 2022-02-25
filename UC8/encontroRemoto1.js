var listaDePecas = ["Amortecedor", "Motor", "Filtro de ar"] 

let peso = 50 ; 
if (peso < 100) {
console.log ("A peça deve pesar no minimo 100g")
} else {
    console.log ("A peça tem o peso adequado")
}

if (listaDePecas.length < 10){
console.log("É possivel cadastrar mais peças")
} else {
console.log("Não tem mais espaço na lista")
}

let nomePeca= "Disco de Freio"
if (nomePeca.length > 3){
    console.log ("Nome da peça estpa de adequado para o cadastro")
} else if (nomePeca.length == 0){
    console.log ("O noe da peç nãopode ser vazio")
} else {  
console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}
const evento1 = "curso full stack"
var data1 = "20/02"
var nascimento = 2006
var oQueCadastrar = "participante"
var nome = "Luiz"
var numeroDeParticipantes = 80
if (oQueCadastrar == "evento") {
    console.log("digite a data do evento")
    if (data1 == "20/02"){
        console.log("data disponivel para o evento, digite o nome do evento")
    }else {
        console.log("data inválida")
    }
    if (evento1.length >= 3){
        console.log("evento cadastrado com sucesso")
    }else if (evento1.length == 0) {
        console.log("evento não pode ter 0 caracteres")
    }else {"O evento precisa ter 3 ou mais caracteres"}

}
if (oQueCadastrar == "palestrante"){
    console.log("digite a data do evento")
    if (data1 == "20/02"){
        console.log("digite sua idade")
    }else {
        console.log("data inválida, informar uma data valida")}
        if (nascimento <= 2005){
            console.log("informar nome")
        }else {
            console.log("evento disponivel apenas para maior de 18 anos, digite uma data válida")}
            if (nome.length <= 4){
                console.log("nome só é permitido com 4 ou mais caracteres, digite um nome valido")
            }else if (nome.length == 0) {
                console.log("nome não pode ter 0 caracteres")
            }else {console.log("cadastro realizado com sucesso")}
}
if (oQueCadastrar == "participante"){
    console.log("Informar a data do evento")
    if (data1 != "20/02"){
        console.log("Informar uma data válida")
    }else { console.log("Verificando quantidade de participantes cadastrados")

    }if (numeroDeParticipantes <= 100){
        console.log("Informar data de nascimento")
    }else {console.log("Evento lotado, não há mais vagas")
    }if (nascimento <= 2005) {
        console.log("Informar nome")
    }else {console.log("Evento só é permitido para maior de 18 anos")}
    if (nome.length <= 4) {
        console.log("Nome só é permitido com 4 ou mais caracteres, digite um nome válido")
    }else if (nome.length == 0) {
        console.log("Nome não pode ter 0 caracteres")
    }else console.log("Cadastro realizado com sucesso")}
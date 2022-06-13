let listaNoticias = [
    {
        titulo:"Brasil começa a vender terrenos na lua",
        descricao:"Tem gente vendendo terreno na lua nesse país de louco"
    },
    {
        titulo:"Tenho sono",
        descricao:"Dormir muito tarde e acordar muito cedo"
    },
    {
        titulo:"O dolar esta alto",
        descricao:"Não é novidade, mas temos que noticiar"
    },
    {
        titulo:"Desça daí",
        descricao:"Tem corno se jogando de prédio achando que tem asa"
    },
    {
        titulo:"compra de NFT aumenta no Brasil",
        descricao:"Por cauda de jogos que usam NFT"
    },
    {
        titulo:"Tá frio, mas tá calor também",
        descricao:"Tem lugar que tá frio e tem lugar que tá calor"
    },
]
function renderizarNoticias() {
    let espaco = document.getElementById("espaco-noticias")
    let template = "";

    for (let index = 0; index < listaNoticias; index ++){
        const noticia = listaNoticias[index];
    
    }
    
    template += '<div class="history"><img scr ="" alt =""><h3>${noticia.titulo}</h3><p>${noticia.descrição}.</p></div>'

    espaco.innerHTML = template;
}



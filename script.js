const containerVideos = document.querySelector('.videos__container');

async function buscarEMostrarVideos() {
    try{
        const apiBusca = await fetch("http://localhost:3000/videos");
        const apiVideos = await apiBusca.json();

            apiVideos.forEach((video) => {
                containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="logo do canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                        <p class="categoria" hidden>${video.categoria}</p>
                    </div>
                </li>
                `;
            })
    } catch(error){
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error} </p>`
    // } finally {
    //     alert('As vezes isso acontece.')
    }
};

buscarEMostrarVideos();

// Tratamento de Erros:

/*  Uma forma de tratar erros:

.catch((error) => {
    containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error} </p>`
})

*/


// Barra de pesquisa funcional:

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener('input', filtarPesquisa);

function filtarPesquisa() {
    const videos = document.querySelectorAll(".videos__item");
    const valorFiltro = barraDePesquisa.value.toLocaleLowerCase();

    videos.forEach((video) => {
        const titulo = video.querySelector('.titulo-video').textContent.toLocaleLowerCase();
    
        video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
    });
};

// Mesma funcação de loop, mas com um código diferente:

/*
    if(barraDePesquisa.value != "") {
        for(let video of videos) {
            let titulo = video.querySelector('.titulo-video').textContent.toLocaleLowerCase();
            let valorFiltro = barraDePesquisa.value.toLocaleLowerCase();

            if(!titulo.includes(valorFiltro)) {
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }
        }
    } else {
        video.style.display = "block";
    }
*/

// Filtro de busca por categoria:

const botaoCateogira = document.querySelectorAll(".superior__item");

botaoCateogira.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener('click', () => filtrarPorCategoria(nomeCategoria));
});

function filtrarPorCategoria(filtro) {
    const videos = document.querySelectorAll(".videos__item");
    for(let video of videos){
        let categoria = video.querySelector(".categoria").textContent.toLocaleLowerCase();
        let valorFiltro = filtro.toLocaleLowerCase();

        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo') {
            video.style.display = "none";
        } else {
            video.style.display = "block";
        }
    }
}
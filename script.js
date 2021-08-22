function gerarImagem() {
    let fotos = document.querySelector('div.fotos');
    fetch('https://picsum.photos/500/300')
    .then(resp => {
        let imagem = resp.url;
        fotos.insertAdjacentHTML('beforeend', `
            <div class="foto">
                <img src=${imagem} loading="lazy" />
            </div>
        `);
    });
}

window.addEventListener('load', () => {
    for (let i = 0; i < 3; i++) {
        gerarImagem();
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        gerarImagem();
    }
});

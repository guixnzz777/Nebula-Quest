const defaultBackground = 'https://wallpapers.com/images/hd/4k-ultra-hd-galaxy-halo-planet-8em36r3m48mpqdpw.jpg';
const specificBackgrounds = {
    1: 'https://img.freepik.com/premium-photo/lone-alien-stands-glowing-bioluminescent-forest-alien-planet_14117-567456.jpg',
    3: 'https://img.freepik.com/fotos-premium/uma-pedra-magica-na-floresta-a-noite_969965-2992.jpg',
    4: 'https://i.imgur.com/7HEgCaG.png',
    5: 'https://i.imgur.com/gjmqaHz.png',
    7: 'https://i.imgur.com/gjmqaHz.png',
    10: 'https://i.imgur.com/vWIHGus.png',
};

const avanca = document.querySelectorAll('.glow-on-hover');

avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        const novoPasso = document.getElementById(proximoPasso);
        novoPasso.classList.add('ativo');

        // Muda a imagem de fundo com base no passo atual
        const passoIndex = parseInt(this.getAttribute('data-proximo')); // Converte para um número
        const backgroundDiv = document.querySelector('.background');

        // Verifica se há uma imagem específica para o passo, caso contrário, usa a imagem padrão
        if (specificBackgrounds[passoIndex]) {
            backgroundDiv.style.backgroundImage = `url(${specificBackgrounds[passoIndex]})`;
        } else {
            backgroundDiv.style.backgroundImage = `url(${defaultBackground})`;
        }
    });
});

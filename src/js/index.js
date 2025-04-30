// Seleciona o botão que irá alternar a visibilidade das plataformas
const botaoPlataforma = document.querySelector(".btn-plataforma");
// Seleciona o elemento que contém as plataformas
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

// Adiciona um evento de clique para alternar a classe 'ativo' e mostrar/ocultar as plataformas
botaoPlataforma.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

// Obtém o botão de alternância de tema
const toggleThemeButton = document.getElementById('toggle-theme');

// Função para aplicar o tema de acordo com a escolha
function applyTheme(theme) {
    // Seleciona o ícone de tema e a imagem de fundo
    const iconeTema = document.getElementById('icone-tema');
    const imagemFundo = document.querySelector('.imagem-fundo');
    
    // Altera o ícone e a imagem de fundo de acordo com o tema
    if (theme === 'shadow') {
        iconeTema.src = './src/imagens/icone/logo-shadow.png';
        iconeTema.alt = 'Tema escuro';
        imagemFundo.src = './src/imagens/wallpaper/jogo-sonic-shadow-1.png';
    } else {
        iconeTema.src = './src/imagens/icone/logo-sonic.png';
        iconeTema.alt = 'Tema claro';
        imagemFundo.src = './src/imagens/wallpaper/jogo-sonic-shadow.png';
    }
}

// Aplica o tema carregado ao iniciar (caso não haja tema, o padrão será 'sonic')
const savedTheme = localStorage.getItem('theme') || 'sonic';
document.documentElement.setAttribute('data-theme', savedTheme);

// Aplica o tema inicialmente
applyTheme(savedTheme);

// Função para alternar o tema entre 'sonic' e 'shadow'
toggleThemeButton.addEventListener('click', () => {
    // Lê o tema atual do atributo no HTML
    const currentTheme = document.documentElement.getAttribute('data-theme');

    // Define o novo tema com base no tema atual
    const newTheme = currentTheme === 'sonic' ? 'shadow' : 'sonic';

    // Aplica e salva o novo tema no localStorage
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Aplica o tema alterado
    applyTheme(newTheme);
});

// Lista das imagens de fundo para o carrossel
const imagens = [
    './src/imagens/wallpaper/jogo-sonic-shadow.png',
    './src/imagens/wallpaper/jogo-sonic-shadow-1.png',
    './src/imagens/wallpaper/jogo-sonic-shadow-2.png',
    './src/imagens/wallpaper/jogo-sonic-shadow-3.png',
    './src/imagens/wallpaper/jogo-sonic-shadow-4.png'
];

// Variável para controlar o índice da imagem atual
let indiceImagemAtual = 0;

// Seleciona o elemento da imagem de fundo
const imagemFundo = document.querySelector('.imagem-fundo');

// Função para alternar a imagem do carrossel
function alternarImagem() {
    // Atualizar para a nova imagem
    const novaImagem = imagens[indiceImagemAtual];
    imagemFundo.src = novaImagem;

    // Avançar o índice para a próxima imagem (loop no final da lista)
    indiceImagemAtual = (indiceImagemAtual + 1) % imagens.length;
}

// Inicializa a troca de imagens
alternarImagem();

// Mudar a imagem automaticamente a cada 5 segundos
setInterval(alternarImagem, 5000);

// Interação com o anel do Sonic
const sonicRing = document.getElementById('sonic-ring');
const ring = document.getElementById('ring');
const sonicRingSound = document.getElementById('sonic-ring-sound');

sonicRing.addEventListener('click', () => {
    ring.style.display = 'block';
    sonicRingSound.currentTime = 0;
    sonicRingSound.play();
    ring.classList.add('bounce');

    setTimeout(() => {
        ring.style.display = 'none';
        ring.classList.remove('bounce');
    }, 500);
});

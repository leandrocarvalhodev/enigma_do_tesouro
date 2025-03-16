let listaBtn = document.querySelectorAll('.btn');
let moedaDeOuro = 'url("img/ouro.png")';
let moedaDePrata = 'url("img/prata.png")';

listaBtn.forEach(btn => {
    btn.addEventListener('click', trocaDeImagem)

    function trocaDeImagem() {
        let moeda = btn.style.backgroundImage;
        return btn.style.backgroundImage = moeda == moedaDeOuro ? moedaDePrata : moedaDeOuro;
    }
});

// OPÇÃO USANDO IF E ELSE PARA TROCA DE IMAGEM

//     function trocaDeImagem() {
//         let imagem = btn.style.backgroundImage;
//         if (imagem === moedaDeOuro) {
//             btn.style.backgroundImage = moedaDePrata;
//         } else {
//             btn.style.backgroundImage = moedaDeOuro;
//         }
//     }

let enviar = document.getElementById('enviar');
enviar.addEventListener('click', mostrarMensagem)

function mostrarMensagem() {
    let listaBotoes = [0, 1, 2, 3, 4, 5, 6, 7];
    let sequenciaCorreta = [
        'url("img/prata.png")',
        'url("img/ouro.png")',
        'url("img/prata.png")',
        'url("img/prata.png")',

        'url("img/prata.png")',
        'url("img/prata.png")',
        'url("img/ouro.png")',
        'url("img/ouro.png")'
    ]

    // console.log(listaBotoes)
    // console.log(sequenciaCorreta)

    let bot1 = document.getElementById('bot1')
    let bot2 = document.getElementById('bot2')
    let bot3 = document.getElementById('bot3')
    let bot4 = document.getElementById('bot4')

    let bot5 = document.getElementById('bot5')
    let bot6 = document.getElementById('bot6')
    let bot7 = document.getElementById('bot7')
    let bot8 = document.getElementById('bot8')

    listaBotoes.splice(0, 1, bot1.style.backgroundImage)
    listaBotoes.splice(1, 1, bot2.style.backgroundImage)
    listaBotoes.splice(2, 1, bot3.style.backgroundImage)
    listaBotoes.splice(3, 1, bot4.style.backgroundImage)

    listaBotoes.splice(4, 1, bot5.style.backgroundImage)
    listaBotoes.splice(5, 1, bot6.style.backgroundImage)
    listaBotoes.splice(6, 1, bot7.style.backgroundImage)
    listaBotoes.splice(7, 1, bot8.style.backgroundImage)



    function checaSequencia(s1, s2) {
        return JSON.stringify(s1) === JSON.stringify(s2);
    }
    // console.log(checaSequencia(listaBotoes, sequenciaCorreta)) // true


    if (checaSequencia(listaBotoes, sequenciaCorreta)) {
        // console.log("sequência correta")
        let formulario = document.getElementById('formulario');
        formulario.style.display = 'flex';
        let sequenciaErrada = document.getElementById('sequencia-errada')
        sequenciaErrada.innerHTML = ""
        let palavraSecreta = document.getElementById('palavra-secreta');
        palavraSecreta.innerHTML = "<span>g</span>B<span>c</span>L<span>wg</span>A<span>b</span>C<span>vl</span>K<span>ar</span>BE<span>y</span>A<span>i</span>R<span>s</span>D<span>z</span>"

    } else {
        // console.log("sequencia incorreta")
        let sequenciaErrada = document.getElementById('sequencia-errada')
        sequenciaErrada.innerHTML = "Sequência incorreta, tente novamente..."
        let formulario = document.getElementById('formulario');
        formulario.style.display = 'none';
    }
}

let enviarResposta = document.getElementById('enviar-palavra');
enviarResposta.addEventListener('click', checaPalavra);

function checaPalavra() {
    let palavraCorreta = "blackbeard";
    let resposta = document.getElementById('input-palavra').value.toLowerCase();

    if (palavraCorreta === resposta) {
        alert("Parabéns, vc acertou! Agora pegue seu tesouro!!!");
        window.location.href = 'tesouro.html'
    } else {
        alert('Palavra errada, você deve ter digitado algo errado... será que confundiu alguma letra?')
    }

}




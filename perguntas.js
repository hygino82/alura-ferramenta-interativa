/*let container = document.getElementById('container');

function criaCartao(categoria, pergunta, resposta) {
    container.innerHTML += `
            <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>${categoria}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>${pergunta}?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>${resposta}</p><br>
                    </div>
                </div>
            </article>
    `;
}*/

criaCartao(
    'Matemática',
    'Qual a principal diferença que extiste entre os triângulo e os outros polígonos?',
    'O triângulo é o único polígono que não sofre deformação'
)

criaCartao(
    'Biologia',
    'Qual o ramo da ciência estuda os pássaros?',
    'Ornitologia'
)

criaCartao(
    'Programação',
    'O que é Java?',
    'É uma linguagem de programação de alto nível, compilada e fortemente tipada desenvolvida pela Sun Microsystems em 1995'
)

criaCartao(
    'Programação',
    'Qual o comando para mostar mensagens no console do JavaScript?',
    'console.log()'
)
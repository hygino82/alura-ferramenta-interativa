const perguntas = [
  {
    categoria: 'Matemática',
    pergunta: 'Qual a principal diferença que existe entre os triângulos e os outros polígonos ?',
    resposta: 'O triângulo é o único polígono que não sofre deformação.'
  },
  {
    categoria: 'Biologia',
    pergunta: 'Qual o ramo da ciência que estuda os pássaros ?',
    resposta: 'Ornitologia.'
  },
  {
    categoria: 'Programação',
    pergunta: 'O que é Java?',
    resposta: 'É uma linguagem de programação de alto nível, compilada e fortemente tipada desenvolvida pela Sun Microsystems em 1995.'
  },
  {
    categoria: 'Programação',
    pergunta: 'Qual o comando para mostrar mensagens no console do JavaScript ?',
    resposta: 'console.log().'
  },
  {
    categoria: 'Programação',
    pergunta: 'Qual foi a primeira linguagem de programação de alto nível ?',
    resposta: 'IBM Mathematical FORmula TRANslation System (FORTRAN)'
  },
  {
    categoria: 'Programação',
    pergunta: 'A IDE do Arduino usa qual linguagem de programação ?',
    resposta: 'C++'
  }
];

perguntas.forEach(({ categoria, pergunta, resposta }) => criaCartao(categoria, pergunta, resposta));


// Pegando a media dos valores passados como argumentos

const media = (...args) => args.reduce((a, b) => a + b) /args.length;
console.log(`Média: ${media(1, 2, 3, 4)}`);
// Verificando se a guia atual esta em foco, utilizando document.hidden
const isBrowserTabInView = () => document.hidden();

console.log(isBrowserTabInView());
// Resultado: Retorna Verdadeiro caso esteja em foco e falso caso nao esteja.
//pegando um valor booleano aleatorio
const randomBoolean = () => Math.random() >= 0.5;
console.log(randomBoolean());
/*
* resultado: Tem 50% de chances de ser TRUE e 50% de ser FALSE
* Caso queira alterar as chances de serem true ou false, alterar onde esta o valor 0.5, que seria equivalente a 50%
*/
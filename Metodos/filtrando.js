const pessoas = [
  {nome: "Thalia"},
  {nome: "Geronimo"},
  {nome: "Maria"},
];

const filtrarPessoas = pessoas.filter((pessoa) => {
    for(let p in pessoa){
      console.log(`Nome: ${pessoa[p]}`);

      if(pessoa[p] === "Geronimo"){
        console.log("O elemento surpresa esta na lita");
      }
    }
    return;
});


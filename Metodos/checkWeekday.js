//Utilizando o metodo, vc vai poder chegar se a data que voce digitou é um dia da semana ou um final de semana

const isWeekDay = (date) => date.getDay() % 6 !== 0;  

                            // ano|mes|dias
console.log(isWeekDay(new Date(2021, 0, 11)));
// Resutado: True (Segunda Feira)
                            // ano|mes|dias
console.log(isWeekDay(new Date(2021, 5, 4)));
// Resposta: False (Sabado);

// A regra do mes é a seguinte:
/*
    * Janeiro = 0
    * Fevereiro = 1
    * Março = 2
    * Abril = 3
    * Maio = 4
    * Junho = 5
    * *Julho = 6
    * Agosto = 7
    * Setembro = 8
    * Outubro = 9
    * Novembro = 10
    * Dezembro = 11
*/
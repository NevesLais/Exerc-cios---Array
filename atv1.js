/*1. Crie um array com 5 nomes e exiba cada nome no console usando um laço
for.*/

let nomes = ["João", "Amanda", "Bruno", "Pedro", "Luiza"];


for (let i = 0; i < nomes.length; i++) {

   console.log(nomes[i]);

}






/*let i = 0 define a variável i como 0, que é o índice do primeiro item no array (ou seja, "João").

i < nomes.length é a condição de continuação do laço. A cada iteração, o valor de i vai aumentar em 1 (o que corresponde ao índice do próximo elemento do array). O laço continuará enquanto i for menor que nomes.length (que é 5, o número de elementos do array).

i++ incrementa o valor de i em 1 a cada volta do laço. Isso faz com que o laço percorra cada índice do array, de 0 a 4.

console.log(nomes[i]) vai imprimir no console o valor do item do array correspondente ao índice i.*/
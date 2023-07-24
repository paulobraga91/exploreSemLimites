/*Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
    
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/
/*1 questáo*/
console.log("Hello Word")

/*2 questáo*/
let a = 10
let b = 20

console.log(`Soma das variáveis ${a+b}`)

/*3 questáo*/
if(typeof(a)==Number){
    console.log("É o número")
}else{
    console.log("Não é um número")
}


/*4 questáo*/

let c = "Valor"
if (typeof(c)==="string"){
console.log("Sou uma String")
}else{console.log("Não sou uma String")}


/*5 questáo*/

let d = true
if (typeof(d)==="boolean"){
console.log("Sou um Boleano")
}else{console.log("não sou um boleano")}


/*Questão 6*/ 

console.log(a-b)

/*Questão 7*/

console.log(a*b)

/*Questão 8* */
console.log(a/b)

/*Questão 9*/

if(a%2==0){
    console.log("PAR")
}else{
    console.log("Impar")}

    /*Questão 10*/
    
if(a%2 !=0){
    console.log("impar")
}else{
    console.log("Par")}

    
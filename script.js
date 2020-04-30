// //tipos de dados

// //String

// var a = "Palavra";

// //Number

// var b = 1;

// // Undefined

// var c;

// //Null

// var d = null;

// //Boolean

// var e = true; // false

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// //Operadores Aritimeticos
// // + Adição
// var f = 10;
// var g = 15;

// var h = f + g;
// console.log(h);
// // - Subtração
// var i = g - f;
// console.log(i);

// // * Multiplicação
// var j = f * g;
// console.log(j);

// // / Divisão
// var k = f / g;
// console.log(k);

// // % modulo (resto da divisão)
// var l = f % 3;
// console.log(l);// resultado sera 1 

// // ++ Incremento
// f++;
// console.log(f);

// // -- Decremento
// g--;
// console.log(g);

// //Atribuições
// // =  x = y  x = y
// var x = 30;
// console.log(x);

// // +=  x += y  x = x + y
// x += 5;
// console.log(x);
// // -=  x -= y  x = x - y
// x -= 5;
// console.log(x);
// // *=  x *= y  x = x * y
// x *= 2;
// console.log(x);
// // /=  x /= y  x = x / y
// x /= 2;
// console.log(x);
// // %=  x %= y  x = x % y

// x %= 28;
// console.log(x);

// //Operadores Comparativos
// // == igual a
// x = 3;
// y = 2;
// console.log(x == y);
// // === valor igual e igual
// y = "3";
// console.log(x === y);
// // != não é igual
// y = 2;
// console.log(x != y);
// // !== não igual ou não igual
// y = "3";
// console.log(x !== y);
// // > maior que
// y = 2;
// console.log(x > y);
// // < menor que
// console.log(x < y);
// // > = maior que ou igual a
// console.log(x >= y);
// // <= menor que ou igual a
// console.log(x <= y);

// //Operadores Logicos
// // && e
// // || ou
// // Negativo

// var a = true;
// var b = false;

// var c = a && b;

// var d = a || b;


// console.log(c);
// console.log(d);

// //Strings

// var str = "Valor qualquer";

// console.log(str + " teste"); // concatenando textos

// // Estruturas condicionais
// // IF

// var idade = 18;

// if (idade >= 18){
//     console.log("+18");
// } else {
//     console.log("-18");
// }

// // SWTICH

// var nota1 = 9.0;
// var nota2 = 9.0;

// var media = (nota1 + nota2) / 2;

// var conceito = "";

// if (media >= 8 ){
//     conceito = "Otimo";
 
// } else if(media >= 6.5){
//     conceito = "Bom";

// } else {
//     conceito = "Regular";

// }
// console.log(media);
// console.log(conceito);

// switch (conceito){

//     case "Otimo":
//         console.log("Parabens");
//         break;
//     case "Bom":
//         console.log("Esta chegando la");
//         break;
//     case "Regular":
//         console.log("Estude um poco mais");
//         break;
//     default:
//         console.log("Erro");
//         break;

// }

// //Repetição (Loop)
// //for
// var numero = 5;

// for (var vez = 0; vez < numero; vez++){
//     console.log("Executando o for: " + (vez+1) + " vez");
    
// }
// console.log("Acabou o for");

// //While

// while (numero < 10){
//     console.log("Numero " + numero);
//     numero++;
// }
// console.log("Acabou o while");

// var numero = Math.random() * 100;
// var contador = 0;

// while (numero < 90){
//     console.log("Numero " + numero);
//     numero = Math.random() * 100;
//     contador++;
// }
// console.log("Numeros randomicos: " + contador);
// console.log("Numero que acabou com While " + numero);
// console.log("Acabou o while");

// //Arrays

// var vetor = new Array();
// console.log(vetor);

// var alunos = new Array("Aluno1", "Aluno2", "Aluno3", "Aluno4");
// //var alunos = ["Aluno1", "Aluno2", "Aluno3", "Aluno4"];
// console.log(alunos);
// console.log("Numero de alunos: " + alunos.length);
// console.log(alunos[1]);

// var pessoas = ["Pessoa1", "Pessoa2", "Pessoa3", "Pessoa4", "Pessoa5", "Pessoa6"];

// //for (var i = 0; i < pessoas.length; i++)  {
// for (var i in pessoas)  {
//     console.log(pessoas[i]);
// }

// //Funções

// function mediaNotas(n1, n2) {

//     var nota1 = n1;
//     var nota2 = n2;
//     var media = (nota1 + nota2) / 2;
//     //console.log(media);

//     return media;
// }


// var resultado1 = mediaNotas(6, 7);
// var resultado2 = mediaNotas(10, 9);

// console.log("Medias: " + resultado1 + " e " + resultado2);

// function saudacao(){
//     return "Ola Mundo!";
// }

// var s = saudacao();
// console.log(s);

// //função anonima
// var notasMedia = function (n1, n2) {return (n1 + n2)/2}
// //arrow function var notasMedia = (n1, n2) => {return (n1 + n2)/2}

// console.log(notasMedia(5, 7));

// //juntando tudo
// //Nome do aluno - nota1 - nota2 - media - aprovado

// var nomes = ["Igor", "Jose", "Maria"];
// var notasA = [7.0, 6.0, 9.5];
// var notasB = [8.0, 7.0, 8.5];

// function mediaAlunos(n1, n2) {
//     return (n1 + n2)/2;
// }

// function passou(mediaAlunos) {
//     var resultado = "Reprovado";

//     if(mediaAlunos > 7){
//         resultado = "Aprovado";
//     }

//     return resultado;
// }

// for (var index in nomes){

//     var notas1 = notasA[index];
//     var notas2 = notasB[index];
//     var m = mediaAlunos(notas1, notas2);

//     console.log(nomes[index] + " - " + notas1 + " - " + notas2 + " - " + m + " - " + passou(m));
// }

// //Objetos
// //Propriedades
// //Metodos

// var pessoaAluno = { 
//     nome: "Igor", 
//     notas: [7.5, 8.0],

//     media: calcMedia
    
// }

// function calcMedia() {
//     return (this.notas[0] + this.notas[1])/2;
// }


// //pessoaAluno.matricula = 12345;

// console.log(pessoaAluno);
// console.log(pessoaAluno.media());


// //Construtores

// // function criarAluno(nome, n1, n2) {
// //     return{
// //         nome: nome,
// //         nota1: n1,
// //         nota2: n2,
// //         media: function () {
// //             return (this.nota1 + this.nota2) / 2;
// //         }
// //     }
// // }    

// function aluno(nome, n1, n2){
    
//     this.nome = nome;
//     this.nota1 = n1;
//     this.nota2 = n2;

//     this.media = function () {
//                     return (this.nota1 + this.nota2) / 2;
//                 }
// }

// // var turma = [
// //     criarAluno("Igor", 7, 8),
// //     criarAluno("Bruno", 8, 9)
    
// // ]

// // var aluno = turma[1];

// var a = new aluno("Igor", 7, 9);
// console.log(a);

// // console.log(aluno);
// // console.log(aluno.media());

// // turma.forEach( function (elemento) {
// //     console.log(elemento);
// // }
// // )

// // for ( var aluno of turma) {
// //     console.log(aluno);
// // }

//Datas

// var data = new Date();

// console.log(data);

//Const, Let, Var

var numero1 = 4; //variavel global
let numero2 = 5; //variavel local, usar dentro do bloco{}
const numero3 = 6; //nao pode ser reatribuido

numero1 = 7;
numero2 = 8;
//numero3 = 9; //constantes nao podem ser alteradas

console.log(numero1);
console.log(numero2);
console.log(numero3);
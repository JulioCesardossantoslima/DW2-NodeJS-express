//Atividade 1

//1
document.writeln("<h1>1</h1>");
function exibirDados() {
  const nome = "Julio Cesar";
  const idade = 20;
  const cidade = "Registro";

  document.writeln(`<p>Nome: ${nome}</p>`);
  document.writeln(`<p>Idade: ${idade} anos</p>`);
  document.writeln(`<p>Cidade: ${cidade}</p>`);
}

exibirDados();


//2
document.writeln("<h1>2</h1>");

const num1 = 50;
const num2 = 10;

function calculoDivisao(num1, num2) {
  const resultadoDivisao = num1 / num2;
  document.writeln(
    `<p>O resultado da divisao de ${num1} e ${num2} é: ${resultadoDivisao}</p>`,
  );
}

calculoDivisao(num1, num2);


//3
document.writeln("<h1>3</h1>");

const mult1 = 5;
const mult2 = 2;
const mult3 = 4;

function multiplicacao(mult1, mult2, mult3) {
  const resultadomulti = mult1 * mult2 * mult3;
  document.writeln(
    `<p>O resultado da multiplicação de ${mult1} e ${mult2} e ${mult3} é: ${resultadomulti}</p>`,
  );
}
multiplicacao(mult1, mult2, mult3);


//4
document.writeln("<h1>4</h1>");

const idade = 17;

function testeIdade(idade){
    if(idade >= 18){
        document.writeln("<p>Maior de idade</p>");
    }else{
        document.writeln("<p>Menor de idade</p>")
    }
}
testeIdade(idade)


//5
document.writeln("<h1>5</h1>");

const nota1 = 7;
const nota2 = 9;

function mediaNota(nota1, nota2){
    const media = (nota1 + nota2) / 2;
    if(media >=5){
        document.writeln("<p>Aprovado</p>");
    }else if(media < 5){
        document.writeln("<p>Reprovado</p>");
    }
}
mediaNota(nota1, nota2)


// 6
document.writeln("<h1>6</h1>");

const numer = 3;

const triplo = (numer) => {
  const resultado = numer * 3;
  document.writeln(`O triplo do número ${numer} é: ${resultado}`);
  console.log(`O triplo do número ${numer} é: ${resultado}`);
};

triplo(numer);


// 7
document.writeln("<h1>7</h1>");

nume1 = 4;
nume2 = 1;
nume3 = 75;
nume4 = 2;

const somarQuatroNumeros = (nume1, nume2, nume3, nume4) => {
    const soma = nume1 + nume2 + nume3 + nume4;
    document.writeln(`<p>O resultado da soma é: ${soma}</p>`);
    console.log(`<p>O resultado da soma é: ${soma}</p>`);
};

somarQuatroNumeros(nume1, nume2, nume3,nume4)

//8
document.writeln("<h1>8</h1>");

const nome = "Maria";
(function (nome) {
  document.writeln(`Olá, ${nome}! Seja bem-vindo(a)!`);
  console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
})("Maria");
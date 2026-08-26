document.writeln("<h3>Manipulando datas:</h3>");

//Para começarmos a manipular datas no JavaScript. precisamos primeiro criar uma instância da classe Date, que é nativa do JavaScript

const dataAtual = new Date();

document.writeln(dataAtual);

//Pegando o dia atual
const dia = dataAtual.getDate();

document.writeln(`<p> Hoje é dia ${dia}.</p>`); // Template Strings // ${} = Place holder

const mes = dataAtual.getMonth();
document.writeln(`<p>Estamos no mês ${mes + 1}.</p>`);

const ano = dataAtual.getFullYear();
document.writeln(`<p>Estamos no ano ${ano}.</p>`);

//Exibindo a data completa
document.writeln(`<p>Data de hoje ${dia}/${mes + 1}/${ano}</p>`);

// Adicionando dias, mêses e anos à data atual
// Adicionando 4 dias à data atual;
dataAtual.setDate(dataAtual.getDate() + 4);

//Exibindo a nova data
document.writeln(`<p>Daqui a 4 dias será dia ${dataAtual.getDate()}</p>`);

//Adicionando 3 mêses à data atual:
dataAtual.setMonth(dataAtual.getMonth() + 3);
document.writeln(`<p>Daqui a 3 mêses será ${dataAtual.getMonth() + 1}</p>`);

//Adicionando 2 anos à data atual:
dataAtual.setFullYear(dataAtual.getFullYear() + 2);
document.writeln(`<p>Daqui a 2 anos será ${dataAtual.getFullYear()}</p>`);

//####################################################################################################################

// Formatação de moedas
document.writeln("<h3>Manipulando moedas:</h3>");
const futuroSalario = 40000.3;
document.writeln(`<p> ${futuroSalario}</p>`);
// Mostrando casas decimais
document.writeln(`<p> ${futuroSalario.toFixed(2)}</p>`);
// Ocultando casas decimais
document.writeln(`<p> ${futuroSalario.toFixed(0)}</p>`);
// Trocando o ponto pela virgula
document.writeln(`<p> ${futuroSalario.toFixed(2).replace(".", ",")}</p>`);

//Formatando para Dolar (USD)
document.writeln(`<p>
    ${futuroSalario.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    })}
    </p>`);
//converter real para dolar = dinheiro * 0,19

//###################################################################################################################
//Formatações de String
document.writeln("<h3> Formatação de Strings: <h3>");

const nome = "Julio Cesar";

//Alterando STRINGS para letras maiúsculas
document.writeln(`<p>${nome.toUpperCase()}</p>`);
//Alterando STRINGS para letras minúsculas
document.writeln(`<p>${nome.toLowerCase()}</p>`);

//Colocando as iniciais em letras maiúsculas
const cidade = "sete barras";
const cidadeFormada = cidade
  .split(" ")
  .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
  .join(" ");

//Exibindo
document.writeln(`<p>${cidadeFormada}</p>`);

//Contando o número de caracteres
document.writeln(`Seu nome tem ${nome.replace(/\s/g, "").length} letras</p>`);
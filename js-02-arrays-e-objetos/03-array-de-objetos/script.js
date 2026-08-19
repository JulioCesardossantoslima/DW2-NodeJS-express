//Objeto Unico
const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho",
};

document.writeln(`<p> ${produto} </p>`);

//Acessando os atributos do objeto

document.writeln(
  `<p> ${produto.nome},${produto.marca}, custa R$: ${produto.preco} <br> ${produto.descricao} </p>`,
);

//Arrau de pbketps
document.writeln("<h3>Array de objetos:<h3>");
const listaProduto = [{
nome: "Computador",
marca: "Lenovo",
preco: 3000,
descricao:"PC moderno com bom desempenho"
},{
nome: "Tablet",
marca: "Samsung",
preco: 2000,
descricao: "Otima velocidade de processamento"
},{
nome: "Iphone",
marca: "Apple",
preco: 13000,
descricao: "Ultra resistente! Não quebra nunca!"
}];

//Exibindo as informações dos produtos com forEach
document.writeln(`<h4>Produtos em promoção: <h4>`);

listaProduto.forEach(produto => {
    document.writeln(`
        Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: R$ ${produto.preco} <br>
        Descrição: ${produto.descricao} <br><br>
        `)
})


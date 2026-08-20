// Classes
class Carro{
    //Nome de classes devem iniciar com a primeira letra maiúscula
    //Atributos
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    //Métodos
    buzinar(){
        return "Beep! Beep!";
    }
    acelerar(){
        return "Vruum! Vruum!";
    }   
}
// Criando uma instância ( objeto ) da classe Carro
const carroPopular = new Carro("Fiat","Uno","2012");
// Acessando os ATRIBUTOS e MÉTODOS do objeto
document.writeln(`<p>O carro popular ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando ele buzina faz ${carroPopular.buzinar()}</p>`);

const carroEsportivo = new Carro("Ferrari","Spider","2026");

document.writeln(`<p>O carro esportivo ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e quando ele acelera faz ${carroEsportivo.acelerar()}`);

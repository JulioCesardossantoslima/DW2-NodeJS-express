class Heroi{
    constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
    }

    correr(){
        return "esta Correndo!";
    }
    andar(){
        return "esta Andando!";
    }
    atacar(){
        return "esta Atacando!";
    }
    defender(){
        return "esta Defendendo!";
    }

}

const superman = new Heroi("Superman", 150, 50, 75);
superman.podeVoar = 1; //Pode voar
superman.visaoCalor = function(){
    document.writeln(`<p>${this.nome}: Estou usando minha visão de calor! </p>`);
}

const batman = new Heroi("Batman", 90, 20, 40);
batman.esconder = 1; //Pode se esconder
batman.investigar = function() {
    document.writeln(`<p>${this.nome}: Estou investigando a area! </p>`);
}

const spiderman = new Heroi("Spider-man", 120, 39, 68);
spiderman.teia = 1; //Pode soltar teia
spiderman.sentidoAranha = function(){
    document.writeln(`<p>${this.nome}: Meu sentido aranha esta apitando! </p>`);
}

document.write(`<h2>${spiderman.nome}</h2>`);
document.write(`<p>Vida: ${spiderman.vida} | Velocidade: ${spiderman.velocidade} | Força: ${spiderman.forca}</p>`);
document.write(`<p>Pode soltar teia: ${spiderman.teia === 1 ? "Sim" : "Não"}</p>`);
spiderman.sentidoAranha();

document.write(`<h2>${superman.nome}</h2>`);
document.write(`<p>Vida: ${superman.vida} | Velocidade: ${superman.velocidade} | Força: ${superman.forca}</p>`);
document.write(`<p>Pode voar: ${superman.podeVoar === 1 ? "Sim" : "Não"}</p>`);
superman.visaoCalor();

document.write(`<h2>${batman.nome}</h2>`);
document.write(`<p>Vida: ${batman.vida} | Velocidade: ${batman.velocidade} | Força: ${batman.forca}</p>`);
document.write(`<p>Está se escondendo: ${batman.esconder === 1 ? "Sim" : "Não"}</p>`);
batman.investigar();


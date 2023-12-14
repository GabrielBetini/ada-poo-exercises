// 🏰 Exercício 2: Resgate de Princesa
// Enunciado: Crie uma classe Heroi em JavaScript para representar um herói em busca de resgatar uma princesa de um castelo encantado. A classe deve conter propriedades como nome do herói, nome da princesa, e métodos para avançar na jornada e resgatar a princesa.

// Detalhes da Implementação: Classe: Heroi Propriedades:

// nomeHeroi (string): Nome do herói.

// nomePrincesa (string): Nome da princesa.

// jornadaCompleta (boolean): Estado da jornada (inicialmente false). Métodos:

// avancarJornada(): Avança na jornada para chegar ao castelo.

// resgatarPrincesa(): Resgata a princesa do castelo encantado (jornadaCompleta = true).

class Heroi {
	constructor(nome, princesa) {
		(this.nome = nome), (this.princesa = princesa);
	}
	lvl = 1;
	jornadaCompleta = false;
	jornadaAvancada = false;

	avancarJornada() {
		if (this.lvl >= 15) {
			this.jornadaAvancada = true;
			console.log(`O herói ${this.nome} finalmente chega ao castelo final.`);
		} else {
			console.log(`Você precisa estar no lvl 15 para continuar. Nível atual: ${this.lvl}`);
		}
	}

	resgatarPrincesa() {
		if (this.jornadaAvancada) {
		}
	}

	lvlUp(lvlAmount) {
		if (lvlAmount > 0) {
			this.lvl += lvlAmount;
			console.log(`Você subiu de nível! Nível atual: ${this.lvl}`);
		} else {
			console.log('Erro.');
		}
	}
}

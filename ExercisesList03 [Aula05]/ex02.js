// 🐉 Exercício 2: Mundo dos Dragões
// Desenvolva uma classe Dragao com atributos como nome, cor, elemento (fogo, gelo, etc.) e nível de saúde. Inclua métodos como voar(), cuspirFogo() e comer().

class Dragao {
	constructor(nome, cor, elemento) {
		(this.nome = nome), (this.cor = cor), (this.elemento = elemento);
	}

	saude = 100;
	limiteSaude = 100;
	cargaHabilidade = 3;
	limiteHabilidade = 5;

	voar() {
		console.log(`${this.nome} está voando sob a vila!😱`);
	}

	usarHabilidade() {
		if (this.cargaHabilidade > 0) {
			--this.cargaHabilidade;
			console.log(`${this.nome} está espalhando caos e histeria com seu poder mortal! 💀`);
		} else {
			console.log(
				`${this.nome} está muito cansado para usar sua habilidade... Tente comer algo.😵`
			);
		}
	}

	recuperarVida(valor) {
		if (valor > 0) {
			this.saude += valor;

			if (this.saude > this.limiteSaude) {
				this.saude = this.limiteSaude;
			}
		}
	}

	comer() {
		this.recuperarVida(30);

		if (this.cargaHabilidade < this.limiteHabilidade) {
			++this.cargaHabilidade;
			console.log(`${this.nome} se alimentou. (+1 Carga de Habilidade | +30 de Saúde)`);
		} else {
			console.log(`${this.nome} não quer se alimentar no momento.`);
		}
	}

	status() {
		console.log(
			`${this.nome} | Vida: ${this.saude} | Elemento: ${this.elemento} Cor: ${this.cor} | Carga Habilidade: ${this.cargaHabilidade}`
		);
	}
}
const line = () => {
	console.log('-----------------------------------');
};

const dragao = new Dragao('Alduin', 'Preto', 'Fogo');
const dragao2 = new Dragao('Elden Skai', 'azul', 'Gelo');

dragao.voar();
dragao2.voar();

line();

dragao.usarHabilidade();
dragao2.usarHabilidade();
dragao.usarHabilidade();
dragao.usarHabilidade();
dragao.usarHabilidade();
dragao.usarHabilidade();

line();

dragao.comer();

dragao.status();
dragao2.status();

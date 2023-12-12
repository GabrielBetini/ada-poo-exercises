//🚀 Exercício 1: Explorador Espacial
// Crie uma classe NaveEspacial com atributos como nome, velocidade máxima e capacidade de tripulação. Implemente métodos como acelerar() e adicionarTripulante().

class NaveEspacial {
	constructor(nome, velocidadeMaxima, capacidadeTripulacao) {
		(this.nome = nome),
			(this.velocidadeMaxima = velocidadeMaxima),
			(this.capacidadeTripulacao = capacidadeTripulacao);
	}

	velocidade = 0;
	tripulacao = 1;

	acelerar(aceleracao) {
		if (aceleracao > 0 && this.velocidade + aceleracao <= this.velocidadeMaxima) {
			this.velocidade += aceleracao;

			return `Acelerando! Nível de aceleração atual: ${this.velocidade}`;
		} else {
			return `Valor inserido inválido!`;
		}
	}

	desacelerar(valor) {
		if (valor > 0) {
			this.velocidade -= valor;

			if (this.velocidade < 0) {
				this.velocidade = 0;
			}

			return `Desacelerando... Velocidade atual: ${this.velocidade}`;
		} else {
			return `Valor inserido inválido! Velocidade atual: ${this.velocidade}`;
		}
	}

	adicionarTripulante(quantidade) {
		if (this.tripulacao + quantidade <= this.capacidadeTripulacao) {
			this.tripulacao += quantidade;

			return 'Tripulante(s) adicionado(s) com sucesso!';
		} else {
			return `Quantidade de tripulantes inválida. Limite: ${this.capacidadeTripulacao} | Atual: ${this.tripulacao}`;
		}
	}

	mostrar() {
		if (this.velocidade > 0) {
			return `A ${this.nome} está com ${this.tripulacao} tripulante(s), viajando no nível de velocidade ${this.velocidade} !`;
		} else {
			return `A ${this.nome} está parada. ${this.tripulacao} tripulante(s)`;
		}
	}
}

const nave = new NaveEspacial('InterG 203', 100, 4);

console.log(nave.mostrar());
console.log(nave.acelerar(30));
console.log(nave.mostrar());
console.log(nave.adicionarTripulante(3));
console.log(nave.mostrar());
console.log(nave.adicionarTripulante(2));

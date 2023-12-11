//Crie uma classe chamada "Carro" com os atributos marca, modelo e ano. Em seguida, crie um construtor para a classe que inicializa esses atributos. Crie objetos de carros diferentes e imprima suas informações. 🚗

class Pessoa {
	constructor(marca, modelo, ano) {
		(this.marca = marca), (this.modelo = modelo), (this.ano = ano);
	}

	mostrar() {
		console.log(this);
	}
}

const carro1 = new ContaBancaria('Hyundai', 'Sei la', 2020);
const carro2 = new ContaBancaria('Sedan', 'Compact', 2018);
const carro3 = new ContaBancaria('Mitsubishi', 'Ninja', 2015);

pessoa1.mostrar();
pessoa2.mostrar();
pessoa3.mostrar();

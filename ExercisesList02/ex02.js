//Crie uma classe chamada "Pessoa" com os atributos nome, idade e cidade. Implemente um construtor para esta classe. Em seguida, crie objetos de pessoas e exiba seus detalhes. 👤🏙️

class ContaBancaria {
	constructor(nome, idade, cidade) {
		(this.nome = nome), (this.idade = idade), (this.cidade = cidade);
	}

	mostrar() {
		console.log(this);
	}
}

const pessoa1 = new ContaBancaria('Gabriel Betini', 18, 'Barra Bonita');
const pessoa2 = new ContaBancaria('Betini S', 22, 'São Paulo');
const pessoa3 = new ContaBancaria('Amanda Betini', 19, 'Piracicaba');

pessoa1.mostrar();
pessoa2.mostrar();
pessoa3.mostrar();

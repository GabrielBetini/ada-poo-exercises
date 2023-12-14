// 🐶 Exercício 1: Clínica Veterinária
// Enunciado: Crie uma classe Animal em JavaScript para representar os pacientes de uma clínica veterinária. A classe deve conter propriedades como nome, espécie, idade e métodos para agendar consultas e exibir informações do animal.

// Detalhes da Implementação: Classe: Animal Propriedades:

// nome (string): Nome do animal.

// espécie (string): Espécie do animal (ex: cachorro, gato).

// idade (number): Idade do animal.

// consultaAgendada (boolean): Estado da consulta agendada (inicialmente false). Métodos:

// agendarConsulta(): Agenda uma consulta para o animal (consultaAgendada = true).

// exibirInformacoes(): Exibe as informações do animal, incluindo o estado da consulta agendada.

class Animal {
	constructor(nome, especie, idade) {
		(this.nome = nome), (this.especie = especie), (this.idade = idade);
	}

	consultaAgendada = false;

	agendarConsulta() {
		if (this.consultaAgendada) {
			console.log('Este amigão já possui consulta agendada.');
		} else {
			this.consultaAgendada = true;
			console.log(`Consulta de ${this.nome} agendada!`);
		}
	}

	exibirInformacoes() {
		console.log(
			`Nome: ${this.nome} | ${this.especie} | Idade: ${this.idade} | Possui consulta agendada: ${this.consultaAgendada}`
		);
	}
}

const animal = new Animal('Berg', 'Gato', '3 meses');
const animal2 = new Animal('Sigward', 'Cachorro', '2 anos');

animal.exibirInformacoes();
animal2.exibirInformacoes();

animal.agendarConsulta();
animal2.agendarConsulta();
animal2.agendarConsulta();

animal.exibirInformacoes();
animal2.exibirInformacoes();

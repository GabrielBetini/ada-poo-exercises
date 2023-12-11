//Desenvolva uma classe chamada "Aluno" com os atributos nome, matrícula e lista de notas. Implemente um construtor para inicializar os atributos e um método para calcular a média das notas do aluno. Crie objetos de alunos e calcule suas médias. 🎓📊

class Aluno {
	constructor(nome, matricula, notas) {
		(this.nome = nome), (this.matricula = matricula), (this.notas = notas);
	}

	calcMedia() {
		let soma = 0;
		this.notas.forEach(element => {
			soma += element;
		});
		return soma / this.notas.length;
	}

	mostrar() {
		console.log('---------- Aluno ----------');
		console.log(
			`Nome: ${this.nome} | Matrícula: ${this.matricula} 
             \nNotas: ${this.notas} \nMédia: ${this.calcMedia()}`
		);
	}
}

const aluno1 = new Aluno('Gabriel Betini', 1133, [9, 10, 9, 9]);
const aluno2 = new Aluno('Betini Betineira', 1097, [10, 4, 3, 7]);
const aluno3 = new Aluno('Amanda Suaveira', 1177, [8, 7, 3, 3]);

aluno1.mostrar();
aluno2.mostrar();
aluno3.mostrar();

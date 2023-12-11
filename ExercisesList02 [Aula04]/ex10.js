//Desenvolva uma classe chamada "Funcionário" com os atributos nome, cargo e salário. Adicione um construtor para inicializar esses atributos. Implemente um método para aumentar o salário de um funcionário em uma determinada porcentagem. Crie objetos de funcionários e teste o método de aumento de salário. 👨‍💼💼📈

class Funcionario {
	constructor(nome, cargo, salario) {
		(this.nome = nome), (this.cargo = cargo), (this.salario = salario);
	}

	aumentoSalario(porcentagem) {
		this.salario += this.salario * porcentagem;
	}

	mostrar() {
		console.log(`Nome: ${this.nome} | Cargo: R$${this.cargo} | Salario: ${this.salario} `);
	}
}

const line = () => {
	console.log('---------- FUNCIONARIOS ----------');
};

const f1 = new Funcionario('Betini', 'Programador', 2500);
const f2 = new Funcionario('Amanda', 'Designer', 3000);
const f3 = new Funcionario('Cleyer', 'CEO', 25000);

line();

f1.mostrar();
f2.mostrar();
f3.mostrar();

f1.aumentoSalario(0.1);
f2.aumentoSalario(0.15);
f3.aumentoSalario(0.03);

line();

f1.mostrar();
f2.mostrar();
f3.mostrar();

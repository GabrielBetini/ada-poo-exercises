//Crie uma classe chamada "ContaBancaria" com os atributos número da conta, saldo e nome do titular. Adicione um construtor para inicializar esses atributos. Crie métodos para depositar e sacar dinheiro da conta. Teste esses métodos em objetos de conta bancária. 💰🏦

class ContaBancaria {
	constructor(nome, saldo) {
		(this.nome = nome), (this.saldo = saldo);
	}

	mostrar() {
		console.log(this);
	}

	depositar(valor) {
		if (valor > 0) {
			this.saldo += valor;
			console.log('Depósito realizado com sucesso!');
		} else {
			console.log('Valor inválido');
		}
	}

	sacar(valor) {
		if (valor <= this.saldo) {
			this.saldo -= valor;
			console.log('Saque realizado com sucesso!');

			return valor;
		} else {
			console.log('Valor inválido');
		}
	}
}

const contaGabriel = new ContaBancaria('Gabriel Betini', 200);
const contaBetini = new ContaBancaria('Betini S', 1500);
const contaAmanda = new ContaBancaria('Amanda Betini', 2200);

contaGabriel.mostrar();
contaBetini.mostrar();
contaAmanda.mostrar();

console.log('------------------------');
contaBetini.sacar(1000);
contaBetini.mostrar();

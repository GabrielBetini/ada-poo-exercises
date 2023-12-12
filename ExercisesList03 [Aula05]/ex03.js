//🎮 Exercício 3: Console de Jogos Retro
// Projete uma classe ConsoleRetro com atributos como nome, ano de lançamento e jogos disponíveis. Adicione métodos para adicionarJogo() e jogar().

class ConsoleRetro {
	constructor(nome, anoLancamento, jogosDisponiveis) {
		(this.nome = nome),
			(this.anoLancamento = anoLancamento),
			(this.jogosDisponiveis = jogosDisponiveis);
	}

	adicionarJogo = jogo => {
		this.jogosDisponiveis.push(jogo);
	};

	jogar = jogo => {
		console.log(`Jogando: ${jogo}`);
	};

	mostrar() {
		console.log(`Console: ${this.nome} | Jogos Disponíveis: ${this.jogosDisponiveis}`);
	}
}

const consoleRetro = new ConsoleRetro('Nintendo 64', 1996, [
	'Super Mario 64',
	'Ocarina of Time',
	'Golden Eye 007',
]);

consoleRetro.mostrar();

consoleRetro.adicionarJogo('Donkey Kong 64');

consoleRetro.mostrar();

consoleRetro.jogar(consoleRetro.jogosDisponiveis[3]);

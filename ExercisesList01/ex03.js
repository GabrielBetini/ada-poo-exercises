//Crie um objeto chamado "aluno" com os atributos nome, idade e um método chamado "mostrarInformacoes" que imprime os dados do aluno.

const aluno = {
	nome: '',
	idade: '',

	mostrarInformacoes: () => {
		console.log(`Nome: ${aluno.nome} | Idade: ${aluno.idade}`);
	},
};

aluno.nome = 'Gabriel';
aluno.idade = 22;

aluno.mostrarInformacoes();

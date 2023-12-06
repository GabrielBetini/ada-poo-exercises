//Crie um objeto chamado "livro" com os atributos título, autor e um método chamado "detalhes" que imprime os detalhes do livro.

const livro = {
	titulo: '',
	autor: '',

	exibirDetalhes: () => {
		console.log('---------- DETALHES DO LIVRO ----------');
		console.log(`Título: ${livro.titulo} | Autor: ${livro.autor}`);
	},
};

livro.titulo = 'Ordem Paranormal RPG';
livro.autor = 'Rafael Lange';

livro.exibirDetalhes();

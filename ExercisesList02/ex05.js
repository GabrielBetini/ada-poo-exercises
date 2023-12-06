//Crie uma classe chamada "Livro" com os atributos título, autor e ano de publicação. Implemente um construtor para esta classe. Crie objetos de livros e exiba suas informações. 📖✍️📅

class Livro {
	constructor(titulo, autor, ano) {
		(this.titulo = titulo), (this.autor = autor), (this.ano = ano);
	}

	mostrar() {
		console.log('---------- Livro ----------');
		console.log(`Título: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano}`);
	}
}

const livro1 = new Livro('As Aventuras de Tom Seia', 'Mark Twein', 1990);
const livro2 = new Livro('Ordem Paranormal RPG', 'Rafael Lange', 2022);
const livro3 = new Livro('Codigo Limpo', 'Robert C. Martin', 2019);

livro1.mostrar();
livro2.mostrar();
livro3.mostrar();

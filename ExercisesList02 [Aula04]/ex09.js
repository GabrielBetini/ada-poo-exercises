//Crie uma classe chamada "Produto" com os atributos nome, preço e quantidade em estoque. Implemente um construtor para inicializar esses atributos e métodos para calcular o valor total em estoque e para adicionar ou remover unidades do estoque. Crie objetos de produtos e teste os métodos. 🛒💰

class Produto {
	constructor(nome, preco, estoque) {
		(this.nome = nome), (this.preco = preco), (this.estoque = estoque);
	}

	valorEmEstoque() {
		return this.preco * this.estoque;
	}

	remove = unidade => (this.estoque -= unidade);

	add = unidade => (this.estoque += unidade);

	mostrar() {
		console.log(`Nome: ${this.nome} | Preço: R$${this.preco} | Em estoque: ${this.estoque} `);
	}
}
const line = () => {
	console.log('---------- PRODUTOS ----------');
};

line();

const p1 = new Produto('Placa de vídeo', 4200, 8);
const p2 = new Produto('Action Figure "Goku v.1.2"', 2500, 23);
const p3 = new Produto('Hashi de madeira (Pacote 30 un.)', 67, 30);

p1.mostrar();
p2.mostrar();
p3.mostrar();

line();

p1.remove(2);
p2.remove(4);
p3.remove(20);

p1.mostrar();
p2.mostrar();
p3.mostrar();

line();

p1.add(5);
p2.add(20);
p3.add(97);

p1.mostrar();
p2.mostrar();
p3.mostrar();

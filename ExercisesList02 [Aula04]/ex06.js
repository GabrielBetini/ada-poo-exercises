//Crie uma classe chamada "Retângulo" com os atributos largura e altura. Adicione um construtor para inicializar esses atributos. Implemente um método para calcular a área do retângulo. Crie objetos de retângulos com diferentes dimensões e exiba suas áreas. 🟩📏

class Retangulo {
	constructor(largura, altura) {
		(this.largura = largura), (this.altura = altura);
	}

	calcArea() {
		return this.largura * this.altura;
	}

	mostrar() {
		console.log(`Área do retangulo: ${this.calcArea()}`);
	}
}

const t1 = new Retangulo(300, 50);
const t2 = new Retangulo(100, 400);
const t3 = new Retangulo(500, 320);

t1.mostrar();
t2.mostrar();
t3.mostrar();

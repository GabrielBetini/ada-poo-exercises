//Defina uma classe chamada "Círculo" que tenha um atributo raio e métodos para calcular a área e o perímetro do círculo. Crie objetos de círculos com diferentes raios e exiba suas áreas e perímetros. ⭕📏📐

class Circulo {
	constructor(raio) {
		this.raio = raio;
	}

	calcArea() {
		return Math.PI * Math.pow(this.raio, 2);
	}

	calcPerimetro() {
		return 2 * Math.PI * this.raio;
	}
}

const circulo1 = new Circulo(30);
const circulo2 = new Circulo(5);
const circulo3 = new Circulo(100);

console.log('------------------------');
console.log(circulo1.raio);
console.log(circulo1.calcArea());
console.log(circulo1.calcPerimetro());
console.log('------------------------');
console.log(circulo2.raio);
console.log(circulo2.calcArea());
console.log(circulo2.calcPerimetro());
console.log('------------------------');
console.log(circulo3.raio);
console.log(circulo3.calcArea());
console.log(circulo3.calcPerimetro());
console.log('------------------------');

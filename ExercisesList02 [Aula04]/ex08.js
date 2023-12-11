//Crie uma classe chamada "Triângulo" com os atributos lado1, lado2 e lado3. Adicione um construtor para inicializar esses atributos. Implemente um método para verificar se os lados formam um triângulo válido (a soma de dois lados deve ser maior que o terceiro) e outro método para calcular a área do triângulo. Teste com diferentes conjuntos de lados. 📐🔍

class Triangulo {
	constructor(lado1, lado2, lado3) {
		(this.lado1 = lado1), (this.lado2 = lado2), (this.lado3 = lado3);
	}

	validarLados() {
		return this.lado1 > 0 && this.lado2 > 0 && this.lado3 > 0;
	}

	validarTriangulo() {
		if (this.validarLados()) {
			return (
				this.lado1 + this.lado2 > this.lado3 &&
				this.lado1 + this.lado3 > this.lado2 &&
				this.lado2 + this.lado3 > this.lado1
			);
		} else {
			return false;
		}
	}

	calcArea() {
		if (this.validarTriangulo()) {
			const somaLados = (this.lado1 + this.lado2 + this.lado3) / 2;
			const area = Math.sqrt(
				somaLados * (somaLados - this.lado1) * (somaLados - this.lado2) * (somaLados - this.lado3)
			);
			return area;
		} else {
			return 'Os lados do triangulo são validos. Não foi possível calcular área.';
		}
	}
}

const t1 = new Triangulo(300, 20, 300);
const t2 = new Triangulo(500, 200, 500);
const t3 = new Triangulo(150, 50, 25);

console.log(t1.calcArea());
console.log(t2.calcArea());
console.log(t3.calcArea());

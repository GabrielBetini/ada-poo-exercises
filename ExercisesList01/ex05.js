//Crie uma classe chamada "Retângulo" com os atributos "largura" e "altura" e um método chamado "calcularÁrea" que retorna a área do retângulo.

class Retangulo {
	constructor(largura, altura) {
		(this.largura = largura), (this.altura = altura);
	}

	calcularArea = () => {
		return (this.largura * this.altura) / 2;
	};
}

let ret = new Retangulo(300, 200);

console.log(ret);
console.log(ret.calcularArea());

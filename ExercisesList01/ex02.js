//Crie um objeto literal representando um círculo com os atributos raio e calcularÁrea (um método que calcula a área do círculo).

const circulo = {
	raio: undefined,

	calcularArea: () => {
		return Math.PI * Math.pow(circulo.raio, 2);
	},
};

circulo.raio = 12;

console.log(circulo.calcularArea());

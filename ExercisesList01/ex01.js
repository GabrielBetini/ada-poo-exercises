//Exercício 1
//Crie um objeto literal representando um carro com os seguintes atributos: marca, modelo, ano e cor.

const carro = {
	marca: '',
	modelo: '',
	ano: '',
	cor: '',

	apresentar: () => {
		console.log(carro);
	},
};

carro.apresentar();

carro.marca = 'Hyundai';
carro.modelo = 'carrao';
carro.ano = 2020;
carro.cor = 'azul';

carro.apresentar();

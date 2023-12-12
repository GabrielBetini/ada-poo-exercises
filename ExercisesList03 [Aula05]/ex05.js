// 🍔 Exercício 5: Simulador de Restaurante
// Elabore uma classe Restaurante com atributos como nome, tipo de culinária e menu. Inclua métodos como adicionarPratoNoMenu() e receberPedido().

class Restaurante {
	constructor(nome, culinaria, menu) {
		(this.nome = nome), (this.culinaria = culinaria), (this.menu = menu);
	}

	adicionarPrato(prato) {
		this.menu.push(prato);
	}

	receberPedido(pedido) {
		if (this.menu.includes(pedido)) {
			console.log(`Preparando ${pedido}. Em 20 minutos estará pronto`);
		} else {
			console.log(`Não possuímos ${pedido} no cardápio.`);
		}
	}

	mostrar() {
		console.log(this);
	}
}

const hamburgeriaBetini = new Restaurante('Hamburgueria Betini', 'Hamburgueria', [
	'x-tudo',
	'x-bacon',
	'x-salada',
	'batata',
	'coca-cola',
	'sprite',
]);

hamburgeriaBetini.adicionarPrato('milkshake oreo');
hamburgeriaBetini.mostrar();
hamburgeriaBetini.receberPedido('tijolo baiano ao ponto');
hamburgeriaBetini.receberPedido('x-tudo');

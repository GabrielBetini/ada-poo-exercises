// 🏞️ Exercício 4: Parque Ecológico Virtual
// Crie uma classe ParqueEcológico com atributos como nome, localização e tipos de fauna e flora. Implemente métodos para adicionarEspécie() e organizarTourVirtual().

class ParqueEcologico {
	constructor(nome, localizacao, fauna, flora) {
		(this.nome = nome),
			(this.localizacao = localizacao),
			(this.fauna = fauna),
			(this.flora = flora);
	}

	adicionarFauna(fauna) {
		this.fauna.push(fauna);
	}

	adicionarFlora(flora) {
		this.flora.push(flora);
	}

	organizarTourVirtual() {
		console.log(`Tour virtual começando... Veremos ${this.fauna}`);
	}

	mostrar() {
		console.log(`Parque: ${this.nome} | Fauna: ${this.fauna} | Flora: ${this.flora}`);
	}
}

const parque = new ParqueEcologico(
	'Parque Áreas',
	'São Paulo',
	['Sagui', 'Morcego', 'Quati', 'Onça'],
	['Buriti', 'Pequi', 'Jatobá', 'Ipê']
);

parque.mostrar();
parque.organizarTourVirtual();

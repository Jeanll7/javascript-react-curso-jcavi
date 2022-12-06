// ⦁ Crie um programa de cadastro de veículos de uma loja de seminovos (utilizando array como base de dados ex: baseDeAutomoveis: [ob1, obj2,]).  O programa deve implementar as funcionalidades descritas na figura abaixo:

// dica: Crie uma função criarAutomovel(<informacoes>) que retorne um objeto automóvel 

// O cadastro do automóvel deve solicitar modelo do veículo, marca, placa e ano de fabricação. O programa deve respeitar as seguintes restrições:
// ⦁ Não se pode cadastrar uma placa previamente cadastrada;
// ⦁ A pesquisa deve ser feita pela placa, marca ou modelo e deve listar todos os resultados que correspondem à pesquisa;
// ⦁ A exclusão deve ser feita pela placa do veículo;


let baseDeVeiculos = [];

function automovel(carro) {
    let veiculo = {
        marca: 'Qual marca:',
        modelo: 'Qual modelo:',
        placa: 'Placa veículo:',
        ano: 'Ano veículo:',
    }
}

function apresentarMenu() {

    let valor = prompt(`
          1 - Cadastrar automóvel;
          2 - Pesquisar automóvel;
          3 - Excluir automóvel;
          0 - Sair;
      `)

    if (valor == 1) {
        cadastrar()
        apresentarMenu()
    }
    if (valor == 2) {
        pesquisar()
        apresentarMenu()
    }
}

function pesquisar() {
    let placa = prompt('Digite a placa pesquisar')

    baseDeVeiculos.forEach(veiculo => {
        if (placa == veiculo) {

        }
    });
}

function cadastrar() {
    let marca = prompt('marca')
    let modelo = prompt('modelo')
    let placa = prompt('placa')
    let ano = prompt('ano')

    let veiculo = {
        marca: marca,
        modelo: modelo,
        placa: placa,
        ano: ano
    }
    baseDeVeiculos.push(veiculo);

    alert(`
        marca: ${marca}
        modelo: ${modelo}
        placa: ${placa}
        ano: ${ano}
    `);
}

apresentarMenu()
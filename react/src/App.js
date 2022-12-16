import { useState } from "react";
import "./App.css";

function App() {
  const [carro, setCarro] = useState();
  const [placa, setPlaca] = useState();

  const [veiculos, setVeiculos] = useState([]);

  function cadastrarVeiculo() {
    const veiculo = {
      carro,
      placa,
    };
    veiculos.push(veiculo);
    setVeiculos([...veiculos]);
    limparForm();
  }

  function limparForm() {
    setCarro("");
    setPlaca("");
  }

  return (
    <>
      <main className="container">
        <div className="form">
          <h1>Cadastrar Veiculo</h1>
          <input
            placeholder="Digite nome do veiculo"
            value={carro}
            onChange={(e) => {
              setCarro(e.target.value);
            }}
          />
          <input
            placeholder="Digite a placa"
            value={placa}
            onChange={(e) => {
              setPlaca(e.target.value);
            }}
          />
          <button className="button" onClick={cadastrarVeiculo}>
            Cadastrar
          </button>
          <button className="button" onClick={pesquisarVeiculo}>
            Pesquisar
          </button>
        </div>
        <div className="table-main">
          <table className="table">
            <tr className="tr">
              <th>Veiculo</th>
              <th>Placa</th>
            </tr>
            {veiculos.map((veiculo) => {
              return (
                <tr className="tr">
                  <td>{veiculo.carro}</td>
                  <td>{veiculo.placa}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </main>
    </>
  );
}

export default App;

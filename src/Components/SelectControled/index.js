import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Container, Dados } from "./styles";
import api from "../../services/api";
import { Table } from "react-bootstrap";

function SelectControled() {
  const [cidade, setCidade] = useState("");
  const [dadosCidades, setDadosCidades] = useState([]);
  const [options, setOptions] = useState([
    { value: "", label: "Selecione a Cidade" },
    { value: "Itajaí", label: "Itajaí" },
    { value: "Balneário Camboriú", label: "Balneário Camboriú" },
    { value: "Camboriú", label: "Camboriú" },
  ]);
  useEffect(() => {
    async function fetchData() {
      const response = await api.get();
      console.log(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let codCidade;
    switch (cidade) {
      case "Camboriú":
        codCidade = "4203204";
        break;
      case "Balneário Camboriú":
        codCidade = "4202008";
        break;
      case "Itajaí":
        codCidade = "4208203";
        break;
      default:
    }
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:3001/${codCidade}`
        //`https://brasil.io/api/dataset/covid19/caso/data/?is_last=True&state=SC&city_ibge_code=${codCidade}`
      );
      setDadosCidades(response.data.data);
      console.log(response.data.data);
    }
    fetchData();
  }, [cidade]);

  return (
    <Container>
      <select value={cidade} onChange={(e) => setCidade(e.currentTarget.value)}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <Dados>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Data da Coleta</th>
              <th>Casos confirmados</th>
              <th>Casos por 100K habitantes</th>
              <th>Nº de mortes</th>
              <th>Média de mortes</th>
            </tr>
          </thead>
          <tbody>
            {dadosCidades.map((dadosCidade) => (
              <tr key={dadosCidade.uid}>
                <td>{dadosCidade.date}</td>

                <td>{dadosCidade.confirmed}</td>

                <td>{dadosCidade.confirmed}</td>

                <td>{dadosCidade.deaths}</td>

                <td>{dadosCidade.death_rate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Dados>
    </Container>
  );
}

export default SelectControled;

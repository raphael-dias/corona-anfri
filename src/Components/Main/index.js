import React, { Fragment } from "react";
import ReactSearchBox from "react-search-box";
import { useData } from "../../Context/DataHora";
import { Container, Segment, Section } from "./styles";

const cidades = [
  {
    key: "itajai",
    value: "itajai",
  },
  {
    key: "Balneario Camboriú",
    value: "Balneario Camboriú",
  },
  {
    key: "Camboriú",
    value: "Camboriú",
  },
];
function Main() {
  const { data, setData } = useData();
  return (
    <Fragment>
      <Container>
        <Segment>
          <strong>Brasil</strong>
          <p>
            27/03/2020 <br /> a {data}
          </p>
        </Segment>
        <Segment>
          <strong>População</strong>
          <h3>210.147.125</h3>
        </Segment>
        <Segment>
          <strong>Recuperados</strong>
        </Segment>
        <Segment>
          <strong>Infectados</strong>
        </Segment>
      </Container>
      <Section>
        <ReactSearchBox
          placeholder="Placeholder"
          value="Doe"
          data={this.cidades}
          callback={(record) => console.log(record)}
        />
      </Section>
    </Fragment>
  );
}

export default Main;

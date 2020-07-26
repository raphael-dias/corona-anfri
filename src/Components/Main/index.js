import React, { Fragment } from "react";
import SelectControled from "../SelectControled";
import Dados from "../Dados";
import { useData } from "../../Context/DataHora";
import { Container, Segment, Section } from "./styles";

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
        <SelectControled />
        <Dados />
      </Section>
    </Fragment>
  );
}

export default Main;

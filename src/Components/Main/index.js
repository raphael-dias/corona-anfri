import React, { Fragment, useEffect, useState } from "react";
import SelectControled from "../SelectControled";
import { useData } from "../../Context/DataHora";
import { Container, Segment, Section } from "./styles";
import api from "../../services/api";

function Main() {
  const { data, setData } = useData();
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      setDeaths(response.data.deaths);
      setCases(response.data.cases);
    });
  }, []);
  return (
    <Fragment>
      <Container>
        <Segment>
          <strong>SC</strong>
          <p>
            27/03/2020 <br /> a {data}
          </p>
        </Segment>
        <Segment>
          <strong>População</strong>
          <h3>6.248.436</h3>
        </Segment>
        <Segment>
          <strong>Casos</strong>
          <h3>{cases}</h3>
        </Segment>
        <Segment>
          <strong>Mortes</strong>
          <h3>{deaths}</h3>
        </Segment>
      </Container>
      <Section>
        <SelectControled />
      </Section>
    </Fragment>
  );
}

export default Main;

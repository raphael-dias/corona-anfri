import React, { Fragment, useState } from "react";
import { useData } from "../../Context/DataHora";
import { Container, Content, Image } from "./styles";
import Logo from "../../assets/imgs/logo.png";

function Header() {
  const { data, setData } = useData();

  useState(() => {
    const date = new Date();
    const dataHora = date.toLocaleString();
    setData(dataHora);
  }, []);

  return (
    <Fragment>
      <Container>
        <h1>
          <strong>Covid-19</strong> AMFRI
        </h1>
        <Image>
          <img src={Logo} alt="logo do governo" />
        </Image>
      </Container>
      <Content>Dados coletados em: {data} </Content>
    </Fragment>
  );
}

export default Header;

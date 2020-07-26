import React, { Fragment } from "react";
import Select from "react-select";
import { Container } from "./styles";

function SelectControled() {
  const options = [
    { value: "Itajaí", label: "Itajaí" },
    { value: "Balneário Camboriú", label: "Balneário Camboriú" },
    { value: "Camboriú", label: "Camboriú" },
  ];
  return (
    <Container>
      <Select options={options} />
    </Container>
  );
}

export default SelectControled;

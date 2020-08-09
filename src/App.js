import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./Components/Header";
import Main from "./Components/Main";
import DataHoraProvider from "./Context/DataHora";

function App() {
  return (
    <DataHoraProvider>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Main />
      </div>
    </DataHoraProvider>
  );
}

export default App;

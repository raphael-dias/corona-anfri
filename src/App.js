import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import DataHoraProvider from "./Context/DataHora";

function App() {
  return (
    <DataHoraProvider>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </div>
    </DataHoraProvider>
  );
}

export default App;

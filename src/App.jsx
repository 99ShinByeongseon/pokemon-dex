import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
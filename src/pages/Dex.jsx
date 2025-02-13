import { useState } from "react";
import Dashboard from "../components/Dashboard";
import SelectedPokemon from "../components/SelectedPokemon";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px;
`;

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const handleAddPokemon = (pokemon) => {
    if (selectedPokemon.length < 6 && !selectedPokemon.some(p => p.id === pokemon.id)) {
      setSelectedPokemon((prevSelected) => [...prevSelected, pokemon]);
    }
  };

  return (
    <PageContainer>
      <h1>포켓몬 도감</h1>
      <SelectedPokemon selectedPokemon={selectedPokemon} />
      <Dashboard onAddPokemon={handleAddPokemon} />
    </PageContainer>
  );
}

export default Dex;
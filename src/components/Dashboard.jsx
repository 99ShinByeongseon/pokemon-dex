import PokemonList from "./PokemonList";
import styled from "styled-components";

const DashboardContainer = styled.div`
  margin-top: 20px;
`;

function Dashboard({ onAddPokemon }) {
  return (
    <DashboardContainer>
      <h2>포켓몬 리스트</h2>
      <PokemonList onAddPokemon={onAddPokemon} />
    </DashboardContainer>
  );
}

export default Dashboard;
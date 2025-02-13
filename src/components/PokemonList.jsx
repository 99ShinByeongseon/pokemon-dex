import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../MOCK_DATA";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
  border: 2px solid blue;
`;

function PokemonList({ onAddPokemon }) {
  return (
    <GridContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} button="register" onPokemonSelect={onAddPokemon} />
      ))}
    </GridContainer>
  );
}

export default PokemonList;

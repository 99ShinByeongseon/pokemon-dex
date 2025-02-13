import styled from "styled-components";

const SelectedContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  border: 2px solid blue;
`;

const Slot = styled.div`
  width: 60px;
  height: 60px;
  border: 1px dashed gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SelectedPokemon({ selectedPokemon }) {
  return (
    <SelectedContainer>
      {Array(6).fill(null).map((_, index) => (
        <Slot key={index}>
          {selectedPokemon[index] ? <img src={selectedPokemon[index].img_url} alt={selectedPokemon[index].korean_name} width="50" /> : "⚪"}
        </Slot>
      ))}
    </SelectedContainer>
  );
}

export default SelectedPokemon;
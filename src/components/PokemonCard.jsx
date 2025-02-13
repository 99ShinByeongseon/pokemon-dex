import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, button, onPokemonSelect, arrivedAt = "" }) => {
  const navigate = useNavigate();

  return (
    <CardLi
      className="poke-card"
      data-id={pokemon.id}
      onClick={() => {
        navigate(arrivedAt);
      }}
    >
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p className="poke-name">{pokemon.korean_name}</p>
      <p>No. {pokemon.id.toString().padStart(3, "0")}</p>
      <ul>
        {pokemon.types.map((type, idx) => (
          <li key={idx}>{type}</li>
        ))}
      </ul>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPokemonSelect(pokemon);
        }}
      >
        {button === "register" ? "데려가기" : "삭제하기"}
      </button>
    </CardLi>
  );
};

const CardLi = styled.div`
  width: 100%;
  flex: 1;
  background-color: #faeabb;
  padding: 20px 26px;
  border: solid 2px #fcf3d9;
  border-radius: 12px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  box-shadow: 0px 0px 8px 2px #eed995;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  p,
  li {
    color: #e49a4f;
    font-weight: 500;
  }

  p.poke-name {
    font-size: 1.4em;
    font-weight: 800;
    color: #df8b37;
  }

  ul {
    display: flex;
    gap: 6px;
  }
`;

export default PokemonCard;
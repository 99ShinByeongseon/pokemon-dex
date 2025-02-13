import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const StartButton = styled.button`
  background-color: #ffcb05;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
`;

function Home() {
  return (
    <HomeContainer>
      <h1>포켓몬 도감</h1>
      <p>포켓몬 세계를 탐험해보세요!</p>
      <Link to="/dex">
        <StartButton>포켓몬 도감 시작하기</StartButton>
      </Link>
    </HomeContainer>
  );
}

export default Home;
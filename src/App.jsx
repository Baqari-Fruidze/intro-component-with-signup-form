import styled from "styled-components";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Common>
      <Header>
        <H1>Learn to code by watching others</H1>
        <Para>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Para>
      </Header>
      <Input
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </Common>
  );
}

const Common = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  margin: 0 auto;
  max-width: 44rem;
  @media (min-width: 90rem) {
    flex-direction: row;
    max-width: 110rem;
    align-items: center;
    gap: 4.5rem;
  }
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const H1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.292px;
  @media (min-width: 90rem) {
    color: #fff;
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 55px; /* 110% */
    letter-spacing: -0.521px;
    width: 15ch;
  }
`;
const Para = styled.p`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  /* width: 40ch; */
  @media (min-width: 90rem) {
    color: #fff;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    width: 50ch;
  }
`;
export default App;

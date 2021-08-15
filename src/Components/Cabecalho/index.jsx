import React from "react";
import styled from 'styled-components'
import { primaryColor } from "../UI/variables";
import bank_logo from "../../assets/images/bank_logo.svg";

const PrimaryButtonHeaderStyled = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => props.primary ? "white" : primaryColor};
  color: ${(props) => props.primary ? primaryColor : "white"};
`;

const SecondaryButtonHeaderStyled = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: white;
  color: #41d3be;
`;

const HeaderStyled = styled.nav`
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const LogoStyled = styled.img`
  height: 50px;
  width: 50px;
`;

const Cabecalho = () => {
  return (
    <HeaderStyled>
      <LogoStyled className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <SecondaryButtonHeaderStyled href="https://google.com">
          Ajuda
        </SecondaryButtonHeaderStyled>
        <PrimaryButtonHeaderStyled className="btn-primario" href="https://google.com">
          Sair
        </PrimaryButtonHeaderStyled>
      </div>
    </HeaderStyled>
  );
};

export default Cabecalho;

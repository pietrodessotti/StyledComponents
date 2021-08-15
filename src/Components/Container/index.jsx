import React from "react";
import styled from 'styled-components';

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extract from "../Extract"

const ContainerStyled = styled.div`
  background-color: ${({ theme }) => theme.body };
  min-height: 90vh;
  padding: 0px 15vw;
`;

const ContentStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text };

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default () => {
  return (
    <ContainerStyled>
      <Titulo>Olá Fulano!</Titulo>
      <ContentStyled>
        <Conta />
        <Extract />
      </ContentStyled>
    </ContainerStyled>
  );
};

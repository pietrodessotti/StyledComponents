import React, { useState } from "react";
import styled from 'styled-components'

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import { IconStyled, IconThemeStyled, BoxStyled, ButtonStyled, BalanceStyled, DetailStyled} from "../UI";

const IconMarginStyled = styled(IconStyled)`
  margin-top: 2px;
`;


const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <BoxStyled>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <DetailStyled>
          <IconThemeStyled className="imagem-icone" src={dinheiro} alt="Ícone Saldo" />
        </DetailStyled>
        {toggleState ? (
          <BalanceStyled>
            <DetailStyled>R$</DetailStyled> 0,00{" "}
          </BalanceStyled>
        ) : null}
      </div>

      <ButtonStyled onClick={toggleHandler}>
        <IconMarginStyled
          className="imagem-icone"
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </ButtonStyled>
    </BoxStyled>
  );
};

export default Conta;

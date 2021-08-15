import React from 'react';

import {BoxStyled, ButtonStyled} from '../UI'
import { extratoLista } from '../../info'
import Items from '../Items';

const Extract = () => {
    
    return (
        <BoxStyled>
            {extratoLista.updates.map(({id, type, from, value, date}) => {
                return (
                <Items key={id} type={type} from={from} value={value} date={date} />
            );
            })}

            <ButtonStyled>Ver Mais</ButtonStyled>
        </BoxStyled>
    )
}

export default Extract
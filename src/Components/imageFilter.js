import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import {IconThemeStyled}  from '../Components/UI';

export default (type) => {
    const Images = {
        Restaurante: <IconThemeStyled src={alimentacao} alt="Restaurante" />,
        Utilidades: <IconThemeStyled src={utilidades} alt="Utilidades" />,
        Saude: <IconThemeStyled src={saude} alt="Saude" />,
        Transporte: <IconThemeStyled src={transporte} alt="Transporte" />,
        default: <IconThemeStyled src={outros} alt="Outro" />,
    };
    return Images[type] || Images.default;
}
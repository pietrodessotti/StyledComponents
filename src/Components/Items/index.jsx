import React from 'react';
import styled from 'styled-components';

import Item from '../Item';
import imageFilter from '../imageFilter'

const ItemsStyled = styled.div`
    box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 2px 0 ;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
`;

export default (props) => {
    return (
        <ItemsStyled>
            {imageFilter(props.type)}
            <Item {...props}/>
            <span>{props.date}</span>

        </ItemsStyled>
    )
}
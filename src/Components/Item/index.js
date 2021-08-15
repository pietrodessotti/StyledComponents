import React from 'react';
import styled from 'styled-components';

const ItemStyled = styled.div`
display: flex;
flex-direction: column;

.text {
    font-weight: bold;
}
`;

export default ({type, from, value}) => {

    return (
        <ItemStyled>
            <span className="text">
                {type}
            </span><span>
                {from}
            </span><span>
                {value}
            </span>
        </ItemStyled>
    )
}
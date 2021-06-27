import React, { FC } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../StyledHelpers/Components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5,auto);
  grid-gap: 10px;
  
`;

const CustomImg = styled.img`
padding:0 20px
`;

export const RightIcons: FC = () => {
    return (
        <Container>
        <CustomImg src="./media/icons/house.png" alt="search" title=""/>
        <CustomImg src="./media/icons/comments.png" alt="search" title=""/>
        <CustomImg src="./media/icons/bell.png" alt="search" title=""/>
        </Container>

    );
}


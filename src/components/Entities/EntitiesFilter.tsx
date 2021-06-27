import React, { FC } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
margin-bottom: 20px;
`;

const FiltersIcon = styled.img`
width: 10px;
margin: 5px;
cursor: pointer;
`;

const FilterWrapper = styled.div`
height: 250px;
width: 800px;
margin: 0 15px;
`;

const FilterText = styled.span`
margin: 0 5px;
font-size: 15px; 
`;

const FilterLastText = styled.span`
margin: 0 5px;
font-size: 20px; 
font-weight: bold;
cursor: pointer;
`;

const FilterBox = styled.div`
margin: 10px 5px;
display: flex;
align-items: center;
`;

const FilterInput = styled.input`
margin: 5px;
display: flex;
align-items: center;
background-color: #e8e8e8;
border: none;
border-radius: 5px; 
width: 150px;
padding-left: 10px;
`;



const EntitiesFilter: FC = () => {
    return (
        <Wrapper>
            <FilterWrapper>
                <FilterText>Rows are filtered by the following condicions starting from the top.</FilterText>
                <FilterBox>
                    <FiltersIcon src="../media/icons/house.png" />
                    <FilterText>Where</FilterText>
                    <FilterText>Company</FilterText>
                    <FiltersIcon src="../media/icons/arrow-down.svg" />
                    <FilterText>Contains</FilterText>
                    <FiltersIcon src="../media/icons/arrow-down.svg" />
                    <FilterInput placeholder='Type...' disabled></FilterInput>
                </FilterBox>

                <FilterBox>
                    <FiltersIcon src="../media/icons/house.png" />
                    <FilterText>Where</FilterText>
                    <FilterText>Status</FilterText>
                    <FiltersIcon src="../media/icons/arrow-down.svg" />
                    <FilterText>Is</FilterText>
                    <FiltersIcon src="../media/icons/arrow-down.svg" />
                    <FilterInput placeholder='Type...' disabled></FilterInput>
                    <FilterText>In</FilterText>
                    <FiltersIcon src="../media/icons/arrow-down.svg" />
                    <FilterInput placeholder='Entity...' disabled></FilterInput>
                </FilterBox>

                <FilterBox>
                    <FiltersIcon src="../media/icons/house.png" />
                    <FilterText>And</FilterText>
                    <FilterText>Status</FilterText>
                    <FiltersIcon src="../media/icons/arrow-down.svg" />
                    <FilterText>Ends before</FilterText>
                    <FiltersIcon src="../media/icons/arrow-down.svg" />
                    <FilterInput placeholder='Date...' disabled></FilterInput>
                    <FilterText>In</FilterText>
                    <FiltersIcon src="../media/icons/arrow-down.svg" />
                    <FilterInput placeholder='Entity...' disabled></FilterInput>
                </FilterBox>

                <FilterBox>
                    <FiltersIcon src="../media/icons/plus.svg" />
                    <FilterLastText>Add filter</FilterLastText>
                    <FilterLastText>choose property</FilterLastText>
                    <FiltersIcon src="../media/icons/arrow-down.svg" />
                </FilterBox>

            </FilterWrapper>
        </Wrapper >
    );
}

export default EntitiesFilter;

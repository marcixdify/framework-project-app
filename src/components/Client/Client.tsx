import React, { FC, useState, useEffect} from 'react';
import styled from 'styled-components';
import ResumeWork from '../HomePage/ResumeWork';
import { Photo } from '../../interfaces/API/types';
import { Comment } from '../../interfaces/API/types';
import { Link} from 'react-router-dom';

const Wrapper = styled.div`
border-radius: 5px; 
box-shadow: 2px 5px 5px 0px;
width: 1250px;
margin: 20px 0;
background-color: #fff;
display: flex;
margin-left:10px;
flex-direction: column;
font-family: Helvetica;
color: #4d4d4d;
font-size: 15px;
`;

const Container = styled.div`
`;

const Img = styled.img`
width: 100%;
height: 300px;
`;

const TextUp = styled.span`
display: flex;
justify-content: space-between;
`;

const TextContainer = styled.span`
width:100%;
`;

const Heading = styled.h3`
font-size: 20px;
font-weight: bold;
margin-top: 15px;
color: #000;
margin-left:5px
`;

const Text = styled.p`
margin-top: 10px;
`;

const ContractDiv = styled.div`
display: flex;
height: 100px;
`;

const ContractIcon = styled.img`
width: 70px;
height: 70px;
margin: 20px;
`;

const SettIcon = styled.img`
margin: 10px 10px 0 0;
width: 20px;

`;

const WorkingDiv = styled.div`
display: flex;
background: #f3f3e0;
display: flex;
flex-direction: column;
`;

const Boxs = styled.div`
display: flex;
padding-left:10%;
`;

const BoxContainer = styled.div`
display: flex;
flex-direction: column;
height: 200px;
width: 300px;
background: #fff;
box-shadow: 0px 2px 5px;
margin: 20px;
`;

const BoxImg = styled.img`
width: 35px;
margin: 15px;
`;

const BoxHeading = styled.h3`
font-size:20px;
margin: 10px;
color: #000;
`;

const BoxSpan = styled.span`
font-weight: bold;
`;

const BoxText = styled.p`
margin-left: 10px;;
`;

const Client: FC = () => {
const [apiphoto, getPhoto] = useState<Photo>()
const [apicom, getCom] = useState<Comment>()

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/1')
        .then((response) => response.json())
         .then((json) => {
             getPhoto(json);
            });
    }, [])

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments/1')
        .then((response) => response.json())
        .then((json) => {
            getCom(json);
            });
    }, [])

    return (
        <Container>
            <Wrapper>
                <Img src={apiphoto?.url}/>
                <ContractDiv>
                    <ContractIcon src={apiphoto?.url}/>
                    <TextContainer>
                        <TextUp>
                            <Heading>Client contract</Heading>
                            <SettIcon src='../media/icons/cog.svg' />
                        </TextUp>
                        <Text>{apicom?.body}</Text>
                    </TextContainer>
                </ContractDiv>
                <WorkingDiv>
                    <Heading>Start working on corporate matters</Heading>
                    <Boxs>
                        
                        <BoxContainer>
                        <Link to="/entities"> <BoxImg src="../media/icons/entities2.svg" /></Link>
                            <BoxHeading>Explore your <BoxSpan>entities</BoxSpan></BoxHeading>
                            <BoxText>{apicom?.body}</BoxText>
                        </BoxContainer>
                        <BoxContainer>
                            <BoxImg src="../media/icons/house.svg" />
                            <BoxHeading>Structure your <BoxSpan>ownership</BoxSpan></BoxHeading>
                            <BoxText>{apicom?.body}</BoxText>
                        </BoxContainer>
                        <BoxContainer>
                            <BoxImg src="../media/icons/ecosystem.svg" />
                            <BoxHeading>Define the <BoxSpan>calendar</BoxSpan></BoxHeading>
                            <BoxText>{apicom?.body}</BoxText>
                        </BoxContainer>

                    </Boxs>
                </WorkingDiv>
            </Wrapper>

            <ResumeWork></ResumeWork>
        </Container>
    );
}

export default Client;
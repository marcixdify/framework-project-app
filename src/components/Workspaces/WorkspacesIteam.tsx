import React, {Component, FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Photo } from '../../interfaces/API/types';


const WorkspaceWrapper = styled.div`
width: 900px;
height: 300px;
margin-top: 30px 
display: flex;
flex-direction: column;
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 18px;
}
`;

const WorkspaceInnerWrapper = styled.div`
width: 300px;
height: 250px;
border-radius: 5px;
box-shadow: 0px 5px 5px 1px;
margin: 15px;
`;


const WorkspaceImg = styled.img`
background-size: auto;
background-repeat: no-repeat;
width: 100%;
height: 50%;
`;

const WorkspaceText = styled.div`
margin-top: -30px;
display: flex;
align-items: center;
z-index: 100;
`;



const Icon = styled.img`
width: 40px;
height: 40px;
margin: 8px;
padding: 20px;
box-shadow: 0px 2px 8px -2px rgba(0,0,0,0.5);
background-color: #fff;
`;

const SpanText = styled.span`
color: #2e333f;
font-size: 20px;
font-weight:bold;
`;

const IconCon = styled.img `
margin: 0px 10px;
width: 15px;
`;

const EqUl = styled.ul`
display: flex;
margin: 3px;
flex-direction: row;

`;

const EqLi = styled.li`
margin-top: 10px;
align-items: center;
display: flex;
`;

const A = styled.a`
text-decoration: none;
font-size: 14px;
color: gray;
margin-right: 10px;
`;

const Text = styled.p`
font-size: 12px;
margin-left: 10px;
color: gray;
`;

const WorkDiv = styled.div`
display: flex;
margin-top: 10px;
flex-wrap: nowrap;
`;

export const WorkspaceCard: FC = () => {

const [apiphoto, getPhoto] = useState<Photo>()


useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos/2')
          .then((response) => response.json())
          .then((json) => {
              getPhoto(json);
          });
}, [])

  
return (
      <>
      <WorkspaceWrapper>
        <WorkDiv>
          
            <WorkspaceInnerWrapper>  
            <Link to="/client">
            <WorkspaceImg src={apiphoto?.url}/>
            </Link>
              <WorkspaceText>
                <Icon src='/media/icons/people.svg'/>
                <SpanText>Client Contract</SpanText>
              </WorkspaceText>

              <EqUl>
                <EqLi>
                  <IconCon src="./media/icons/ecosystem.svg"></IconCon>
                  <A href="#">Contract</A>
                </EqLi>

                <EqLi>
                      <IconCon src="./media/icons/people.svg"/>
                      <A href="#">150 users</A>
                </EqLi>
              </EqUl>

              <Text>Last update 2 days ago</Text>
    </WorkspaceInnerWrapper>

    </WorkDiv>
    </WorkspaceWrapper> 
      </>
    );
  };
  export default WorkspaceCard;
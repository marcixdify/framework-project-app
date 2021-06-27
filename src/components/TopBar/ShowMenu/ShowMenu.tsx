import React, { FC } from 'react';
import styled from 'styled-components'
import {Colors} from "../../StyledHelpers/Colors";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Link } from 'react-router-dom';

import Account from './Account'

const Wrapper = styled.div`
position: absolute;
z-index: 1;
top: 24px;
left: 0;
background: white;
padding: 16px;
border: 1px solid;
width: 250px;
box-shadow: 1px 1px 12px ${Colors.black};

`;


const MenuItem = styled.div`
    width:90%;
    padding: 10px;
    img {
        height: 20px;
        width:20px;
        
    }
   
`;

const InnerWarpper = styled.div`
    width:100%;
    overflow-y:scroll;
    height:300px;
    flex-direction: column;
    a {
        text-decoration:none;
        color: ${Colors.black};
        margin:5px;

    }
`;

const FilterInput = styled.div`
width:100%;
height:50px;
display:flex;
justify-content:center;
align-items:center;
input{
border-radius:5px;
height: 20px;
width: 90%;
font-size: 18px;

}
`;

const LinkBtn = styled.button`
background:white;
border:none; 
cursor:pointer;
overflow:hidden;
outline:none;
font-family: Helvetica;
    color: #4d4d4d;
    font-size: 15px;
`;



export const ShowMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return (
       <Wrapper>
            <FilterInput>
                <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter..." />
            </FilterInput>
            <InnerWarpper>
                <MenuItem><p>Platform</p></MenuItem>
                {
                    'Home'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem ><img src='./media/icons/house2.png'/>
                    <Link to="/">
                    <LinkBtn>Home</LinkBtn>
                    </Link>
                    </MenuItem>
                }
                {
                    'Publication'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem>  <img src='./media/icons/publications.png'/> 
                    <Link to="/people">
                    <LinkBtn>Publication</LinkBtn>
                    </Link>
                    </MenuItem>
                }
                {
                    'People'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/people.png'/> 
                    <Link to="/people">
                    <LinkBtn>People</LinkBtn>
                    </Link>
                    </MenuItem>
                }
                {
                    'Entities'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/entities2.png'/> 
                    <Link to="/entities">
                    <LinkBtn>Entities</LinkBtn>
                    </Link>
                    </MenuItem>
                }
                {
                    'Administration'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/administration.png'/> 
                    <Link to="/administration">
                    <LinkBtn>Administration</LinkBtn>
                    </Link>
                    </MenuItem>
                }
                <MenuItem><p>Workspaces</p></MenuItem>
                {
                    'Client contract'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/entities2.png'/> 
                    <Link to="/administration">
                    <LinkBtn>Client contract</LinkBtn>
                    </Link>
                    </MenuItem>
                }
                {
                    'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/entities2.png'/>
                    <Link to="/client">
                    <LinkBtn>Supplier contract</LinkBtn>
                    </Link>
                    </MenuItem>
                }
                {
                    'Corporate'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/entities.png'/> 
                    <Link to="/corporate">
                    <LinkBtn>Corporate</LinkBtn>
                    </Link>
                    </MenuItem>
                }
                {
                    'Group norms'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/people.png'/>
                    <Link to="/corporate">
                    <LinkBtn>Publication</LinkBtn>
                    </Link>
                    </MenuItem>
                }
                {
                    'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/entities.png'/><LinkBtn>Real estate contracts</LinkBtn></MenuItem>
                }
            </InnerWarpper>
            <Account/>
        </Wrapper>

    );
}


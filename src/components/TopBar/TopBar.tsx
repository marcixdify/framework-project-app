import React, { FC } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import {Wrapper} from "../StyledHelpers/Components";
import {Colors} from "../StyledHelpers/Colors";
import { ExpandedMenu } from './ExpandedMenu';
import { fontSize } from '../StyledHelpers/FontSizes'
import { RightIcons } from './Notification/RightIcons';






const InnerWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSize["18"]};
  box-shadow: 1px 1px 12px ${Colors.black};
  
`;



const InputWrapper = styled.div`
  align-content: center;
  display:flex;
`;

const LeftLogo = styled.div`
  justify-self: start;
  margin-left: 10px;
  cursor: pointer;
    
`;

const SearchField = styled.div`
  width: 250px;
  padding: 8px;
  margin-left: -350px;
  
`;

const SearchButton = styled.div`
  height: 30px;
  color: white;
  padding: 3px;
  font-size: 30px;
  cursor: pointer;
  margin-top: 2px;
  margin-left: 140px;
  position: absolute;
  
  `;
const MenuWrapper = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  width: 250px;
  justify-content: space-between;
  margin-left: -650px;
  
`;
const LeftSide = styled.div`

`;




export const TopBar: FC = () => {

    return (
        <Wrapper>
            <InnerWrapper>

                <LeftLogo>
                  <Link to='/'>
                    <img src="./media/logo.png" alt="logo" height="40px" />
                    </Link>
                </LeftLogo>
                <ExpandedMenu>
                </ExpandedMenu>
               

                <InputWrapper>
                    <SearchField>
                        <input type="text" placeholder="Search Legalcluster" style={{width:'300px', height:'20px'}}/>
                    </SearchField>

                    <SearchButton>
                        <img src="./media/icons/search.png" alt="search" />
                    </SearchButton>
                </InputWrapper>

                <RightIcons>
                </RightIcons>
            </InnerWrapper>
        </Wrapper>
    );
};
export default TopBar


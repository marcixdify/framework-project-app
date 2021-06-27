import {FC} from 'react';
import styled from 'styled-components';
import useDropdown from "react-dropdown-hook";
import { ShowMenu } from './ShowMenu/ShowMenu';


const MenuWrapper = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  width: 250px;
  justify-content: space-between;
  margin-left: -650px;
  font-family: Helvetica;
    color: #4d4d4d;
    font-size: 15px;
`;
const LeftSide = styled.div`

`;
const CustomImg = styled.img`
padding:0 20px
`;


export const ExpandedMenu: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropDown] = useDropdown();

    const menuHandler = () => {
        toggleDropDown();
    }

    return(
        <MenuWrapper ref={wrapperRef}>
        <LeftSide onClick={menuHandler}>
        <CustomImg src="./media/icons/house.png" alt="search" title=""/>
            <span>Home</span>
        </LeftSide >
        <img onClick={menuHandler} src ="./media/icons/arrow-down.png" alt = ""/>
        {dropdownOpen &&
        <ShowMenu/>
        }
    </MenuWrapper>
    );

};
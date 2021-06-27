import {FC} from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    width:100%;
    height:130px;
    display: flex;
    flex-direction: column;
    font-family: Helvetica;
    color: #4d4d4d;
    font-size: 15px;
    
    #Account{
        margin-left:10px;
        margin-top:8px;

    }
`;
const Profile = styled.div` 
    margin-left: 10px;
    margin-top: 5px;
    margin-right: 15px;
    display:flex;
    flex-direction:row;
    align-items:center;
    img{
        margin-top: 5px;
        height:30px;
        width:auto;
        margin-right: 10px;
        border-radius: 50%;
    }
    p{

        margin-bottom:5px;
    }
    a{
        text-decoration:none;
        font-weight: bold;
    }
    #NameAndLink{
        margin-left:8px;
    }
    div{
        display:flex;
        flex-direction:column;
    }
`;

const PrivacyAndSettings = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:150px;
    #Privacy,#Settings{
        display:flex;
        align-items:center;
        margin-top: 10px;
        margin-left: 15px;
        img{
            height:20px;
            margin-right:20px;
        }
        a{
            text-decoration:none;

        }
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

const Account: FC = () => {
	return (
        <Wrapper>
            <p id="Account">Account</p>

            <Profile>
                <img src="./media/img_avatar.png"></img>
                <div id="NameAndLink">
                    <p id="Name">Marcin Lencewicz</p>
                    <Link to='/profile'>
                    See profile
                    </Link>
                </div>
            </Profile>

            <PrivacyAndSettings>
                <div id="Privacy">
                    <img src="./media/icons/privacy.png"></img>
                    <Link to="settings"><LinkBtn>Privacy</LinkBtn></Link>
                </div>
                <div id="Settings">
                    <img src="./media/icons/settings.png"></img>
                    <Link to="settings"><LinkBtn>Settings</LinkBtn></Link>
                </div>
            </PrivacyAndSettings>

        </Wrapper>
	)
}

export default Account;
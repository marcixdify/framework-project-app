import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const LeftWrapper = styled.div`
display: flex;
width: 15%;
flex-direction: column;
align-items: flex-start;
height: 900px;


`;

const LeftMenuWrapper = styled.div`
width: 30%;
height: 20%;
margin-top: 15px;
margin-left: 15px;
background-color: white;
box-shadow: 0px 2px 3px #999;
z-index: -1;
@media (min-width: 790px) {
  width: 85%;
  height: auto; 
  box-shadow: 0px 2px 3px #999;
}
`;

const LeftInnerWrapper = styled.div`
display: flex;
flex-direction: column;
width: auto;
}
`;

const LeftUpperSection = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: auto;
justify-content: center;
align-items: center;
background-color: white;
margin: 12px;
& > img {
  width: 25%;
  height: auto;
  border-radius: 50%;
}
& > p {
  text-align: center;
  font-family: Helvetica;
  color: #bbbbbb;
  font-weight: bold;
  font-size: 10px;
}
`;

const ProfileName = styled.div`
width: auto;
height: auto;
& > h1 {
  margin: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  font-family: Helvetica;
  color: #5353cc;
}
`;

const LeftLowerSection = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: auto;
padding: 10px;
background-color: white;
justify-content: center;
align-items: center;
border-top: solid;
border-color: #999;
border-width: 1px;
`;

const LeftLowerInner = styled.div`
display: flex;
width: 90%;
align-items: center;
`;


const LeftLowerDiv = styled.div`
display: flex;
align-items: center;
width: 100%;
height: auto;
justify-content: space-between;
margin-top: 5px;
& > img {
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px;
  width: 15px;
  margin-left: 5px;
  
}
`;

const LeftLowDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
& > p {
  text-align: center;
  font-family: Helvetica;
  font-weight: bold;
  color: #4d4d4d;
  font-size: 10px;
  margin-left: 10px;
}
& > img {
  width: 22px;
}
@media (min-width: 1280px) {
  & > p {
  font-size: 14px;
  }
}
`;

const UnderLeftWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 15px;
margin-left: 15px;
width: 80%;
height: auto;
`;

const UnderLeftDiv = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: 78%;
padding: 10px;
align-items: center;
`;

const UnderLeftContent = styled.div`
display: flex;
align-items: center;
width: 100%;
margin-left: 15px;
padding: 8px;
cursor: pointer;
& > img {
  width: 11%;
  height: auto;
}
& > p {
  text-align: center;
  font-family: Helvetica;
  font-weight: bold;
  color: #4d4d4d;
  font-size: 15px;
  margin-left: 15px;
}
`;

const LinkBtn = styled.button`
background:white;
border:none; 
cursor:pointer;
overflow:hidden;
outline:none;
text-align: center;
font-family: Helvetica;
font-weight: bold;
color: #4d4d4d;
font-size: 15px;
margin-left:10px;
`;

export const LeftMenu: FC = () => {

    return (
        <LeftWrapper>
        <LeftMenuWrapper>
          <LeftInnerWrapper>
            <LeftUpperSection>
                
              <img src="/media/img_avatar.png" alt=""/>
              
              <ProfileName>
                  
                <h1>Marcin Lencewicz</h1>
              </ProfileName>
              <p>Job Title - Company</p>
            </LeftUpperSection>
            <LeftLowerSection>
              <LeftLowerInner>
                <LeftLowerDiv>
                  <LeftLowDiv>
                  <img src="/media/icons/network.png" alt=""/>
                  <p>Your Network</p>
                  </LeftLowDiv>
              <img src="/media/icons/user-plus.png" alt=""/>
                </LeftLowerDiv>
              </LeftLowerInner>
              <LeftLowerInner>
                <LeftLowerDiv>
                  <LeftLowDiv>
                  <img src="/media/icons/publications.svg" alt=""/>
                  <p>Your Publications</p>
                  </LeftLowDiv>
                <img src="/media/icons/plus.png" alt=""/>
                </LeftLowerDiv>
              </LeftLowerInner>
            </LeftLowerSection>
          </LeftInnerWrapper>
        </LeftMenuWrapper>
        <UnderLeftWrapper>
            <UnderLeftDiv>
              <UnderLeftContent>
              <img src="/media/icons/house.png" alt=""/>
              <Link to="/client">
              <LinkBtn>
              <p>Publications</p>
              </LinkBtn>
              </Link>
              </UnderLeftContent>
              <UnderLeftContent>
              <img src="/media/icons/ecosystem.png" alt=""/>
              <Link to="/ecosystem">
              <LinkBtn>
              <p>Ecosystem</p>
              </LinkBtn>
              </Link>
              </UnderLeftContent>
              <UnderLeftContent>
                  
                  
              <img src="/media/icons/entities2.png" alt=""/>
              <Link to="/entities">
              <LinkBtn>
              <p>Entities</p>
              </LinkBtn>
              </Link>
              </UnderLeftContent>
            </UnderLeftDiv>
        </UnderLeftWrapper>
        </LeftWrapper>
    )

}
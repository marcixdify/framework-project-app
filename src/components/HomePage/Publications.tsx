import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';



const PublicationsWrapper = styled.div`
display: flex;
width: auto;
height: auto;
padding: 5px;
box-shadow: 0px 2px 3px #999;
margin-top:10px;
`;

const MainContentWrapper = styled.div`
display: flex;
flex-direction: column;
width: 93%; 
height: auto;
`;

const MainContentHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: auto;
width: 100%;
`;

const PublicationsDiv = styled.div`
display: flex;
width: 100%;
height: auto;
& > img {
    width: 300px;
    height: 100%;
}
`;

const PublicationsContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: left;
width: 100%;
height: 100%;
align-items: center;
background-color: white;
`;

const ContentHeaderText = styled.div`
width: 92%;
height: auto;
text-align: left;
& > p {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 20px;
}
`;

const ContentText = styled.div`
width: 92%;
height: auto;
text-align: left;
& > p {
    font-family: Helvetica;
    font-weight: bold;
    color: #5353cc;
    font-size: 15px;
}
`;

const PublicationsDIV = styled.div`
display: flex;
width: 92%;
padding: 5px;
& > img {
    width: 75px;
    height: 75px;
}
& > p {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 15px;
    margin: 5px;
    line-height: 1.3;
}
`;

const  AuthorDataProfile = styled.div`
display: flex;
width: 92%;
height: auto;
flex-direction: column;
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 15px;
    margin: 5px;
    line-height: 1.3;
}
`;

const AuthorData = styled.div`
display: flex;
align-items: center;
justify-content: left;
gap: 10px;
width: 100%;
height: auto;
margin-left: 5px;
& > img {
    height: 23px;
    width: 23px;
    border-radius: 30px;
}
& > p {
    font-size: 12px;
    font-weight: bold;
    color: #cac7c7;
    font-family: Helvetica;
}
& > span {
    font-size: 12px;
    font-weight: bold;
    color: #4d4d4d;;
}
`;

const LinkBtn = styled.button`
background:white;
border:none; 
cursor:pointer;
overflow:hidden;
outline:none;

font-family: Helvetica;
font-weight: bold;
color: #r32211;
font-size: 15px;

`;

const ApiFoto = styled.img` `
;


type Publications = {
    userId: number;
    id: number;
    body: string;
    title: string;
    url:string;
}




export const Publications: FC = () => {

    const [apiPub, setApi] = useState<Publications>()
useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res=>res.json())
    .then(json=>setApi(json))
 }, [])

 const [apiPub3, setApi3] = useState<Publications>()
 useEffect(()=> {
     fetch("https://jsonplaceholder.typicode.com/photos/7")
     .then(res=>res.json())
     .then(json=>setApi3(json))
  }, [])

    return (
      <>
        <PublicationsWrapper>
            <MainContentWrapper>
                <MainContentHeader>
                    <PublicationsDiv>
                        <img src='/media/skyscraper.jpg' alt="skyscraper"></img>
                            <PublicationsContent>
                                <ContentHeaderText>
                                <p>Latest publications</p>
                                </ContentHeaderText>
                                <PublicationsDIV>
                                <img src={apiPub3?.url} alt="guy"></img>
                                <AuthorDataProfile>
                                <h1>{apiPub?.body}</h1>
                                <AuthorData>
                                <p>7 jan. 2020</p>
                                <img src={apiPub3?.url} alt="guy"></img>
                                <span>John Doe</span>
                                </AuthorData>
                                </AuthorDataProfile>
                                </PublicationsDIV>
                                <PublicationsDIV>
                                <img src={apiPub3?.url} alt="placeholder"></img>
                                <AuthorDataProfile>
                                <h1>{apiPub?.body}</h1>
                                <AuthorData>
                                <p>7 jan. 2020</p>
                                <img src={apiPub3?.url} alt="placeholder"></img>
                                <span>John Doe</span>
                                </AuthorData>
                                </AuthorDataProfile>
                                </PublicationsDIV>
                                <PublicationsDIV>
                                <img src={apiPub3?.url} alt="placeholder"></img>
                                <AuthorDataProfile>
                                <h1>{apiPub?.body}</h1>
                                <AuthorData>
                                <p>7 jan. 2020</p>
                                <img src={apiPub3?.url} alt="guy"></img>
                                <span>John Doe</span>
                                </AuthorData>
                                </AuthorDataProfile>
                                </PublicationsDIV>
                                <ContentText>
                                <Link to="/publications"><LinkBtn>See more publications</LinkBtn></Link>
                                </ContentText>
                            </PublicationsContent>  
                    </PublicationsDiv>
                </MainContentHeader>
                <MainContentHeader>

                </MainContentHeader>
            </MainContentWrapper>
        </PublicationsWrapper>
      </>
    );
  };
  export default Publications;
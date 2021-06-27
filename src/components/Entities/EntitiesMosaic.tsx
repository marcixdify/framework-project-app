import { FC, useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
import Filter from '../../interfaces/Filter/Filter';
import { Photo } from '../../interfaces/API/types';


const Wrapper = styled.div`
width:1400px;
`;

const Ul = styled.ul`
box-shadow: 0px 5px 5px 1px;
`;

const Li = styled.li`
border:1px solid black;
width: 300px;
height: 100px;
display:flex;
`;

const LiImg = styled.img`
width:90px;
padding:5px;
border-radius: 15px;
`;

const Text = styled.p`
margin-top:25px;
color:hsl(214deg 4% 66%)
`;

const Container = styled.div`
display:inline-flex;
padding:1%;
`;

const Heading = styled.h1`
font-weight:bold;
padding-top:10px;
font-family: Helvetica;
color: hsl(229deg 58% 39%);
`;

const TextContainer = styled.div`

`;











const Ul2 = styled.ul`
box-shadow: 0px 5px 5px 1px;
`;

const Li2 = styled.li`
border:1px solid black;
width: 100%
height: 100px;
display:flex;
`;


const Text2 = styled.p`
margin-top:25px;
color:hsl(214deg 4% 66%)
`;

const Container2 = styled.div`

padding:1%;
`;

const Heading2 = styled.h1`
font-weight:bold;
padding-top:10px;
font-family: Helvetica;
color: hsl(229deg 58% 39%);
`;

const TextContainer2 = styled.div`

`;

const HideDiv = styled.div`

`;






export const EntitiesMosaic: FC = () => {

const [filterSearch, setFilterSearch] = useState<string>('');
const [works, setWorks] = useState<Photo[]>([]);

const filterChange = (ev: React.FormEvent<HTMLInputElement>) => {setFilterSearch((ev.target as HTMLInputElement).value);}

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((json) => {
        setWorks(json);
        });
}, [])



const filterTitle = ({ title }: { title: string }) => {
    if (filterSearch === '') return true
    return title.toLowerCase().includes(filterSearch.toLowerCase());
    }

const workToShow = works.filter(filterTitle).slice(0,12);;



    return (
        <Wrapper>

           
            {workToShow.map(work => ( 
            <Container>
            <Ul>
                <Li>

                    <LiImg src={work.url}/>
                    <TextContainer>
                    <Heading>World Company SAS</Heading>
                    <Text>
                        {work.title}
                    </Text>
                    </TextContainer>
                </Li>
            </Ul>
            </Container>
            ))}






    </Wrapper>
    );
}

export default EntitiesMosaic;
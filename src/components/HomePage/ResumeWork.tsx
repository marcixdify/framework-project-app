import { FC, useEffect, useState} from "react";
import styled from "styled-components";
import Filter from '../../interfaces/Filter/Filter';
import { Comment } from '../../interfaces/API/types';
import Pagination from '../../interfaces/Pagination/Pagination';

const ResumeWorkWrapper = styled.div`
display: flex;
width: auto;
height: auto;
padding: 15px;
`;

const MainContentWrapper = styled.div`
display: flex;
flex-direction: column;
width: 93%;
height: auto;
gap: 10px;
`;

const ResumeWorkHeader = styled.div`
width: 20%;
height: auto;
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 18px;
    margin-bottom: 10px;
    margin-left: 15px;
}
`;


const ResumeWorkDiv = styled.div`
display: flex;
flex-direction: column;
width: auto;
height: auto;
background-color: white;
box-shadow: 0px 2px 3px #999;
`;

const WorkHeader = styled.div`
width: 20%;
height: auto;
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #5353cc;
    font-size: 15px;
    padding: 8px;
    margin-left: 7px;

}
`;

const WorkContent = styled.div`
height: auto;
& > p {
    font-family: Helvetica;
    color: #4d4d4d;
    font-size: 13px;
    margin-left: 15px;
    line-height: 1.5;
}
`;

const WorkAuthors = styled.div`
display: flex;
flex-direction: row;
width: 60%;
height: auto;
margin-left: 15px;
padding: 5px;
align-items: center;
& > #dot {
    width: 3px;
    margin-left: 15px;
    margin-right: 15px;
}
& > img {
    width: 15px;
    
}
& > p {
    font-size: 11px;
    font-family: Helvetica;
    color: #4d4d4d;
    margin-left: 10px;
}
& > span {
    font-size: 11px;
    font-family: Helvetica;
    color: #7a7a7a;
}

`;



export const ResumeWork: FC = () => {

const [filterSearch, setFilterSearch] = useState<string>('');
const [works, setWorks] = useState<Comment[]>([]);
const [cPage, setPage] = useState<number>(0);
const [Pages, setPages] = useState<number>(0);

const filterChange = (ev: React.FormEvent<HTMLInputElement>) => {setFilterSearch((ev.target as HTMLInputElement).value);}

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json) => {
        setWorks(json);
        setPages(Math.ceil(json.length / 100));
        });
}, [])

const filterTitle = ({ name }: { name: string }) => {
    if (filterSearch === '') return true
    return name.toLowerCase().includes(filterSearch.toLowerCase());
    }

const paginationPage = (selectedItem: { selected: number }) => {setPage(selectedItem.selected); }

const workToShow = works.filter(filterTitle).slice(cPage * 10, (cPage + 1) * 10);



    return (

      <>
        <ResumeWorkWrapper>
            <MainContentWrapper>
                <ResumeWorkHeader>
                    <h1>Resume your work</h1>
                    <Filter inputType={'search'} align={'left'} placeholder={'Filter by title...'} onChange={filterChange} />
                
                </ResumeWorkHeader>
                {workToShow.map(work => ( 
                <ResumeWorkDiv>
                    <WorkHeader>
                        <h1>{work.name}</h1>
                    </WorkHeader>
                    <WorkContent>
                        <p>{work.body}</p>
                    </WorkContent>
                    <WorkAuthors>
                    <img src='./media/icons/publications.png' alt="podcast"></img>
                    <p>Subsid. corp.</p>
                    <img id="dot" src='./media/icons/publications.png' alt="dot"></img>
                    <img src='./media/icons/publications.png' alt="podcast"></img>
                    <p>Corporate</p>
                    <img id="dot" src='./media/icons/publications.png' alt="dot"></img>
                    <span>Updated 3 days ago by John Doe</span>
                    </WorkAuthors>
                    </ResumeWorkDiv>
))}
                                
            <Pagination marginPagesDisplayed={1} pageCount={Pages} pageRangeDisplayed={2} onPageChange={paginationPage} />
            </MainContentWrapper>
        </ResumeWorkWrapper>
        
      </>
    );
  };
  export default ResumeWork;
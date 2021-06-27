import { FC } from 'react';
import React from 'react';
import styled from 'styled-components';
import { EditText, EditTextarea } from 'react-edit-text';

export const Wrapper = styled.div`
box-sizing: border-box;
padding-left:15%;
`;

const  ProfileWrapper = styled.div `
display:inline-flex;
position:relative;
width:100%;
border-bottom:1px solid #999;
padding-top:10%;
font-family: Helvetica;
font-weight: bold;
color: #4d4d4d;
font-size: 15px;

`;

const Top = styled.div`
display: flex;
margin-left: 560px;
`;

const Span = styled.span`
font-size: .8em;
margin: 10px 0;  
cursor: pointer;
color: #a2a2a2;
`;

const TopSpan = styled.span`
font-size: .9em;
margin: 10px;  
cursor: pointer;
`;

const Icon = styled.img`
width: 15px;
cursor: pointer;
`;

const  ProfileName = styled.div `
flex-direction: column;

padding-left:5%;
width:300px;
`;

const  ProfileImg = styled.div `
flex-direction: column;
display:flex;
margin-left:5px;
& > img {
       width: 80px;
       border-radius: 50%;
    }
 
`;

const  ProfileIcons = styled.div `
display:inline-block;
`;

const  ProfileEmail = styled.div `
position:absolute;                 
bottom:0;                         
right:0;     
& > img {
    float:right;
    margin-bottom:30px;
 }

`;

const  ExpertiseWrapper = styled.div `
width:100%;
display: inline-block;
margin-top:20px;
border-bottom:1px solid #999;
& > img {
    float:right;
 }

`;

const  BlockInline = styled.div `
display: flex;
& > img {
    width: 5px;
    border-radius: 50%;
 }
`;

const  PanelInformation = styled.div `
border-bottom:1px solid #999;
margin-top:15px;
padding-bottom:15px;
font-family: Helvetica;
color: #4d4d4d;
font-size: 15px;
& > p {
    padding-bottom:2%;
 }
 & > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 15px;
    padding:1% 0 1% 0;
 }
`;
const  FileBlock = styled.div `
padding:2%;


margin-bottom:10px;
background-color:#e6e6e6;

& > img {
    margin-right:10px;
 }
`;

const  InternalProfile = styled.div `
width:100%;
display:-webkit-inline-box;
align-items: center;
margin-bottom:10px;
background-color:#e6e6e6;

& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 15px;
    padding:1% 0 1% 0;
 }

`;

const  Mess = styled.div `
display:flex;
width:20%;
`;

const  MessName = styled.div `
margin-left:10px;
width:35%;
`;

const  ProposalsWrapper = styled.div `
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 15px;
    padding:1% 0 1% 0;
    margin:15px;
 }

`;

const  TableProp = styled.table `
width:100%;
`;

const  TableTr = styled.tr`

`;

const  TableTd = styled.td`
padding:5%;
white-space:nowrap;
& > p {
    font-family: Helvetica;
    color: #4d4d4d;
    font-size: 15px;

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
color: #4d4d4d;
font-size: 15px;

`;

const ExtText = styled.p`

font-family: Helvetica;
color: #bbbbbb;
font-weight: bold;
font-size: 15px;
margin-bottom:8px;
margin-top:8px;
`;

export const Profile: FC = () => {




    return (

        <Wrapper>
                <React.Fragment>
                <Top>
                <Icon src="./media/icons/bell.svg" />
                <TopSpan>Message</TopSpan>
                <Icon src="./media/icons/network.svg" />
                <TopSpan>Create a request</TopSpan>
                <Icon src="./media/icons/plus.svg" />
                <TopSpan>Add to cluster</TopSpan>
            </Top>
                <ProfileWrapper>

                <ProfileImg>
                <img src="/media/img_avatar.png" alt=""/>
                <LinkBtn>
                See profile
                </LinkBtn>
                </ProfileImg>
                  <ProfileName>
            <EditText name="textbox1" defaultValue="Humberta Swift"  style={{padding:'2%', width: '100%',}}/>
            <EditText name="textbox2" defaultValue="Clifford Chance" style={{padding:'2%'}}/>
            <EditText name="textbox3" defaultValue="New-york" style={{padding:'2%'}}/>
            <EditText name="textbox4" defaultValue="Partner" style={{padding:'2%'}}/>
            </ProfileName>

            <ProfileEmail>
            <img src="media/icons/bell.png" alt="bell"/>
            <EditText name="textbox5" defaultValue="humbertaswift@gmail.com"  style={{}}/>
            <EditText name="textbox6" defaultValue="+33 42 32 4123 " style={{}}/>
            </ProfileEmail>
            </ProfileWrapper>

            <ExpertiseWrapper>
            <img src="media/icons/bell.png" alt="bell"/>
            <ExtText>
            Expertise
            </ExtText>
            <EditText name="textbox7" defaultValue="Mergers and acquisition"  style={{background:'#b3e6ff', borderRadius:'5px',width:'fit-content', padding:'1%',color:'#0066ff',whiteSpace: 'nowrap'}}/>
            <ExtText>
            Speciates
            </ExtText>
            <BlockInline>
            <EditText name="textbox7" defaultValue="Cross border operation"  style={{background:'#b3e6ff', borderRadius:'5px',width:'fit-content', padding:'1%',marginRight:'10px',color:'#0066ff',whiteSpace: 'nowrap'}}/>
            <EditText name="textbox8" defaultValue="Transaction over 500M"  style={{ background:'#b3e6ff', borderRadius:'5px',width:'fit-content', padding:'1%',color:'#0066ff',whiteSpace: 'nowrap'}}/>
            </BlockInline>
            <ExtText>          
            Admission to practice law
            </ExtText>  
            <BlockInline>
            <EditText name="textbox7" defaultValue="Paris bar association"  style={{ background:'#b3e6ff', borderRadius:'5px',width:'fit-content', padding:'1%',marginRight:'10px',color:'#0066ff',whiteSpace: 'nowrap'}}/>
            <EditText name="textbox8" defaultValue="Tunisian bar association"  style={{ background:'#b3e6ff', borderRadius:'5px',width:'fit-content', padding:'1%',color:'#0066ff', whiteSpace: 'nowrap'}}/>
            </BlockInline>
            <ExtText>  
                        Counties
            </ExtText>  
            <EditText name="textbox8" defaultValue="Tunisia"  style={{background:'#b3e6ff', borderRadius:'5px',width:'fit-content', padding:'1%',color:'#0066ff', whiteSpace: 'nowrap' }}/>

            </ExpertiseWrapper>


            <PanelInformation>
                <h1>Panel Information</h1>
                <ExtText>
                <p>Hourly fee</p>
                </ExtText>
                <p>610E/hour (Negociated)</p>
                <ExtText>
                <p>Terms & conditions</p>
                </ExtText>
                <p>Monthly 10kE retainer - seee with Jeanny Smith</p>
                <FileBlock style={{borderBottom:'1px solid #999'}}>
                <img src="media/icons/bell.png" alt="bell"/>
                Attachment-lorem-ipsum25232.jpg
                </FileBlock>
                <h1>Services & projects</h1>
                <p>Corporate M&A and international acquisitons</p>
                <h1>Internal correspondants</h1>

                <InternalProfile>
                <img src="/media/img_avatar.png" alt="" style={{width:'50px',borderRadius:'50%',margin:'5px'}}/>
                <MessName>
                <h1>Firstname Lastname</h1>
                </MessName>
                <Mess>
                <img src="media/icons/bell.png" alt="bell" style={{marginRight:'5px'}}/><p> Message</p>
                </Mess>
                <Mess>
                <img src="media/icons/bell.png" alt="bell" style={{marginRight:'5px'}}/><p> Profile</p>
                </Mess>
                </InternalProfile>

                <InternalProfile>
                <img src="/media/img_avatar.png" alt="" style={{width:'50px',borderRadius:'50%',margin:'5px'}}/>
                <MessName>
                <p>Firstname Lastname</p>
                </MessName>
                <Mess>
                <img src="media/icons/bell.png" alt="bell" style={{marginRight:'5px'}}/><p> Message</p>
                </Mess>
                <Mess>
                <img src="media/icons/bell.png" alt="bell" style={{marginRight:'5px'}}/><p> Profile</p>
                </Mess>
                </InternalProfile>

            </PanelInformation>

            <ProposalsWrapper>
                <h1>Proposals</h1>
            
<TableProp>

<TableTr style={{borderBottom:'1px solid #999'}}>
<TableTd><p>Name</p></TableTd>
<TableTd><p>Entity</p></TableTd>
<TableTd><p>Location</p></TableTd>
<TableTd><p>Expertise</p></TableTd>
<TableTd><p>Date</p></TableTd>
<TableTd><p>Firm</p></TableTd>
</TableTr>
<TableTr>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
</TableTr>
<TableTr>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
</TableTr>
<TableTr>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
<TableTd><p>Lorem ipsum</p></TableTd>
</TableTr>

</TableProp>
See more Proposals

            </ProposalsWrapper>





                    </React.Fragment>
        </Wrapper>



    );
}

export default Profile;
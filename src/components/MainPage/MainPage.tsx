import React , { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Wrapper } from '../StyledHelpers/Components';
import  {HomePage} from "../HomePage/HomePage";
import { NotFound } from '../NotFound/NotFound';
import { Entities } from '../Entities/Entities';
import { Profile } from '../Profile/Profile';
import  Client  from '../Client/Client';
import { EntitiesList } from '../Entities/EntitiesList';
import { EntitiesMosaic } from '../Entities/EntitiesMosaic';

const Content = styled.div`
  height: 1000px;
  display: flex;

`;


const MainPage: FC = () => {
   
    return (
<Router>
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/entities">
                        <Entities/>
                    </Route>
                    <Route path="/profile">
                      <Profile/>
                    </Route>
                    <Route path="/client">
                      <Client/>
                    </Route>
                    <Route path="/entities/entities_list">
                      <EntitiesList/>
                    </Route>
                    <Route path="/enititites/entities_mosaic">
                      <EntitiesList/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                    
                    
                </Switch>

            </Content>

        </Wrapper>
        </Router>

    );
}

export default MainPage;
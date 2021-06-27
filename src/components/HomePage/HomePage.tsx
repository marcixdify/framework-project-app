import React, { FC } from 'react';
import { Wrapper } from '../StyledHelpers/Components';
import Publications from './Publications';
import Workspaces from '../Workspaces/Workspaces';
import ResumeWork from './ResumeWork';


export const HomePage: FC = () => {

    return (
        <Wrapper>
          <Publications>
          </Publications>
            <Workspaces>
            </Workspaces>
            <ResumeWork>
            </ResumeWork>
        </Wrapper>
    );
}

export default HomePage;
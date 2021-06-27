import React, {Component, FC } from "react";
import styled from "styled-components";
import Carousel from 'react-elastic-carousel'
import WorkspacesIteam from './WorkspacesIteam';




export const Workspaces: FC = () => {
    return (
      <>
      <Carousel isRTL={false} itemsToShow={4} showArrows={true} itemPosition={"START"} pagination={false}>
        <WorkspacesIteam>1</WorkspacesIteam>
        <WorkspacesIteam>2</WorkspacesIteam>
        <WorkspacesIteam>3</WorkspacesIteam>
        <WorkspacesIteam>4</WorkspacesIteam>
        <WorkspacesIteam>5</WorkspacesIteam>
      </Carousel>
      </>
    );
  };
  export default Workspaces;
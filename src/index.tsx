import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from "styled-reset";
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';


import MainPage from './components/MainPage/MainPage'

ReactDOM.render(
    <>
        <Reset/>
        <MainPage/>
    </>,

    document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Profile from './Profile';
import AboutMe from './AboutMe';
import './css/index.css';


import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`　
body{
　　margin: 0;
　　padding: 0;
   overflow: visible;
　}`

ReactDOM.render(
  <React.StrictMode>
    <Globalstyle />
    <Header />
    <Profile></Profile>
    <AboutMe></AboutMe>

  </React.StrictMode>,
  document.getElementById('root')
);


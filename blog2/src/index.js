import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Profile from './Profile';

import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`　
body{
　　margin: 0;
　　padding: 0
　}`

ReactDOM.render(
  <React.StrictMode>
    <Globalstyle />
    <Header />
    <Profile></Profile>

  </React.StrictMode>,
  document.getElementById('root')
);


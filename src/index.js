import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="signin" element={<SignIn />} />
    <Route path="signup" element={<SignUp />} />

    </Routes>
  </BrowserRouter>,
  rootElement
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//    <Route path="add" element={<Add />} />
// <Route path="details" element={<Details />} />
reportWebVitals();

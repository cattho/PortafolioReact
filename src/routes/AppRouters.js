import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';

export default class AppRouters extends Component {
  render() {
    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />       
        </Routes>
        </BrowserRouter>
    )
  }
}

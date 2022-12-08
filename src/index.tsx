import React from 'react';
import "./App.module.scss";
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./index.module.scss"
import './index.module.scss'
import Project from './components/projects/project';
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro'
import Services from './components/Services/services'




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Router>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Intro/>}></Route>
      
      <Route path='/' element={<Services/>} />
      <Route path='Projects' element={<Project />} />
    </Routes>
    <Services/>
  </Router>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
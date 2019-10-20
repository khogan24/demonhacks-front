import React from 'react';
import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import {Row,Col} from "react-bootstrap";
import FormPara from "./FormPara";
function App() {
  return (


    <div>
    <div id = 'wrapper-header'>

      <Header/>
    
    </div>

    <div id = "search-body-form">
    <FormPara/>
    </div>
    </div>
  );
}

export default App;

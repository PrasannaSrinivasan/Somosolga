import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Layout from "./containers/Layout"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;

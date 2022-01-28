import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Main from './components/Main';
import Nav from './components/Nav';
import React from 'react';


function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route exact path="/"  element={
      <Home   />
      } />
      <Route path="/main" element={ <Main   />} />
    </Routes>

    </>
  );
}

export default App;

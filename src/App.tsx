import React from 'react';
import './styles/app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import SignUpPage from './pages/SignUpPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div >
  );
}

export default App;

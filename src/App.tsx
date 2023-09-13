import React from 'react';
import './styles/app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import SignUpPage from './pages/SignUpPage';
import AddressBookPage from "./pages/AddressBookPage";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/addressbook' element={<AddressBookPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div >
  );
}

export default App;

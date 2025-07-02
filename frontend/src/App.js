import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./pages/SignIn"
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import NewTicket from './pages/NewTicket';
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/new-ticket' element={<NewTicket />} />
      </Routes>
    </Router>
  );
}

export default App;

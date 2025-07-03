import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./pages/SignIn"
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import NewTicket from './pages/NewTicket';
import MyTicket from './pages/MyTicket';
import UserProfile from "./pages/UserProfile";
import UserSettings from './pages/UserSettings';
import ForgotPass from './pages/ForgotPass';
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/new-ticket' element={<NewTicket />} />
      <Route path='/my-ticket' element={<MyTicket />} />
      <Route path='/profile' element={<UserProfile />} />
      <Route path='/settings' element={<UserSettings />} />
      <Route path='/forgot-password' element={<ForgotPass />} />
      </Routes>
    </Router>
  );
}

export default App;

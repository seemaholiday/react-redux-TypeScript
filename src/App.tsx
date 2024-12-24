import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './pages/userList';
import Router from './route';
function App() {
  return (
    <div className="App">
      {/* <UserList/> */}
      <Router/>
    </div>
  );
}

export default App;

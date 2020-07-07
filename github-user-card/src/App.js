import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/userCard';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: {}
    }
  }
  
  render(){

    return (
      <div>
        <UserCard />
      </div>
    );
  }
}

export default App;

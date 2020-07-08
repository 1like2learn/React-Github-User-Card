import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/userCard';

const userTestData = {
  username: 'buddy',
  followers: ['tim', 'harold', 'jimmay']
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: {...userTestData}
    }
  }
  
  componentDidMount() {
    axios.get('https://api.github.com/users/1like2learn')
    .then(res => {
      console.log('res', res);
      
    })
    
  }
  
  render(){

    return (
      <div>
        <UserCard userData = {this.state.userData}/>
      </div>
    );
  }
}

export default App;

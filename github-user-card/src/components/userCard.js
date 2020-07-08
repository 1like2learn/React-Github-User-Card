import React from 'react';
import axios from 'axios';
import UserFollowers from './userFollowers';

class UserCard extends React.Component  {
    state = {
        followers: []
    };

    componentDidMount() {
        axios.get("https://api.github.com/users/1like2learn/followers").then(res => {
        //   console.log("Follower res.data",res.data)
          this.setState({
            followers: res.data
          });
        });
      }

    render(){
        return(
            <div>
                {this.state.followers.map( follower => {
                    return (<UserFollowers props={follower} key={follower.login}/>)
                })}
            </div>
        )
    }
}

export default UserCard
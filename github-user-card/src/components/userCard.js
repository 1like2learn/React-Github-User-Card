import React from 'react';
import axios from 'axios';
import UserFollowers from './userFollowers';

class UserCard extends React.Component  {
    state = {
        followers: []
    };

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.userData.login}/followers`).then(res => {
            console.log("Follower res.data",res.data)
            this.setState({
            followers: res.data
          });
        });
      }

    render(){
        // console.log(this.props.userData)
        return(
            <div>
                <h2>{this.props.userData.login}'s Profile</h2>
                <img src = {this.props.userData.avatar_url}/>
                <p>Bio: {this.props.userData.bio}</p>
                <p>Email: {this.props.userData.email}</p>
                <h3>Followers:</h3>
                <ul>
                    {this.state.followers.map( follower => {
                        return (<UserFollowers follower={follower} key={follower.login}/>)
                    })}

                </ul>
            </div>
        )
    }
}

export default UserCard
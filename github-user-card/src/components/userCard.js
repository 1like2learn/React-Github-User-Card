import React from 'react';
import UserFollowers from './userFollowers';

const UserCard = (props) => {
    const { userData } = props
    
    return(
        <div>
            {userData.followers.map( follower => {
                <UserFollowers props={follower}/>
            })}
        </div>
    )
}

export default UserCard
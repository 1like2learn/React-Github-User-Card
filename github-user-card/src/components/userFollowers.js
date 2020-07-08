import React from 'react';

const UserFollowers = (props) => {
    const { follower } = props

    return(
        <li>{follower.login}</li>
    )
}

export default UserFollowers;
import React, { useEffect, useState } from 'react';
import FriendDetail from '../FriendDetail/FriendDetail';

const Friend = () => {
    const[friends, setFriend]= useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <h1>Hello friends how are you?</h1>
            {
                friends.map(friend => <FriendDetail friend={friend} key={friend.id}></FriendDetail>)
            }
        </div>
    );
};

export default Friend;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendInfo = () => {
    const {friendId} = useParams();
    const [friends, setFriends] = useState({});
    
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h1>This is friend info component</h1>
            <h2>{friends.name}</h2>
            <h5>Email: {friends.email}</h5>
            <h5>Phone: {friends.phone}</h5>
            <p><small>City: {friends.address?.city}</small></p>
        </div>
    );
};

export default FriendInfo;
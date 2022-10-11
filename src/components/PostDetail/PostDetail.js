import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [postDetail, setPostDetail] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    }, [postId])
    return (
        <div>
            <h3>this is post detail for: {postId}</h3>
            <h2>{postDetail.title}</h2>
            <p><small>{postDetail.body}</small></p>
        </div>
    );
};

export default PostDetail;
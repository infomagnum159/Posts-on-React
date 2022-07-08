import React, {useEffect, useState} from 'react';
import './ReadMore.css';
import {NavLink} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Header from "../../component/Header/Header";
import Spinner from "../../component/UI/Spinner/Spinner";

const ReadMore = props => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const id = props.match.params.id;
        const getPost = async () => {
            try {
                const postResponse = await axiosApi(`/posts/${id}.json`);
                setPost(postResponse.data);
            } finally {
                setLoading(false);
            }
        }
        getPost().catch(console.error);
    }, [props.match.params.id]);

    const deletePost = async () => {
        const id = props.match.params.id;
        try {
            await axiosApi.delete(`/posts/${id}.json`);
        } finally {
            props.history.replace('/');
        }
    };

    let readMoreBlock = (
        <>
         <h3>{post.title}</h3>
            <p className="date">Created: {post.date}</p>
            <p>{post.description}</p>
            <div className='button-block'>
                <button type="button" className="readMore delete" onClick={deletePost}>DELETE</button>
                <NavLink to={`/post/${props.match.params.id}/edit`} className="readMore">EDIT</NavLink>
            </div>
        </>
    );

    if (loading) {
        readMoreBlock = <Spinner/>
    }

    return(
    <>
        <Header/>
        <div className="readMore-block">
            {readMoreBlock}
        </div>
        </>
    )
};

export default ReadMore;
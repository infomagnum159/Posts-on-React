import React, {useEffect, useState} from 'react';
import PostForm from "../../component/PostForm/PostForm";
import axiosApi from "../../axiosApi";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Spinner from "../../component/UI/Spinner/Spinner";
import './EditPost.css';

const EditPost = props => {
    const [editPost, setEditPost] = useState([]);
    const [loading, setLoading] = useState(true);

    const id = props.match.params.id;

    useEffect(() => {
        const getPost = async () => {
            try {
                const postResponse = await axiosApi(`/posts/${id}.json`);
                setEditPost(postResponse.data);
            } finally {
                setLoading(false);
            }
        }
        getPost().catch(console.error);
    }, [id]);

    const changePost = async event => {
        event.preventDefault();
        const post = {
            ...editPost,
            date: new Date()
        };

        try {
            await axiosApi.put(`/posts/${id}.json`, post);
        } finally {
            props.history.replace('/');
        }
    };

    const onChangePost = event => {
        const name = event.target.name;
        const value = event.target.value;
        setEditPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    let postForm = (
        <PostForm
            title={editPost.title}
            description={editPost.description}
            sendHandler={event => changePost(event)}
            postDataChanged={onChangePost}
        />
    );

    if (loading) {
        postForm = <Spinner/>
    }

    return (
        <>
            <Header/>
            <div className='edit-post'>
                <h3 className="about-title">Edit post</h3>
                {postForm}
            </div>
            <Footer/>
       </>
    );
};

export default EditPost;
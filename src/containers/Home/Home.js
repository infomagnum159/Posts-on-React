import React, {useEffect, useState} from 'react';
import Header from "../../component/Header/Header";
import Post from "../../component/Post/Post";
import './Home.css';
import Footer from "../../component/Footer/Footer";
import axiosApi from "../../axiosApi";
import Spinner from "../../component/UI/Spinner/Spinner";


const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const postsResponse = await axiosApi('/posts.json');
                const postsCopy = Object.keys(postsResponse.data)
                    .map(post => ({
                        ...postsResponse.data[post],
                        id: post
                    }));
                setPosts(postsCopy);
            } finally {
                setLoading(false);
            }
        }
        getPosts().catch(console.error);
    }, []);

    let post = (
        <div className="posts">
            {posts.map(post => (
                <Post
                    data={post.date}
                    title={post.title}
                    key={post.id}
                    id={post.id}
                />
            ))}
        </div>
    );

    if (loading) {
        post = <Spinner/>
    }


    return (
        <>
            <Header/>
            <div className="home">
                {post}
            </div>
            <Footer/>
        </>
    );
};

export default Home;
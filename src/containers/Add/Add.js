import React, {useState} from 'react';
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import PostForm from "../../component/PostForm/PostForm";
import axiosApi from "../../axiosApi";
import Spinner from "../../component/UI/Spinner/Spinner";
import dayjs from "dayjs";
import './Add.css';

const Add = props => {
    const [post, setPost] = useState({
        title: '',
        description: ''
    });

    const [spinner, setSpinner] = useState(false);

    const addHandler = async event => {
        event.preventDefault();
        setSpinner(true);
        const date = dayjs().format('MMMM Do YYYY, h:mm:ss a')
        const posts = {
            ...post,
            date,

        };
        try {
            await axiosApi.post('/posts.json', posts);
        } finally {
            setSpinner(false);
            props.history.push('/');
        }
    };

    const postDataChanged = event => {
        const name = event.target.name;
        const value = event.target.value;

        setPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    let form = (
        <PostForm
        sendHandler={addHandler}
        title={post.title}
        description={post.description}
        postDataChanged={postDataChanged}
    />
    );

    if (spinner) {
        form = <Spinner/>
    }
    return (
        <>
            <Header/>
            <div className="add">
                <h3>Add new post</h3>
                {form}
            </div>
            <Footer/>
        </>
    );
};

export default Add;
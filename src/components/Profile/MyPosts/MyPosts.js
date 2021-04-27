import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>my posts
            <br></br>
            <textarea>

            </textarea>
            <br></br>
            <button>Submit</button>
            <div>New post</div>
            <div className={style.posts}>
                <Post message="hi" likes="3"/>
                <Post message="hello my friend" likes="2"/>
                <Post message="wow amazing" likes="8"/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;

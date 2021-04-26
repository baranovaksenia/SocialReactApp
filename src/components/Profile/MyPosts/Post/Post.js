import React from "react";
import style from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div>my posts <br></br>
            <textarea></textarea><br></br>
                <button>Submit</button>
                <div>New post</div>
                <div className={style.posts}>
                    <div className={style.item}>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
    );
};

export default MyPosts;

import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"/>
            <br></br>
            {props.message}
            <div>
                <span>{props.likes} &#10084;</span>
            </div>
        </div>

    );
};

export default Post;

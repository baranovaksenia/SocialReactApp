import React from "react";
import style from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://image.freepik.com/free-vector/people-eating-healthy-exercising-regularly_53876-64671.jpg"
                    alt=""
                />
            </div>
            <div>Pic + description</div>
            <div>
                My posts
                <div>New post</div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

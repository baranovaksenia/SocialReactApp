import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://image.freepik.com/free-vector/people-eating-healthy-exercising-regularly_53876-64671.jpg"
                    alt=""
                />
            </div>
            <div>Pic + description</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
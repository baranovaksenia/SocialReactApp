import React from "react";
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Name1
                </div>
                <div className={style.dialog}>
                    Name2
                </div>
                <div className={style.dialog}>
                    Name3
                </div>
                <div className={style.dialog}>
                    Name4
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>`How are you</div>
                <div className={style.message}>fine</div>
            </div>
        </div>
    )
}

export default Dialogs;
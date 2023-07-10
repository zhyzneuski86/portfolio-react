import React from 'react';
import style from './Project.module.css';


const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
            <a href="" className={style.button}>Look</a>
            </div>
            {/*<div className={style.container}>*/}
                <div className={style.title}>{props.title}</div>
                <span className={style.description}>
                {props.description}
            </span>
            {/*</div>*/}

        </div>
    );
};

export default Project;
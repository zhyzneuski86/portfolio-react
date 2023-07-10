import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'}/>
                    <Skill title={'CSS'} description={'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'}/>
                    <Skill title={'React'} description={'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
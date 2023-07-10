import React from 'react';
import style from './Nav.module.css';

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Project</a>
            <a href="">Contact</a>

        </div>
    );
};

export default Nav;
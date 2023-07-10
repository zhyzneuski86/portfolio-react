import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.FooterBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Vadim Zhyzneuski</h2>
                <div className={style.socialContainer}>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                </div>
                <span>2023 All rights reserved</span>
            </div>
        </div>

    );
};

export default Footer;
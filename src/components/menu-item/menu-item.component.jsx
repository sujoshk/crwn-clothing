import React from 'react';
import './menu-item.styles.scss';

export const MenuItem = ({title, imageUrl, size }) => (
        <div className={`${size} menu-item`}>

            <div className='background-image' style={{ //this div is going to get the style instead of the containing div
            backgroundImage: `url(${imageUrl})`
            }} 
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className ='subtitle'>SHOP NOW</span>
            </div>
        </div>
);

export default MenuItem;
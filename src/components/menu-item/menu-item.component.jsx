import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

export const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

            <div 
                className='background-image' style={{ //this div is going to get the style instead of the containing div
                backgroundImage: `url(${imageUrl})`
                }} 
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className ='subtitle'>SHOP NOW</span>
            </div>
        </div>
);

export default withRouter(MenuItem);
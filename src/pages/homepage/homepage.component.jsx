import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

//functional component because no lifecycle methods are needed at this point
// also no state needed
const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <Directory />
        </div>
    </div>
);

export default HomePage;
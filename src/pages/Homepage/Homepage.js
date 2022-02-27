import React from 'react';
//STYLES
import './Homepage.scss';
//COMPONENTS
import Directory from '../../components/directory/Directory';

const Homepage = () => {
    return(
        <div className='homepage'>
            <Directory />
        </div>
    )
}

export default Homepage;
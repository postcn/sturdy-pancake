import React from 'react';

import styles from '../css/home.scss';

class CthulhuHome extends React.Component {

    render() {
        const imageSource = require('../../shared/images/cute_cthulhu.png');
        return(
            <div className="homeImage" >
                <img src={imageSource}/>
            </div>
        );
    }
}

export default CthulhuHome;
import React from 'react';

import styles from '../css/home.scss';

import imageSource from '../../shared/images/cute_cthulhu.png';

class CthulhuHome extends React.Component {

    render() {
        return(
            <div>
                <image className="homeImage" src={imageSource}/>
            </div>
        );
    }
}

export default CthulhuHome;
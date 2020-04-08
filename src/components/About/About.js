import React from 'react';

import classes from './About.module.css';

const about = (props) => {
    return (
        <div className={classes.Container}>
            <h1>Github Link for this project</h1>
            <p></p>
            <a href="https://github.com/wzhang66/e-store"><h1>e-store Github</h1></a>
            <p></p>
            <h2>Created by Weiwei Zhang</h2>
        </div>
    );
}

export default about;
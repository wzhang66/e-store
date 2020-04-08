import React from 'react';
import {Link} from 'react-router-dom';

import RaceCar from '../../assets/racingCar.jpg';
import classes from './Home.module.css';

const home = (props) => {
  return(
    <div className={classes.Container}>
      <img src={RaceCar} alt="home" className={classes.Img} />
      <div className={classes.Overlay} />
      <div className={classes.Headding}>
        <h1 className={classes.Title}>
          Right choice of tire for speed
        </h1>
        <Link to ="/show">
          <button className={classes.Btn}>shop now</button>
        </Link>
      </div>
    </div>
  );
}

export default home;

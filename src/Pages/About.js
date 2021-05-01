import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from './ImageSection';

const About = () => {
    return (
        <div className="About">
            <Tittle tittle={'About Me'} span={'About Me'}/>
            <ImageSection/>
        </div>
    );
};

export default About;
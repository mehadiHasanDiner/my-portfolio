import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

const About = () => {
    return (
        <div className="About">
            <Tittle tittle={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <Tittle tittle={'My Skills'} span={'My Skills'}/>
            <SkillsSection skill= {'javaScript'} progress={'75%'}/>
        </div>
    );
};

export default About;
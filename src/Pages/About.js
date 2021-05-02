import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

const About = () => {
    return (
        <div className="About">
            <Tittle tittle={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle tittle={'My Skills'} span={'My Skills'} />
            <div className="skills-container">
                <SkillsSection skill={'JavaScript'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'HTML'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'CSS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Node JS'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React JS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Redux'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Deployment'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'Web Design'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Bootstrap'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'Wordpress'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'PHP'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'MySQL'} progress={'70%'} width={'70%'} />

            </div>
        </div>
    );
};

export default About;
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Home = () => {
    return (
        <div className="Home">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> ...Web Developer</span>
                </h1>
                <p className="home-sub-text">
                As a Front-end Web developer I have knowledge to building Web Applications and Web App by using React JS, Node JS, GraphQL HTML5, CSS3 and various web technologies. <br/><br/>Vanilla JavaScript and JavaScript libraries (React JS, Node JS, jQuery), HTML5, CSS3, WordPress, Front End Development and Leadership.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/mehadi-hasan-803012211/" rel="noreferrer" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon linked"/>
                    </a>
                    <a href="https://github.com/mehadiHasanDiner" rel="noreferrer" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon git"/>
                    </a>
                    <a href = "https://drive.google.com/file/d/1zUsKrY1fybQMND-pCvHCE1rFRqTF0iP4/view?usp=sharing" rel="noreferrer" target="_blank"  className="icon-holder">
                        <FontAwesomeIcon icon={faIdBadge} className="icon resume"/>
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Home;
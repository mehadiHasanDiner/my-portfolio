import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> ... Developer</span>
                </h1>
                <p className="home-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt repellendus fugiat corporis maiores delectus atque, nulla aut pariatur quo iusto, animi accusamus, facilis harum dolorum! Recusandae debitis libero itaque eum sed dicta corrupti ullam? Magni maiores debitis distinctio dolorem?
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon linked"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon git"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGlobe} className="icon web"/>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Home;
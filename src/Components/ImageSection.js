import React from 'react';
import about from '../images/image.jpg'

const ImageSection = () => {
    return (
        <div className="imageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am  <span> ..... Mehadi Hasan </span> </h4>
                <p className="about-text">Throughout my career, I’ve had the great fortune to work on some truly inspiring projects, while meeting many influential and creative individuals along the way. I believe in working together to create a whole that is greater than the sum of its parts. For more information about my experience, portfolio or how we can collaborate on an upcoming project, get in touch today.</p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Address</p>
                        <p>Language</p>
                    </div>
                    <div className="right-section">
                        <p> : Md. Mehadi Hasan</p>
                        <p> : 32</p>
                        <p> : Bangladeshi</p>
                        <p> : House # 696/1, Morkun,Tongi, Gazipur-1710</p>
                        <p> : Bangla, English, Hindi, Urdo</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1zUsKrY1fybQMND-pCvHCE1rFRqTF0iP4/view?usp=sharing" target="_blank"><button className="btn">Download</button></a>
            </div>
        </div>
    );
};

export default ImageSection;
import React from 'react';
import about from '../images/image.jpg'

const ImageSection = () => {
    return (
        <div className="imageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am  <span> ..... Mehadi </span> </h4>
                <p className="about-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, harum ea! Ipsam ducimus magnam aliquid sapiente beatae officiis, magni, nam repellendus quaerat, corporis et! Aliquid dignissimos cupiditate corrupti consequuntur dicta.</p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Language</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p> : Md. Mehadi Hasan</p>
                        <p> : 32</p>
                        <p> : Bangladeshi</p>
                        <p> : Bangla, English, Hindi, Urdo</p>
                        <p> : Holding # 696/1, Morkun Memberpara Road,Tongi, Gazipur-1710</p>
                        <p> : Bangladeshi</p>
                    </div>
                </div>
                <button className="btn">Download</button>
            </div>
        </div>
    );
};

export default ImageSection;
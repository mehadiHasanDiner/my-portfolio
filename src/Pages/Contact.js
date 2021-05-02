import React from 'react';


const Contact = () => {
  
    return (
        <section className="contact-form">
        <div className="contact-section">
            <h2>Contact Me</h2>
            <form action="" style={{fontSize: '18px'}} >
                <label for="name">Name: </label>
                <input type="text" placeholder="Your name..." required />
                <label for="email">Email Address: </label>
                <input type="email" placeholder="Your email..." required/>
                <label for="name">Subject: </label>
                <input type="text" placeholder="Subject..." required />
                <label for="text">Message:</label>
                <textarea name="message" id="message" cols="30" rows="6" required></textarea>

                <input type="submit" value="Submit"/>
            </form>
        </div>

    </section>
    );
};

export default Contact;
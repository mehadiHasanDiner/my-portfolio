import React from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_tlr3dxr', e.target, 'user_mnLOy6Q84FzZLB6dAAiON')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            alert("You sent your message successfully")
    }

    return (
        <section className="contact-form">
            <div className="contact-section">
                <h2>Contact Me</h2>
                <form onSubmit={sendEmail} style={{ fontSize: '18px' }} >
                    <label for="name">Name: </label>
                    <input type="text" name="name" placeholder="Your name..." required />
                    <label for="email">Email Address: </label>
                    <input type="email" name="email" placeholder="Your email..." required />
                    <label for="name">Subject: </label>
                    <input type="text" name="subject" placeholder="Subject..." required />
                    <label for="text">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="6" required></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>

        </section>
    );
};

export default Contact;
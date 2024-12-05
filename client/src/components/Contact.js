import React, { useState } from 'react';
import '../styles/Contact.css'; 
import instagramLogo from '../assets/iglogo.png'; 
import linkedInLogo from '../assets/lilogo.jpg'; 
import backgroundPic from '../assets/contact.jpg'; 

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://tdsweb-be.onrender.com/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            alert('Thank you for your message. We will get back to you shortly!');
            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                message: ''
            }); 
        } else {
            alert('Failed to send your message. Please try again.');
        }
    };

    return (
        <div className="contact-container" style={{ backgroundImage: `url(${backgroundPic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1>Contact Us</h1>
            <p>Curious about something or want to pitch work? Try out the form below!</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" name="phone" placeholder="Phone (optional)" value={formData.phone} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
                <button type="submit">Send</button>
            </form>
            <div className="social-media-links">
                <p>Or directly message on social media</p>
                <a href="https://www.instagram.com/the.tds.podcast/"><img src={instagramLogo} alt="Instagram" /></a>
                <a href="https://www.linkedin.com/company/tech-detonator-show/"><img src={linkedInLogo} alt="LinkedIn" /></a>
            </div>
        </div>
    );
};

export default Contact;

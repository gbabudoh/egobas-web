import React, { useState } from 'react';
import './Contact.css';
import Footer from '../../components/Footer'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm('service_jv8xvia', 'template_1dvbie3', e.target, 'NRiyqoGFLC8qBlJ_R');
      console.log(response.text);

      // Show the confirmation popup
      setShowConfirmation(true);

      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Email sending error:', error);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {showConfirmation && (
        <div className="confirmation-message">
          Email sent successfully! Thank you for contacting us.
        </div>
      )}

        <Footer/>

    </div>
  );
};

export default Contact;

import React from 'react';
import './About.css';
import Footer from '../../components/Footer'
import card1Image from '../../assets/images/card1.jpg';
import card2Image from '../../assets/images/card2.jpg';
import card3Image from '../../assets/images/card3.jpg';
import bannerImage from '../../assets/images/banner2.jpg';
import ceoImage from '../../assets/images/ceo.jpg'



const About = () => {
    return (

     
        <div className="about-container">
            <div className="image-banner">
                <img src={bannerImage} alt="Banner" />
            </div>

            <h1 className='h1-about'>The Reactive Business Consulting Firm</h1>
            <p className='corprate-statement'>Egobas Limited is a leading business consulting firm that is committed to driving innovative growth and ideating to solve complex issues. Our focus is on discovering new solutions, products, and strategies to collectively enhance and improve growth, productivity, opportunities, and sustainable improvement. We achieve this through process-driven strategies, ideation lead discoveries through complex models, and navigating through research findings into better market opportunities for growth penetration and access. Our approach is ethical and sustainably reactive, and we are dedicated to finding better working patterns to reduce costs and minimize the impact on the environment. At Egobas Limited, we are passionate about helping our clients achieve their goals and thrive in today's competitive business landscape.</p>

            <div className="cards-container">
                <div className="card">
                    <img src={card1Image} alt="Card 1" />
                    <h1 className='h1about'>Process</h1>
                    <p>Process consulting that works across all industries without borders</p>
                </div>

                <div className="card">
                    <img src={card2Image} alt="Card 2" />
                    <h1 className='h1about'>Ideation</h1>
                    <p>Ideating with purpose to realize clients' expectations with validated results</p>
                </div>

                <div className="card">
                    <img src={card3Image} alt="Card 3" />
                    <h1 className='h1about'>Markets</h1>
                    <p>We navigate markets to find value, enabling client market penetration.</p>
                </div>
            </div>

            <div className="ceo-message">
                <img src={ceoImage} alt="CEO" />
                <h1 className='h1about'>CEO MESSAGE</h1>
                <p className='pceo'>Dear valued clients, your expectations guide our mission. We're dedicated to delivering unparalleled value and fostering your growth and achievements. As partners, we envision a future built on innovation and trust. Your success is our priority, with gratitude.
                <br/>
                <br/>
                <h3 className='h3about'>Godwin Babudoh</h3>
            </p>
            </div>

            <div>
                <Footer/>
            </div>

          


        </div>     


     

    );
}

export default About;
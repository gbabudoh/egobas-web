import React from 'react';
import './Process.css';
import Footer from '../Footer'
import bannerImage from '../../assets/images/ideation2.jpg'

const Process = () => {
  return (

    <>
    <div className="container">
      <div className="image-container">
        <img src={bannerImage} alt="Banner" />
        <h1 className='h1-title-header'>IDEATION CONSULTING</h1>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <h2 className='process-h1'>Problem-Solving Ideation</h2>
          <p className='process-p'>Problem-Solving ideation that offers targeted solutions across various industries. We employ creative thinking and data-driven analysis to identify your business challenges and devise innovative solutions. Our expert consultants collaborate with you to transform obstacles into opportunities, driving growth and operational excellence. Partner with us for actionable insights and sustainable success.</p>
        </div>
        <div className="vertical-line"></div>
        <div className="grid-item">
          <h2 className='process-h1'>Derivative</h2>
          <p className='process-p'>Derivative Ideation services, helps in generating innovative business strategies across diverse industries. Leveraging market trends and data analytics, we help you adapt existing solutions to create new revenue streams and competitive advantages. Our expert consultants work with you to refine and implement these derivative ideas, ensuring sustainable growth and success.</p>
        </div>
        <div className="vertical-line"></div>
        <div className="grid-item">
          <h2 className='process-h1'>Analogy</h2>
          <p className='process-p'>Analogy Ideation designed to help businesses across industries innovate by drawing parallels from other sectors. We analyse existing solutions in different markets to inspire new, tailored strategies for your business. Our expert consultants collaborate with you to adapt and implement these insights, driving unique competitive advantages and sustainable growth.</p>
        </div>
        <div className="vertical-line"></div>
        <div className="grid-item">
          <h2 className='process-h1'>Random</h2>
          <p className='process-p'>Random Ideation processes that offers businesses across industries a fresh perspective on problem-solving and innovation. Utilising unconventional thinking and brainstorming techniques, we generate unexpected yet impactful solutions. Our expert consultants work closely with you to refine and implement these novel ideas, fostering creativity and driving sustainable growth.</p>
        </div>
        <div className="vertical-line"></div>
        <div className="grid-item">
          <h2 className='process-h1'>Prototyping</h2>
          <p className='process-p'>Prototyping Consulting services, designed to bring your business ideas to life across various industries. We offer rapid prototyping techniques to test feasibility, functionality, and market fit. Our expert consultants collaborate with you to iterate and refine your prototypes, accelerating time-to-market and ensuring sustainable success.</p>
        </div>
        <div className="vertical-line"></div>
        <div className="grid-item">
          <h2 className='process-h1'>Brainstorming</h2>
          <p className='process-p'>Offer brainstorming solutions that help to ignite innovation across diverse industries. We facilitate focused brainstorming sessions to generate actionable ideas tailored to your business challenges. Our expert consultants guide the ideation process, ensuring a collaborative environment that fosters creativity and leads to sustainable growth and competitive advantage.</p>
        </div>
      </div>
    </div>

    <div>
    <Footer/>
    </div>

    </>
  );
};

export default Process;

import React from 'react';
import './Process.css';
import Footer from '../Footer'
import bannerImage from '../../assets/images/markets2.jpg'

const Process = () => {
  return (

    <>
    <div className="container">
      <div className="image-container">
        <img src={bannerImage} alt="Banner" />
        <h1 className='h1-title-header'>MARKETS</h1>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <h2 className='process-h1'>Market Research and Feasibility Analysis</h2>
          <p className='process-p'>Our Market Research and Feasibility Analysis services provide businesses with critical insights into target markets, consumer behaviour, and competition. Utilising SWOT analysis, we evaluate your potential for market entry, helping you make informed decisions for sustainable growth and competitive advantage.</p>
        </div>
        <div className="vertical-line"></div>
        <div className="grid-item">
          <h2 className='process-h1'>Strategic Planning and Decision Making</h2>
          <p className='process-p'>Our Strategic Planning and Decision-Making services help you craft a comprehensive market entry strategy. From selecting the entry mode to defining your business model and pricing, we guide you through each critical decision, culminating in a formalised business plan for assured success.</p>
        </div>
        <div className="vertical-line"></div>
        <div className="grid-item">
          <h2 className='process-h1'>Implementation and Launch</h2>
          <p className='process-p'>Our Implementation and Launch services take your market entry from plan to action. We assist in setting up operations, establishing distribution channels, and initiating marketing efforts. Additionally, we ensure compliance with regulatory and legal requirements, setting the stage for your successful market debut.</p>
        </div>
        <div className="vertical-line"></div>
        <div className="grid-item">
          <h2 className='process-h1'>Monitoring and Optimization</h2>
          <p className='process-p'>Our Monitoring and Optimization services provide continuous oversight post-market entry. We track Key Performance Indicators (KPIs) and use real-time data to refine strategies, ensuring your business adapts and thrives in its new market environment.</p>
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
import React from 'react';
import './Services.css';
import Footer from '../Footer'
import imageProcess from '../../assets/images/process.jpg'
import imageIdeation from '../../assets/images/ideation.jpg'
import imageMarkets from '../../assets/images/markets.jpg'
import servicesBanner from '../../assets/images/services.jpg'

const Services = () => {
  
  return (

    <>

    <div className="services-container">
      <img src={servicesBanner} alt="Banner" className="banner-image" />

      <h1 className="services-page-title">OUR SERVICES</h1>  

      <div className="service-section">

        <div className="service-item">
          <img src={imageProcess} alt="" className="service-image" />
          <h1 className="service-title">Process Consulting</h1>
          <p className="service-description">Our business consulting services optimize your operations for increased profitability. We identify workflow bottlenecks, implement strategic solutions, and offer ongoing monitoring for continual improvement, unlocking your business's growth potential.</p><a href="/process" className="read-more-link">Read More</a>
        </div>
                
        <div className="service-item">
          <img src={imageIdeation} alt="" className="service-image" />
          <h2 className="service-title">Ideation Consulting</h2>
          <p className="service-description">Our ideation consulting empowers businesses with innovative ideas and product strategies. Through market analysis and design thinking, we accelerate product launches and enhance your competitive edge, ensuring market success.</p>
          <a href="/ideation" className="read-more-link">Read More</a>
        </div>
        
        <div className="service-item">
          <img src={imageMarkets} alt="Service 3" className="service-image" />
          <h2 className="service-title">Markets Access Consulting</h2>
          <p className="service-description">Our market access services guide businesses in tapping into new markets for global growth. We offer expert advice on pricing, health economics, and payer engagement, crafting customised market entry processes and strategies to help you grow.</p>
          <a href="/markets" className="read-more-link">Read More</a>
        </div>

      </div>
    </div>

    <Footer/>

    </>

  );
};

export default Services;
import React from 'react';
import './Culture.css';
import Footer from '../../components/Footer'
import bannerImage from '../../assets/images/culture.jpg'

const Culture = () => {
  return (
    <div className="leadership-container">
      <img src={bannerImage} alt="" className="banner-image" />
      <h1 className="title-header-culture">Culture</h1>
      <br/>
      <div>
      <h1 className='h1-head-comp'>Nurturing Business Culture: Catalyst for Multi-Sector Success</h1>
      </div>
      <p className="info-text-culture">
      A robust business culture resonates universally, vitalizing government agencies, private sectors, charities, and specialist organisations. Fostering shared values, open communication, and adaptability ignites productivity and fuels growth. By cultivating transparency and empowering employees, a vibrant culture fuels innovation, garners trust, and propels collective achievements across diverse sectors, echoing prosperity and progress.
      <br/>
      <br/>
      Culture cultivates productivity, talent retention, innovation in the private sector; efficiency, accountability in the public sector; alignment, adaptability in corporations; mission fulfillment, donor trust in charities; ethical governance, public confidence in government organizations, fostering success throughout.
      </p>
      <div>
    </div>

      <div>
        <Footer/>
      </div>

  </div>
  );
};

export default Culture;

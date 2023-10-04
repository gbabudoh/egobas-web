import React from 'react';
import './Compliance.css';
import Footer from '../../components/Footer'
import bannerImage from '../../assets/images/compliance.jpg'

const Compliance = () => {
  return (
    <div className="compliance-container">
      <img src={bannerImage} alt="" className="banner-image" />
      <h1 className="title-header-compliance">Compliance and Ethical Behaviour</h1>
      <br/>
      <div>
      <h1 className='h1-head-comp'>Upholding Integrity: Compliance and Ethical Behaviour in Diverse Sectors</h1>
      </div>
      <p className="info-text-compliance">
      Compliance and ethical behavior form the cornerstone for government agencies, private and public sectors, charities, and specialist organisations. By adhering to regulations and fostering a culture of integrity, they not only ensure legality and accountability but also bolster stakeholder trust. This foundation, conducive to sustainable growth, empowers entities to navigate global economic challenges while fostering a reputation for ethical excellence.
      <br/>
      <br/>
      Compliance and ethical behavior engender trust, mitigate risks, and enhance reputation across private sector, public sector, corporations, government, charities, and government organisations. Upholding integrity fosters sustainable growth, stakeholder confidence, and competitive advantage, fortifying resilience and fostering positive relationships in the complex global business landscape.
      </p>
      <div>
    </div>

      <div>
        <Footer/>
      </div>

  </div>
  );
};

export default Compliance;

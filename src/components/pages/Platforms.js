import React from 'react';
import './Platforms.css';
import Footer from '../../components/Footer'
import bannerImage from '../../assets/images/platforms.jpg'

const Platforms = () => {
  return (
    <div className="platforms-container">
      <img src={bannerImage} alt="" className="banner-image" />
      <h1 className="title-header-platforms">Platforms</h1>
      <br/>
      <div>
      <h1 className='h1-head-comp'>Harnessing Platforms: Catalyst for Multisector Advancement</h1>
      </div>
      <p className="info-text-platforms">
      Platforms hold significance for government agencies, private and public sectors, charities, and specialist organisations. Integrating diverse functionalities fosters efficiency, innovation, and collaboration, driving profit and growth amid global competition. Seamlessly connecting stakeholders, platforms optimise processes, amplify reach, and enhance offerings, propelling these entities towards sustainable success in the ever-evolving global economic landscape.
      <br/>
      <br/>
      Platform integration yields synchronized operations, enhanced collaboration, and expanded engagement across private sector, public sector, corporations, government, charities, and government organisations. By optimising processes, amplifying connectivity, and enabling data-driven decisions, integrated platforms elevate efficiency, innovation, and competitive advantage, driving sustained growth in today's intricate business environment.
      </p>
      <div>

        <div>
          <Footer/>
        </div>

    </div>
  </div>
  );
};

export default Platforms;

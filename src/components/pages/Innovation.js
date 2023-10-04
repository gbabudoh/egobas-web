import React from 'react';
import './Innovation.css';
import Footer from '../../components/Footer'
import bannerImage from '../../assets/images/innovation.jpg'

const Platforms = () => {
  return (
    <div className="innovation-container">
      <img src={bannerImage} alt="" className="banner-image" />
      <h1 className="title-header-innovation">Innovation</h1>
      <br/>
      <div>
      <h1 className='h1-head-comp'>Fueling Progress: Innovation's Pivotal Role Across Sectors</h1>
      </div>
      <p className="info-text-innovation">
      Innovation stands as a bedrock for government agencies, private and public sectors, charities, and specialist organisations. Spearheading development, it tackles challenges, births solutions, and propels profit, growth, and competitiveness on the global stage. By fostering creative problem-solving and embracing novel approaches, these entities seize opportunities, navigate complexities, and shape a prosperous future in the ever-evolving global economic landscape.
      <br/>
      <br/>
      Innovation catalyses competitive advantage, market differentiation, and value creation for the private sector, public sector, corporations, government, charities, and government organisations. By driving efficient processes, novel solutions, and strategic adaptations, it fuels growth, enhances stakeholder value, and ensures sustained relevance amid dynamic business landscapes.
      </p>
      <div>
    </div>

      <div>
        <Footer/>
      </div>

  </div>
  );
};

export default Platforms;

import React from 'react';
import './Insight.css'; 
import Footer from '../Footer'
import insightImage from '../../assets/images/insight1.jpg'
import insightImage2 from '../../assets/images/insight2.jpg'
import insightImage3 from '../../assets/images/insight3.jpg'
import insightImage4 from '../../assets/images/insight4.jpg'
import insightImage5 from '../../assets/images/insight5.jpg'
import insightImage6 from '../../assets/images/insight6.jpg'
import insightImage7 from '../../assets/images/insight7.jpg'
import insightImage8 from '../../assets/images/insight8.jpg'
import insightImage9 from '../../assets/images/insight9.jpg'


function Insight() {
  return (

    <>
      
    <div>
        <h1 className='insigt-heading'>Insight</h1>
    </div>

    <div className="insight-page">
      

      <div className="grid-container">
        <div className="grid-item">
            <img src={insightImage} alt="Description 1" />
            <h2>Productivity Habits</h2>
            <p>Productivity habits are essential for managing oneself and practicing good habits.</p>
            <a href="/productivity" className="read-more-link">Read More</a>
        </div>
        {/* ... Repeat for all the 12 grids ... */}
        <div className="grid-item">
            <img src={insightImage2} alt="Description 12" />
            <h2>Collaboration and leadership</h2>
            <p>Leadership empowers teams, driving growth through vision and guidance.</p>
            <a href="/leadership" className="read-more-link">Read More</a>
        </div>
        <div className="grid-item">
            <img src={insightImage3} alt="Description 12" />
            <h2>Value creation</h2>
            <p>Value creation, innovating to generate meaningful impact and benefits.</p>
            <a href="/value" className="read-more-link">Read More</a>
        </div>
        <div className="grid-item">
            <img src={insightImage4} alt="Description 12" />
            <h2>Operating processes</h2>
            <p>Operational processes, streamlined methods driving efficiency, productivity, and organisational success.</p>
            <a href="/operating" className="read-more-link">Read More</a>
        </div>
        <div className="grid-item">
            <img src={insightImage5} alt="Description 12" />
            <h2>Platforms</h2>
            <p>Platforms amplify growth, connectivity, and innovation for organisations' success.</p>
            <a href="/platforms" className="read-more-link">Read More</a>
        </div>
        <div className="grid-item">
            <img src={insightImage6} alt="Description 12" />
            <h2>Innovation</h2>
            <p>Innovation fuels progress, competitiveness, and transformative success for businesses.</p>
            <a href="/innovation" className="read-more-link">Read More</a>
        </div>
        <div className="grid-item">
            <img src={insightImage7} alt="Description 12" />
            <h2>Company culture</h2>
            <p>Culture shapes values, teamwork, and drives organisational growth and performance.</p>
            <a href="/culture" className="read-more-link">Read More</a>
        </div>
        <div className="grid-item">
            <img src={insightImage8} alt="Description 12" />
            <h2>Compliance and ethical behavior</h2>
            <p>Compliance, ethics uphold business, reduce impact for sustainability and growth.</p>
            <a href="/compliance" className="read-more-link">Read More</a>
        </div>
        <div className="grid-item">
            <img src={insightImage9} alt="Description 12" />
            <h2>Effective Communication</h2>
            <p>Effective communication fosters collaboration, productivity, and organisational success.</p>
            <a href="/communication" className="read-more-link">Read More</a>
        </div>
      </div>
    </div>

    <Footer/>
    </>

  );
}

export default Insight;

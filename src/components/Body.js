import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';
import bannerImage from '../assets/images/banner4.jpg';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

const Body = () => {
  return (
    <div className="container">
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
      </div>

      {/* Text */}
      <div className="text-content">
        <h1 className='headliner'>Understanding your business to help you succeed</h1>
        <p className='headliner2'>Through sustainable business relationship and a commitment to value.</p>
      </div>

      {/* Three Image Cards */}
      <div className="card-container">
        <Link to="/process" className="card">
          <img src={image1} alt="Card 1" />
          <h1 className='h1class'>Process</h1>
          <p className='t1'>Optimise your business with process consulting. Streamline workflows, reduce costs, and enhance productivity with our tailored solutions.</p>
        </Link>
        <Link to="/ideation" className="card">
          <img src={image2} alt="Card 2" />
          <h1 className='h1class'>Ideation</h1>
          <p className='t1'>Igniting creativity and driving success through ideation. Collaborate with innovative thinkers to co-create custom solutions that deliver results.</p>
        </Link>
        <Link to="/markets" className="card">
          <img src={image3} alt="Card 3" />
          <h1 className='h1class'>Markets</h1>
          <p className='t1'>Strategic market entry consulting to help your business thrive in new markets, and unlocking growth and seizing opportunities.</p>
        </Link>
      </div>
    </div>
  );
}

export default Body;

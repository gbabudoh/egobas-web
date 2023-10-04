import React from 'react';
import './Subsidiaries.css';
import Footer from '../Footer';
import logo1 from '../../assets/images/buy-from-africa.png';
import logo2 from '../../assets/images/grassland.png';
import logo3 from '../../assets/images/lobbs.png';
import logo4 from '../../assets/images/bvado.png';
import logo5 from '../../assets/images/yubbox.png';
import logo6 from '../../assets/images/morelife.png';
import logo7 from '../../assets/images/telemoz.png';
import logo8 from '../../assets/images/afconomy.png';
import logo9 from '../../assets/images/ranglow.png';


const Subsidiaries = () => {
  return (

  <>

    <div>
      <h1 className='subsidiaries-header-h1'>Egobas Limited Subsidiaries</h1>
    </div>

    <div className="subsidiaries-container">
      <div className="subsidiary-item">
        <img src={logo1} alt="Logo for Subsidiary 1" className="subsidiary-logo" />
        <h2 className="subsidiary-title">Buy from Africa</h2>
        <p className="subsidiary-description">The Gateway to Africa's commerce, capturing the informal sector in Africa.</p>
      </div>
      <div className="subsidiary-item">
        <img src={logo2} alt="Logo for Subsidiary 1" className="subsidiary-logo" />
        <h2 className="subsidiary-title">Grassland</h2>
        <p className="subsidiary-description">A sports brand that designs and manufacture sports shoes and apparel.</p>
      </div>
      <div className="subsidiary-item">
        <img src={logo3} alt="Logo for Subsidiary 1" className="subsidiary-logo" />
        <h2 className="subsidiary-title">Lobbs</h2>
        <p className="subsidiary-description">Organic pressed fruit juice promoting healthy living.</p>
      </div>
      <div className="subsidiary-item">
        <img src={logo4} alt="Logo for Subsidiary 1" className="subsidiary-logo" />
        <h2 className="subsidiary-title">Bvado</h2>
        <p className="subsidiary-description">Ecommerce platform selling household and home decor products.</p>
      </div>
      <div className="subsidiary-item">
        <img src={logo5} alt="Logo for Subsidiary 1" className="subsidiary-logo" />
        <h2 className="subsidiary-title">yubbox</h2>
        <p className="subsidiary-description">A video platform to promote your product, services and content.</p>
      </div>
      <div className="subsidiary-item">
        <img src={logo6} alt="Logo for Subsidiary 1" className="subsidiary-logo" />
        <h2 className="subsidiary-title">MoreLife Healthcare</h2>
        <p className="subsidiary-description">Healthcare bank to help you save and gain access to affordable healthcare.</p>
      </div>
      <div className="subsidiary-item">
        <img src={logo7} alt="Logo for Subsidiary 1" className="subsidiary-logo" />
        <h2 className="subsidiary-title">Telemoz</h2>
        <p className="subsidiary-description">The platform to hire a digital marketing experts.</p>
      </div>
      <div className="subsidiary-item">
        <img src={logo8} alt="Logo for Subsidiary 1" className="subsidiary-logo" />
        <h2 className="subsidiary-title">Afconomy</h2>
        <p className="subsidiary-description">The African financial information platform.</p>
      </div>
      <div className="subsidiary-item">
        <img src={logo9} alt="Logo for Subsidiary 1" className="subsidiary-logo" />
        <h2 className="subsidiary-title">Ranglow</h2>
        <p className="subsidiary-description">Ranglow, future's Green Energy Solution for Homes and Businesses.</p>
      </div>

   

      {/* Add more subsidiary items as needed */}
    </div>

    <div>
      <Footer/>
    </div>

  </>


  );
};

export default Subsidiaries;

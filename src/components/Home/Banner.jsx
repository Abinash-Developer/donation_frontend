import CountUp from 'react-countup';
const Banner = () => {
  return (
    <>
      <section className="banner-sec py_100">
        <div className="container">
          <div className="banner-sec-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-left-content">
                  <h1>
                    <span className="grn">Fundrasing</span> for the people and
                    causes you care.
                  </h1>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="banner-right-content">
                  <p>
                    Take Advatage of This Amazing Exclusive Offer Don’t Miss
                    This Opportunity For Your Non Profit.
                  </p>
                  <div className="cta-btn">
                    <a className="cta-grn" href="#">
                      Donate Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-btm-content">
            <div className="banner-img">
              <img src="img/bann-img.png" className="img-fluid" />
            </div>
            <div className="banner-counter">
              <div className="wrapper">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="counter col_fourth">
                      <div className="counter-text">
                        <h2 className="grn currecy-rs" />
                          <CountUp start={549} end={1700} duration={2.75} className='timer grn count-title count-number counter-donation same_line'/>
                          <h2 className="grn currnt-sgn same_line">+</h2>
                      </div>
                      <h3 className="count-text">Donation Received</h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter col_fourth">
                      <div className="counter-text">
                        <h2 className="grn currecy-rs same_line">₹</h2>
                        <CountUp start={0} end={49} duration={2.75} className='timer grn count-title count-number counter-donation same_line'/>
                        
                        <h2 className="grn currnt-sgn same_line">M</h2>
                      </div>
                      <h3 className="count-text">Money Donated</h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter col_fourth">
                      <div className="counter-text">
                        <h2 className="grn currecy-rs" />
                        <CountUp start={0} end={34} duration={2.75} className='timer grn count-title count-number counter-donation same_line'/>
                        <h2 className="grn currnt-sgn same_line">+</h2>
                      </div>
                      <h3 className="count-text">Active Compaigns</h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter col_fourth">
                      <div className="counter-text">
                        <h2 className="grn currecy-rs same_line">₹</h2>
                        <CountUp start={0} end={34} duration={2.75} className='timer grn count-title count-number counter-donation same_line'/>
                        <h2 className="grn currnt-sgn same_line">M</h2>
                      </div>
                      <h3 className="count-text">Charity in last year</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;

import React from "react";

const Features = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Checkout Our <span>Clothing</span> <br /> Categories Below.
          </h2>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single text-center">
              <div className="service-one__inner">
                <i className="service-one__icon dimon-icon-laptop"></i>
                <h3>
                  <a href="#none">
                    Bottoms
                  </a>
                </h3>
                <p>
                  Explore a variety <br /> of brands, <br /> styles, 
                  and sizes!
                </p>
                <a href="#none" className="service-one__link">
                  <i className="dimon-icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single text-center">
              <div className="service-one__inner">
                <i className="service-one__icon dimon-icon-presentation"></i>
                <h3>
                  <a href="#none">
                    Tops
                  </a>
                </h3>
                <p>
                  Find quality <br />in size, <br /> style, and
                  price.
                </p>
                <a href="#none" className="service-one__link">
                  <i className="dimon-icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single text-center">
              <div className="service-one__inner">
                <i className="service-one__icon dimon-icon-target"></i>
                <h3>
                  <a href="#none">
                    Shoes
                  </a>
                </h3>
                <p>
                  All your needs in one place
                  
                </p>
      </div>
    </section>
  );
};
export default Features;

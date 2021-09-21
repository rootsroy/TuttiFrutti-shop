import React from "react";
import BannerMoc from "IMAGE FILE";
const Banner = () => {
  return (
    <section className="banner-one" id="banner">
      <span className="banner-one__shape-1"></span>
      <span className="banner-one__shape-2"></span>
      <span className="banner-one__shape-3"></span>
      <span className="banner-one__shape-4"></span>
      <div className="container">
        <div className="banner-one__moc">
          <img src={BannerMoc} alt="alter text" />
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="banner-one__content">
              <h3 className="banner-one__title">
                We provide modern recycled fashion <br />
                <span>for</span> <br /> every(body).
              </h3>
              <p className="banner-one__text">
                We are committed to providing our customers with <br />{" "}
                exceptional quality and selection while ensuring <br /> to
                recycle.
              </p>
              <a href="#none" className="banner-one__btn thm-btn ">
                <span>See what we have</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
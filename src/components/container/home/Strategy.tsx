import React from "react";
import Image from "next/image";

import twentyOne from "public/images/about/21.png";
import twentyTwo from "public/images/about/22.png";

const Strategy = () => {
  return (
    <div className="planning-area bg-sky pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title mb-0 mt-5 mt-lg-0">
              <h6
                className="sub-title "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                What we do
              </h6>
              <h2
                className="title mb-4 "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="150"
              >
                We, at StratHouse, provide you with the best strategy
              </h2>
              <p
                className="content "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                StratHouse is a leading consultant agency specializing in providing strategic planning and advisory services. Our team of experts is dedicated to helping businesses achieve their goals and maximize their success. With our extensive experience and industry knowledge, we deliver tailored strategies that drive growth and deliver exceptional results.
              </p>
              <ul
  className="single-list-inner ps-3 mt-4 mb-4 "
  data-aos="fade-up"
  data-aos-duration="1500"
  data-ao-delay="250s"
>
  <li>
    <strong>Proven Results:</strong> Our strategic solutions have consistently delivered exceptional outcomes, including a campaign ROI that exceeds 692%.
  </li>
  <li>
    <strong>Increased Visibility:</strong> By leveraging our expertise, clients have experienced an 8x increase in the number of keywords driving traffic to their websites.
  </li>
  <li>
    <strong>Organic Growth:</strong> We have achieved a remarkable 296% increase in organic traffic for our clients through our strategic consulting services.
  </li>
</ul>
              <Image
                className=""
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
                src={twentyOne}
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-9 mt-4 mt-lg-0 align-self-center">
            <div
              className="about-thumb-area pe-0 pb-0 px-lg-5 ms-xl-5 "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="left-content">support@attaxinfo.com</div>
              <Image
                className=""
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
                src={twentyTwo}
                alt="img"
              />
              <p className="mt-3">
                Highly qualified tax consultants with many years of experience
                in the field offer a full range of services to help you build a
                sound financial future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;

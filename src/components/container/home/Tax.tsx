import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/icon/13.svg";
import two from "public/images/icon/14.svg";
import three from "public/images/icon/15.svg";
import four from "public/images/icon/16.svg";
import five from "public/images/icon/17.svg";

const ConsultingServices = () => {
  return (
    <div className="intro-area pd-top-90 mt-md-4">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <div className="intro-area-inner">
              <div className="thumb mb-4">
                <Image src={one} alt="Image" />
              </div>
              <div className="details">
                <h4>Inheritance Tax</h4>
                <p>
                  We provide comprehensive assistance with inheritance tax matters, explaining the system and guiding you through the process.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <div className="intro-area-inner">
              <div className="thumb mb-4">
                <Image src={two} alt="Image" />
              </div>
              <div className="details">
                <h4>International Tax</h4>
                <p>
                  Our expert team specializes in international tax regulations, ensuring compliance and providing strategic advice for your business.
                </p>

              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="intro-area-inner">
              <div className="thumb mb-4">
                <Image src={three} alt="Image" />
              </div>
              <div className="details">
                <h4>Large Corporate</h4>
                <p>
                  We offer comprehensive tax services tailored for large corporate entities, addressing their specific needs and ensuring compliance.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="intro-area-inner">
              <div className="thumb mb-4">
                <Image src={four} alt="Image" />
              </div>     
              <div className="details">
                <h4>Personal Tax</h4>
                <p>
                  Our team provides personalized tax services, guiding individuals through their tax obligations and maximizing their financial benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingServices;

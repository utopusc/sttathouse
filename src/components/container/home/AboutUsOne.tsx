import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import one from "public/images/about/17.png";
import two from "public/images/about/18.png";
import three from "public/images/about/19.png";
import four from "public/images/about/20.png";

import { MdOutlineClose } from "react-icons/md";
import YoutubeEmbed from "../youtube/YoutubeEmbed";

const AboutUsOne = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <>
      <div id="about-area" className="about-area pd-top-90">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-9 "
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="about-thumb-area pe-0 pb-0">
              <Image src={require("public/images/about/1-1.png")} alt="Image 1" />
              <Image src={require("public/images/about/1-3.png")} alt="Image 1" />
              </div>
            </div>
            <div
              className="col-lg-6 align-self-center "
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="section-title mb-0 mt-5 mt-lg-0">
                <h6 className="sub-title">Who We Are</h6>
                <h2 className="title mb-4">
                  We believe that selecting the right financial service firm
                </h2>
                <Image src={require("public/images/about/1-2.png")} alt="Image 1" />
                <p className="content">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat proident.&quot;
                </p>
                <p className="content">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat proident.&quot;
                </p>
                <div className="btn-wrap">
                  <Link className="btn btn-border-base" href="/about">
                    More About us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsOne;

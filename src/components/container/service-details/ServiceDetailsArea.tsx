import React, { useState } from "react";
import Image from "next/image";
import One from "public/images/bg/15.png";
import Three from "public/images/about/15.png";
import Two from "public/images/about/16.png";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ServiceDetailsArea = () => {
  const [imgTab, setImgTab] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      <div
        id="service-details-area"
        className="service-details bg-sky pd-bottom-100"
      >
        <div className="container">
          <Image src={One} alt="img" />
          <h2>How To Improve Your Tax Advisor Financial Consulting Services</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet
          </p>
          <h3>A Strategic Path of True Investment</h3>
          <p className="mb-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet
          </p>
        </div>
      </div>

      <div className="counter-area bg-light pd-top-90 pb-5">
        <div className="container">
          <div className="counter-area-inner">
            <h2 className="overlay-title">Company</h2>
            <div className="row">
              <div
                className="col-lg-3 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <div className="single-counter-inner text-center">
                  <h2>
                    <span className="counter" ref={ref}>
                      {inView && <CountUp start={0} end={12} duration={3} />}
                    </span>{" "}
                    k
                  </h2>
                  <h6>Successfully Project Done</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <div className="single-counter-inner text-center">
                  <h2>
                    <span className="counter" ref={ref}>
                      {inView && <CountUp start={0} end={450} duration={3} />}
                    </span>
                  </h2>
                  <h6>Saticfied Global Clients</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                <div className="single-counter-inner text-center">
                  <h2>
                    <span className="counter" ref={ref}>
                      {inView && <CountUp start={0} end={25} duration={3} />}
                    </span>{" "}
                    m
                  </h2>
                  <h6>3,280 avg Rating</h6>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                <div className="single-counter-inner text-center">
                  <h2>
                    <span className="counter" ref={ref}>
                      {inView && <CountUp start={0} end={358} duration={3} />}
                    </span>{" "}
                    +
                  </h2>
                  <h6>Successfully Project Done</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-area cus-faq pd-top-110 bg-sky pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">
                  Solutions: all your questions answered
                </h2>
              </div>
            </div>
          </div>
          <div
            className="accordion attax-accordion style-2 mt-5 mt-lg-0 pd-bottom-120"
            id="accordionExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className={
                    (imgTab == 0 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                >
                  1. Where Can I Find Information?
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse${
                  imgTab === 0 ? " show " : ""
                }`}
              >
                <div className="accordion-body">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, search for
                  &apos;lorem ipsum&apos; will uncover
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className={
                    (imgTab == 1 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                >
                  2. What Are Your Terms And Conditions?
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse${
                  imgTab === 1 ? " show " : ""
                }`}
              >
                <div className="accordion-body">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, search for
                  &apos;lorem ipsum&apos; will uncover
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className={
                    (imgTab == 2 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                >
                  3. Can I Buy Directly From The Factory?
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse${
                  imgTab === 2 ? " show " : ""
                }`}
              >
                <div className="accordion-body">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, search for
                  &apos;lorem ipsum&apos; will uncover
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className={
                    (imgTab == 3 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                >
                  4. What Kinds of Payment Do You Accept?
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse${
                  imgTab === 3 ? " show " : ""
                }`}
              >
                <div className="accordion-body">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, search for
                  &apos;lorem ipsum&apos; will uncover
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quote-area pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 bg-black">
              <div className="media p-4 pt-lg-5 pb-lg-5">
                <div className="media-left pe-md-4 mb-3 mb-lg-0">
                  <Image src={Three} alt="img" />
                </div>
                <div className="media-body align-self-center">
                  <h3 className="text-white mb-md-4">3k Problems Solved</h3>
                  <p className="text-white mb-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the alteration in some form,{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 bg-base">
              <div className="media p-4 pt-lg-5 pb-lg-5">
                <div className="media-body align-self-center">
                  <h3 className="text-white mb-0">Have An Emergency?</h3>
                  <h5 className="text-white mb-3">+11 44-45-4789</h5>
                  <p className="text-white mb-0">
                    There are many variations of passages of Lorem Ipsum
                    available,
                  </p>
                </div>
                <div className="media-left ps-md-4 mt-3 mt-lg-0">
                  <Image src={Two} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;

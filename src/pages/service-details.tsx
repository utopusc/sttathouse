import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetailsBanner from "@/components/container/service-details/ServiceDetailsBanner";
import ServiceDetailsArea from "@/components/container/service-details/ServiceDetailsArea";
import ContactInstagram from "@/components/container/contact/ContactInstagram";
import ContactClientTwo from "@/components/container/contact/ContactClientTwo";

const ServiceDetails = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={1}
    >
      <ServiceDetailsBanner />
      <ServiceDetailsArea />
      <ContactClientTwo />
      <ContactInstagram />
    </Layout>
  );
};

export default ServiceDetails;

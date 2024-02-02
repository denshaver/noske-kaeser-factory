import { Check, Clock, Cross } from "akar-icons";
import container2D from "../../img/container_2d.png";
import dotsDividerSvg from "../../img/dots-divider.svg";

import "./services-section.css";
import ServiceCardItem from "./ServiceCardItem";

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="wrapper">
        <h4 className="text_subtitle">Unsere Dienstleistungen</h4>
        <h2 className="text_title_m">Was wir können</h2>
        <img src={dotsDividerSvg} alt="" className="divider" />
        <p className="text_primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          mollis aliquam ut porttitor leo a diam sollicitudin tempor. Placerat
          vestibulum lectus mauris ultrices eros in cursus turpis massa.
        </p>
        <div className="services-icons-container">
          <div className="service-icon">
            <img src={container2D} alt="" />
            <b>Container</b>
          </div>
          <div className="service-icon">
            <img src={container2D} alt="" />
            <b>Container</b>
          </div>
          <div className="service-icon">
            <img src={container2D} alt="" />
            <b>Container</b>
          </div>
          <div className="service-icon">
            <img src={container2D} alt="" />
            <b>Container</b>
          </div>
          <div className="service-icon">
            <img src={container2D} alt="" />
            <b>Container</b>
          </div>
        </div>
        <div className="services-cards-container">
          <ServiceCardItem isVip={false} />
          <ServiceCardItem isVip={false} />
          <ServiceCardItem isVip={false} />
          <ServiceCardItem isVip={true} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

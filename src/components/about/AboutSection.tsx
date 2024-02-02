import "./about-sections.css";
import AboutCardItem from "./AboutCardItem";

import dotsDividerSvg from "../../img/dots-divider.svg";
import truckImg from "../../img/truck.png";
import containerImg from "../../img/container.png";

const AboutSection = () => {
  return (
    <section className="about-us">
      <div className="wrapper">
        <h4 className="text_subtitle">Lorem ipsum dolor sit amet</h4>
        <h2 className="text_title_m_white">Über uns</h2>
        <img src={dotsDividerSvg} alt="" className="divider" />
        <div className="about-cards-container">
          <div className="about-cards-row">
            <AboutCardItem title="Unsere Unternehmensgeschichte" />
            <AboutCardItem title="Das Team hinter Noske Kaeser" />
          </div>
          <div className="about-cards-row">
            <AboutCardItem title="Innovation in der Containerbranche" />
            <AboutCardItem title="Unsere Werte und Verpflichtungen" />
          </div>
        </div>
      </div>
      <img src={truckImg} alt="" className="about-img-left" />
      <img src={containerImg} alt="" className="about-img-right" />
    </section>
  );
};

export default AboutSection;

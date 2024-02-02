import { Check } from "akar-icons";
import "./about-service.css";
import containerWallImg from "../../img/container_wall.jpg";

const AboutService = () => {
  return (
    <section className="about-service-container">
      <div className="wrapper">
        <h4 className="text_subtitle">Ein wenig über uns</h4>
        <h2 className="text_title_m_white">
          Der Weg zum Erfolg – Professionalismus
        </h2>
        <p className="text_primary_white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          mollis aliquam ut porttitor leo a diam sollicitudin tempor. Placerat
          vestibulum lectus mauris ultrices eros in cursus turpis massa.
        </p>
        <div className="about-service">
          <img src={containerWallImg} alt="" />
          <div className="about-service-info">
            <h3>Kurze Titel</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              mollis aliquam ut porttitor leo a diam sollicitudin tempor.
            </p>
            <h4>Vorteile Überschrift</h4>
            <ul>
              <li>
                <Check strokeWidth={3} size={12} color="#39B972" /> Vorteil
                Nummer eins
              </li>
              <li>
                <Check strokeWidth={3} size={12} color="#39B972" /> Vorteil
                Nummer zwei
              </li>
              <li>
                <Check strokeWidth={3} size={12} color="#39B972" /> Vorteil
                Nummer drei
              </li>
              <li>
                <Check strokeWidth={3} size={12} color="#39B972" /> Vorteil
                Nummer vier
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;

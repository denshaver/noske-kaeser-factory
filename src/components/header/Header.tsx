import { Location, Phone } from "akar-icons";

import logo from "../../img/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header-nav-container">
      <header>
        <div className="wrapper header-wrapper">
          <img src={logo} alt="Logo of Noske Kaeser" />
          <section className="header-desktop-section">
            <div className="header-desktop-location">
              <h4>
                <Location strokeWidth={2} size={16} />
                Standort
              </h4>
              <span>Ruwoldtweg 12, 22309 Hamburg, Germany</span>
            </div>
            <div className="header-desktop-phone">
              <h4>
                <Phone strokeWidth={2} size={16} /> Telefonnummer
              </h4>
              <span>+49 000 000 00 00</span>
            </div>
          </section>
        </div>
      </header>
      <nav>
        <div className="wrapper nav-wrapper">
          <ul>
            <li>Startseite</li>
            <li>Über uns</li>
            <li>Dienstleistungen</li>
            <li>Kontakt</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

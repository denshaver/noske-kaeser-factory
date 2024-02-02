import { Location, Phone } from "akar-icons";

import logo from "../../img/logo.png";
import "./header.css";
import { FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  isAbsolute?: boolean;
}

const Header: FC<HeaderProps> = ({ isAbsolute = false }) => {
  return (
    <div
      className={`header-nav-container${isAbsolute ? " header-absolute" : ""}`}
    >
      <header>
        <div className="wrapper header-wrapper">
          <Link to="/" className="clear_a">
            <img src={logo} alt="Logo of Noske Kaeser" />
          </Link>
          <section className="header-desktop-section">
            <div className="header-desktop-location">
              <a
                className="clear_a"
                href="https://maps.app.goo.gl/twZBRVwwashXZQCW6"
                target="_blank"
              >
                <h4>
                  <Location strokeWidth={2} size={16} />
                  Standort
                </h4>
                <span>Dradenauer Deichweg 1, 21129 Hamburg</span>
              </a>
            </div>
            <div className="header-desktop-phone">
              <a href="tel:010000000000" className="clear_a">
                <h4>
                  <Phone strokeWidth={2} size={16} /> Telefonnummer
                </h4>
                <span>+49 000 000 00 00</span>
              </a>
            </div>
          </section>
        </div>
      </header>
      <nav>
        <div className="wrapper nav-wrapper">
          <ul>
            <Link to="/" className="clear_a">
              <li>Startseite</li>
            </Link>
            <Link to="/about" className="clear_a">
              <li>Über uns</li>
            </Link>
            <Link to="/services" className="clear_a">
              <li>Dienstleistungen</li>
            </Link>
            <Link to="/contacts" className="clear_a">
              <li>Kontakt</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

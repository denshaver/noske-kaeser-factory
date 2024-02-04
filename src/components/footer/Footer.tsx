import { FacebookFill } from "akar-icons";
import logo from "../../img/logo.png";
import krochasLogo from "../../img/krochas-logo.png";
import "./footer.css";
import { Link } from "react-router-dom";
import useScreenSize from "../../utils/useScreenSize";

const Footer = () => {
  const handleLinkOnClick = () => {
    window.scrollTo(0, 0);
  };
  const screenSize = useScreenSize();

  return (
    <footer>
      <div className="wrapper">
        <div className="footer-top">
          <img src={logo} alt="" />
          <span>
            {screenSize.width >= 425 ? "Folgen Sie uns:" : ""}
            <a href="https://www.facebook.com" target="_blank">
              <FacebookFill strokeWidth={2} size={28} />
            </a>
          </span>
        </div>
        <div className="footer-main">
          <div className="footer-section">
            <h4>Service</h4>
            <ul className="footer-links-list">
              <li onClick={handleLinkOnClick}>
                <Link to="/datenschutz">Datenschutz</Link>
              </li>
              <li onClick={handleLinkOnClick}>
                <Link to="/impressum">Impressum</Link>
              </li>
              <li onClick={handleLinkOnClick}>
                <Link to="/agbs">AGBS</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul>
              <a href="tel:010000000000" className="clear_a">
                <li>
                  <span>Telefon:</span> +49 (000) 000 00 00
                </li>
              </a>
              <a href="mailto:mail@yahoo.de" className="clear_a">
                <li>
                  <span>Email:</span> mail@mail.com
                </li>
              </a>
              <a
                className="clear_a"
                href="https://maps.app.goo.gl/twZBRVwwashXZQCW6"
                target="_blank"
              >
                <li>
                  <span>Adresse:</span> Dradenauer Deichweg 1, 21129 Hamburg
                </li>
              </a>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Öffnungszeiten</h4>
            <b>
              Mo. - Fr. <span>10:00 - 19:00</span>
            </b>
          </div>
        </div>
      </div>
      <div className="footer-krochas-section">
        <h5>Website by:</h5>
        <Link to={"https://www.krochas.de"} className="clear_a" target="_blank">
          <img src={krochasLogo} alt="" />
        </Link>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Noske-Kaeser Container Service GmbH</p>
      </div>
    </footer>
  );
};

export default Footer;

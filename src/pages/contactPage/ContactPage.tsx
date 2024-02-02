import GoogleMap from "../../components/google-map/GoogleMap";
import "./contact-page.css";

const ContactPage = () => {
  return (
    <>
      <GoogleMap />
      <div className="wrapper contact-page">
        <h3>Noske Keaser Container Service GmbH</h3>
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
    </>
  );
};

export default ContactPage;

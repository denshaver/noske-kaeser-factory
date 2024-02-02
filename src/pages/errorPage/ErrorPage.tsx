import { Link } from "react-router-dom";

import "./error-page.css";
import { ArrowBackThick } from "akar-icons";

const ErrorPage = () => {
  return (
    <div className="wrapper error-page">
      <h1 className="text_title_m">Seite nicht gefunden 404</h1>
      <h3 className="text_subtitle">
        Ups! Es scheint, als könnten wir die gesuchte Seite nicht finden.
      </h3>
      <p className="text_primary">
        Es ist möglich, dass die Adresse falsch eingegeben wurde, die Seite
        verschoben oder gelöscht wurde, oder sie ist vorübergehend nicht
        erreichbar. Aber keine Sorge, wir helfen Ihnen, wieder auf Kurs zu
        kommen!
      </p>
      <Link to={"/"}>
        Zurück zur Startseite <ArrowBackThick strokeWidth={2} />
      </Link>
    </div>
  );
};

export default ErrorPage;

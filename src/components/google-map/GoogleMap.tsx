import "./google-map.css";

const GoogleMap = () => {
  return (
    <section className="google-map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2372.5323403097473!2d9.903413!3d53.512549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18545e0ab09ab%3A0xb6c5070b8bdf7d18!2sNoske-Kaeser%20Container%20Service%20GmbH!5e0!3m2!1sde!2sde!4v1707226065248!5m2!1sde!2sde"
        width="100%"
        height="550"
        style={{ border: 0 }}
        allowFullScreen={false}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default GoogleMap;

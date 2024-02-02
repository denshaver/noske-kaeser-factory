import "./google-map.css";

const GoogleMap = () => {
  return (
    <section className="google-map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.532345908349!2d9.9034126!3d53.5125489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18545e0ab09ab%3A0xb6c5070b8bdf7d18!2sNoske-Kaeser%20Container%20Service%20GmbH!5e0!3m2!1suk!2sde!4v1706548771838!5m2!1suk!2sde"
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

import ServicesSection from "../../components/services/ServicesSection";
import "./services-page.css";

const ServicesPage = () => {
  return (
    <>
      <div className="wrapper services-page">
        <h1 className="text_title_m">Dienstleistungen</h1>
        <h3 className="text_subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <p className="text_primary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
          cupiditate nam rerum, quas, nihil officia itaque blanditiis nostrum
          quisquam eius voluptatum odio! Et itaque quod voluptates sit illum
          dolorem, ratione repudiandae molestiae commodi possimus asperiores
          voluptas! Et quaerat, perferendis molestiae facere similique non
          laboriosam aperiam excepturi, expedita quasi velit! Illum!
        </p>
        <p className="text_primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum
          culpa eos numquam aspernatur eius in similique voluptas accusantium.
          Ea rem tempore saepe cum officiis vero, natus placeat. Amet dolores
          esse quas adipisci aperiam. Architecto impedit alias officiis
          voluptatibus accusantium.
        </p>
      </div>
      <ServicesSection />
    </>
  );
};

export default ServicesPage;

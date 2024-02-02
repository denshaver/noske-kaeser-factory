import AboutService from "./components/about-service/AboutService";
import AboutSection from "./components/about/AboutSection";
import ArticlesSlider from "./components/articles-slider/ArticlesSlider";
import Footer from "./components/footer/Footer";
import GoogleMap from "./components/google-map/GoogleMap";
import HeaderSlider from "./components/header-slider/HeaderSlider";
import Header from "./components/header/Header";
import ServicesSection from "./components/services/ServicesSection";

function App() {
  return (
    <>
      <div className="container">
        <Header isAbsolute={true} />
        <main>
          <HeaderSlider />
          <ArticlesSlider />
          <AboutSection />
          <ServicesSection />
          <AboutService />
          <GoogleMap />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

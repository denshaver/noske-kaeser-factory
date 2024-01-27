import AboutSection from "./components/about/AboutSection";
import ArticlesSlider from "./components/articles-slider/ArticlesSlider";
import HeaderSlider from "./components/header-slider/HeaderSlider";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <HeaderSlider />
        <ArticlesSlider />
        <AboutSection />
      </div>
    </>
  );
}

export default App;

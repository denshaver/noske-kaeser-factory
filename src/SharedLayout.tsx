import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const SharedLayout = () => {
  return (
    <div className="container">
      <Header />
      <main className="default-main-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;

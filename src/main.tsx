import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout.tsx";
import ErrorPage from "./pages/errorPage/ErrorPage.tsx";
import AboutPage from "./pages/aboutPage/AboutPage.tsx";
import ServicesPage from "./pages/servicesPage/ServicesPage.tsx";
import ContactPage from "./pages/contactPage/ContactPage.tsx";
import AGBSPage from "./pages/agbsPage/AGBSPage.tsx";
import DatenschutzPage from "./pages/datenschutzPage/DatenschutzPage.tsx";
import ImpressumPage from "./pages/impressumPage/ImpressumPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<SharedLayout />}>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/agbs" element={<AGBSPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

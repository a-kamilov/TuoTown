import { useEffect } from "react";
import "./App.scss";
import "aos/dist/aos.css";
import AboutUs from "./main_component/AboutUs";
import Footer from "./main_component/Footer";
import FourCategory from "./main_component/FourCategory";
import Header from "./main_component/Header";
import News from "./main_component/News";
// responsive style
import "./main_component/Responsive.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <FourCategory />
      <AboutUs />
      <News />
      <Footer />
    </div>
  );
}

export default App;

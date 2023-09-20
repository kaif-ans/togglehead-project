import "./App.css";
import Faq from "./Faq";
import Footer from "./Footer";
import Info123 from "./Info123";
import Navbar from "./Navbar";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Subscribe from "./Subscribe";
import UpcomingEvents from "./UpcomingEvents";

function App() {
  return (
    <div>
      <Navbar />
      <Slider1 />
      <UpcomingEvents />
      <Slider2 />
      <Info123 />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

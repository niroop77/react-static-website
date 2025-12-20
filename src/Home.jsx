import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Service from "./Service";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
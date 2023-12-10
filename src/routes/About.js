import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImg from "../assets/beach.jpg";
import owner from "../assets/about.png";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" style={{backgroundImage:"url()"}} heroImg={aboutImg}  btnClass="hide" />
      <p>
        Tourism or travel website serves as an information hub for prospective travelers planning a getaway. 
        Today, people travel for a range of experiences—babymoons, staycations, voluntourism or bleisure—you name it. 
        So, provide as much relevant information as possible to help users plan their trips.
        Vacation Packages: 
        Travelers can book comprehensive vacation packages that include flights, accommodations, and sometimes additional perks like tours or activities.
      </p>

      {/* <Hero cName="hero" heroImg={owner} title="owner" btnClass="hide" /> */}
      <Footer />
    </>
  );
}

export default About;

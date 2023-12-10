import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroImg from "../assets/island.jpg";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={heroImg}
        title="Your Journey Begins"
        text="Search Your Destination"
        buttonText="Travel Places"
        url="https://www.expedia.com/"
        btnClass="show"
      />
      <Footer />
    </>
  );
}

export default Home;

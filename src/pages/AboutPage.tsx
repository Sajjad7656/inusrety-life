import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <AboutSection variant="page" />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

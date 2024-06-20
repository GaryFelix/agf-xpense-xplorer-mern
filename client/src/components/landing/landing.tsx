import { useEffect, useState } from "react";
import { HeroSection } from "../../sections/HeroSection"
import { NavbarComponent } from "../Navbar/navbar"
import { Loader } from "../../sections/Loader";
import { Services } from "../../sections/Services";
import { ChartData } from "../../sections/ChartData";
import { Testimonial } from "../../sections/Testimonials";
import { Footer } from "../../sections/Footer";


export const Landing = () => {
    
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

    return(
        <div>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <NavbarComponent />
          <section>
            <HeroSection />
          </section>
          <section>
            <Services />
          </section>
          <section>
            <ChartData />
          </section>
          <section>
            <Testimonial />
          </section>
          <section className="padding bg-black padding-x padding-t pb-8">
            <Footer />
          </section>
        </main>
      )}
    </div>
    )
}
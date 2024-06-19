import { useEffect, useState } from "react";
import { HeroSection } from "../../sections/HeroSection"
import { NavbarComponent } from "../Navbar/navbar"
import { Loader } from "../../sections/Loader";


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
          {/* <section className="padding">
            <Products />
          </section>
          <section className="padding">
            <SuperQuality />
          </section>
          <section className="padding-x py-10">
            <Services />
          </section>
          <section className="padding">
            <Offers />
          </section>
          <section className="bg-[#4aa9ba38] padding">
            <CustomerReviews />
          </section>
          <section className="padding-x sm:py-32 py-16 w-full">
            <Subscribe />
          </section>
          <section className="padding bg-black padding-x padding-t pb-8">
            <Footer />
          </section> */}
        </main>
      )}
    </div>
    )
}
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ListingSection from "../components/ListingSection";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";

import listings from "../data/listings";
import experiences from "../data/experiences";
import services from "../data/services";

function All() {

    useEffect(() => {
        
        document.title =
        "Airbnb | Holiday rentals, cabins, beach houses & more";
    
    }, []);

  const [loginOpen, setLoginOpen] = useState(false);

  return (

    <div className="bg-white min-h-screen">

      {/* Navbar */}

      <Navbar
        openLogin={() => setLoginOpen(true)}
      />

      {/* Main */}

      <main

        className="
        max-w-[1760px]
        mx-auto
        pt-8
        pb-12
        "

      >

        {/* Homes */}

        {

          listings.map((section) => (

            <ListingSection

              key={`home-${section.title}`}

              section={section}

              openLogin={() => setLoginOpen(true)}

            />

          ))

        }

        {/* Experiences */}

        {

          experiences.map((section) => (

            <ListingSection

              key={`experience-${section.title}`}

              section={section}

              openLogin={() => setLoginOpen(true)}

            />

          ))

        }

        {/* Services */}

        {

          services.map((section) => (

            <ListingSection

              key={`service-${section.title}`}

              section={section}

              openLogin={() => setLoginOpen(true)}

            />

          ))

        }

      </main>

      {/* Footer */}

      <Footer />

      {/* Login Modal */}

      {

        loginOpen && (

          <LoginModal

            showClose={true}

            onClose={() => setLoginOpen(false)}

          />

        )

      }

    </div>

  );

}

export default All;
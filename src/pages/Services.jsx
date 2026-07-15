import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ListingSection from "../components/ListingSection";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";

import services from "../data/services";

export default function Services() {

    useEffect(() => {

    document.title =
        "Airbnb Services - Enhance Your Stay with Vetted Local Professionals";

    }, []);

  const [loginOpen, setLoginOpen] = useState(false);

  function openLogin() {
    setLoginOpen(true);
  }

  function closeLogin() {
    setLoginOpen(false);
  }

  return (

    <>

      <Navbar
        openLogin={openLogin}
      />

      <main
        className="
        max-w-[1760px]
        mx-auto
        pt-10
        "
      >

        {

          services.map((section) => (

            <ListingSection

              key={section.title}

              section={section}

              openLogin={openLogin}

            />

          ))

        }

      </main>

      <Footer />

      {

        loginOpen && (

          <LoginModal

            showClose={true}

            onClose={closeLogin}

          />

        )

      }

    </>

  );

}
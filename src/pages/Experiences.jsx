import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ListingSection from "../components/ListingSection";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";

import experiences from "../data/experiences";

function Experiences() {

    useEffect(() => {

    document.title =
        "Airbnb Experiences - Find Things to Do Hosted by Locals";

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
        pt-6
        "
      >

        {/* Airbnb Originals */}

        {

          experiences.length > 0 && (

            <ListingSection
              section={experiences[0]}
              openLogin={openLogin}
            />

          )

        }

        {/* Heading */}

        <div
          className="
          px-8
          mt-6
          mb-2
          "
        >

          <h2
            className="
            text-[42px]
            font-semibold
            tracking-tight
            "
          >

            Popular with travellers from your area

          </h2>

        </div>

        {/* Remaining Sections */}

        {

          experiences.slice(1).map((section) => (

            <ListingSection
              key={section.title}
              section={section}
              openLogin={openLogin}
            />

          ))

        }

      </main>

      <Footer />

      {/* Login Modal */}

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

export default Experiences;
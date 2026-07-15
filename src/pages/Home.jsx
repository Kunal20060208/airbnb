import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ListingSection from "../components/ListingSection";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";

import listings from "../data/listings";

function Home() {

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

      {/* Listings */}

      <main

        className="
        max-w-[1760px]
        mx-auto
        px-10
        pt-8
        pb-12
        "

      >

        {

          listings.map((section) => (

            <section

              key={section.title}

              className="mb-14"

            >

              <ListingSection

                section={section}
                openLogin={() => setLoginOpen(true)}

              />

            </section>

          ))

        }

      </main>

      {/* Footer */}

      <Footer />

      {/* Login */}

      {

        loginOpen && (

          <LoginModal

            showClose={true}

            onClose={() =>

              setLoginOpen(false)

            }

          />

        )

      }

    </div>

  );

}

export default Home;
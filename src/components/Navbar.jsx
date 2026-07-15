import {
  useEffect,
  useRef,
  useState
} from "react";

import SearchBar from "./SearchBar";

import NavbarLogo from "./NavbarLogo";
import NavbarTabs from "./NavbarTabs";
import NavbarCompact from "./NavbarCompact";
import NavbarRightMenu from "./NavbarRightMenu";

import "./Navbar.css";

export default function Navbar({

  openLogin

}) {

  const [menuOpen, setMenuOpen] = useState(false);

  const [headerState, setHeaderState] =
    useState("expanded");

  const [popupOpen, setPopupOpen] =
    useState(false);

  const menuRef = useRef(null);

  /* ======================================================
     HEADER ANIMATION
  ====================================================== */

  useEffect(() => {

    function handleScroll() {

      const y = window.scrollY;

      if (popupOpen) {

        setHeaderState("expanded");

        return;

      }

      if (y < 20) {

        setHeaderState("expanded");

      }

      else if (y < 80) {

        setHeaderState("shrinking");

      }

      else {

        setHeaderState("compact");

      }

    }

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, [popupOpen]);

  /* ======================================================
     CLOSE MENU ON OUTSIDE CLICK
  ====================================================== */

  useEffect(() => {

    function handleOutside(e) {

      if (

        menuRef.current &&

        !menuRef.current.contains(e.target)

      ) {

        setMenuOpen(false);

      }

    }

    if (menuOpen) {

      document.addEventListener(

        "mousedown",

        handleOutside

      );

    }

    return () =>

      document.removeEventListener(

        "mousedown",

        handleOutside

      );

  }, [menuOpen]);

  /* ======================================================
     KEEP HEADER EXPANDED WHEN SEARCH POPUP IS OPEN
  ====================================================== */

  const displayState = popupOpen
    ? "expanded"
    : headerState;

  return (

    <>

      {/* ================= MENU OVERLAY ================= */}

      {

        menuOpen && (

          <div

            className="
            fixed
            inset-0
            bg-black/25
            z-40
            "

            onClick={() =>

              setMenuOpen(false)

            }

          />

        )

      }

      {/* ================= HEADER ================= */}

      <header

        className={`

          navbar

          ${displayState}

          ${popupOpen ? "popup-open" : ""}

        `}

      >

        <div

          className="
          navbar-inner
          max-w-[1760px]
          mx-auto
          px-8
          "

        >

          {/* ======================================================
             TOP ROW
          ====================================================== */}

          <div

            className="
            navbar-top
            "

          >

            {/* Logo */}

            <NavbarLogo

              headerState={displayState}

            />

            {/* Desktop Tabs */}

            <NavbarTabs

              headerState={displayState}

            />

            {/* Compact Tabs */}

            {

              displayState === "compact" && (

                <NavbarCompact />

              )

            }

            {/* Right Menu */}

            <NavbarRightMenu

              menuOpen={menuOpen}

              setMenuOpen={setMenuOpen}

              menuRef={menuRef}

              openLogin={openLogin}

            />

          </div>

          {/* ======================================================
             SEARCH BAR
          ====================================================== */}

          <div

            className={`

              navbar-search

              ${displayState}

              ${popupOpen ? "popup-open" : ""}

            `}

          >

            <SearchBar

              compact={
                displayState === "compact"
              }

              headerState={displayState}

              onPopupChange={
                setPopupOpen
              }

            />

          </div>

        </div>

      </header>

    </>

  );

}

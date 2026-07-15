import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/airbnb-logo.png";

export default function Header() {

  const [compact, setCompact] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setCompact(window.scrollY > 80);

    };

    window.addEventListener("scroll", handleScroll);

    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);

  return (

    <header
      className={
        compact
          ? "header compact"
          : "header"
      }
    >

      <div className="top-bar">

        {/* Left */}

        <div className="logo">

          <img
            src={logo}
            alt="Airbnb"
            className="logo-image"
            draggable={false}
          />

          <span
            className="logo-text"
            style={{
              fontFamily:
                '"Airbnb Cereal App","Circular","Segoe UI",sans-serif'
            }}
          >
            airbnb
          </span>

        </div>

        {/* Spacer */}

        <div className="header-spacer"></div>

        {/* Right */}

        <div className="right-menu">

          <span className="host-link">
            Become a host
          </span>

          <button
            className="icon-btn"
            aria-label="Language"
          >
            🌐
          </button>

          <button
            className="icon-btn"
            aria-label="Menu"
          >
            ☰
          </button>

        </div>

      </div>

    </header>

  );

}
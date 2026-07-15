import { NavLink } from "react-router-dom";
import logo from "../assets/airbnb-logo.png";

export default function NavbarLogo({ headerState }) {

  const compact = headerState === "compact";

  return (

    <NavLink

      to="/"

      className={`
        flex
        items-center
        gap-2
        flex-shrink-0
        transition-all
        duration-300
        ease-in-out
        ${
          compact
            ? "scale-[0.92]"
            : "scale-100"
        }
      `}

    >

      <img

        src={logo}

        alt="Airbnb"

        draggable={false}

        className={`
          object-contain
          transition-all
          duration-300
          ease-in-out
          ${
            compact
              ? "h-7"
              : "h-8"
          }
        `}

      />

      <span

        className={`
          font-semibold
          tracking-[-1px]
          leading-none
          text-[#FF385C]
          transition-all
          duration-300
          ease-in-out
          whitespace-nowrap
          ${
            compact
              ? "text-[24px]"
              : "text-[28px]"
          }
        `}

      >

        airbnb

      </span>

    </NavLink>

  );

}
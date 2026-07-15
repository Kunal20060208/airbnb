import { NavLink } from "react-router-dom";

const tabs = [

  {
    name: "All",
    icon: "🌍",
    path: "/"
  },

  {
    name: "Homes",
    icon: "🏡",
    path: "/homes"
  },

  {
    name: "Experiences",
    icon: "🎈",
    path: "/experiences"
  },

  {
    name: "Services",
    icon: "🛎️",
    path: "/services"
  }

];

export default function NavbarTabs({ headerState }) {

  return (

    <nav

      className={`
        hidden
        lg:flex
        items-center
        justify-center
        transition-all
        duration-300
        ease-in-out
        navbar-categories
        ${
          headerState === "compact"
            ? "gap-8 scale-[0.94]"
            : "gap-12 scale-100"
        }
      `}

    >

      {

        tabs.map((item) => (

          <NavLink

            key={item.name}

            to={item.path}

            className={({ isActive }) => `
              relative
              flex
              items-center
              gap-2
              transition-all
              duration-300
              py-6
              ${
                headerState === "compact"
                  ? "text-[15px]"
                  : "text-[16px]"
              }
              ${
                isActive
                  ? "font-semibold text-black after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-black"
                  : "text-gray-500 hover:text-black"
              }
            `}

          >

            <span

              className={`
                transition-all
                duration-300
                ${
                  headerState === "compact"
                    ? "text-[26px]"
                    : "text-[31px]"
                }
              `}

            >

              {item.icon}

            </span>

            <span>

              {item.name}

            </span>

          </NavLink>

        ))

      }

    </nav>

  );

}
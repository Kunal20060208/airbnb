import {
  Globe,
  Menu,
  CircleHelp
} from "lucide-react";

import {
  Link
} from "react-router-dom";

export default function NavbarRightMenu({

  menuOpen,

  setMenuOpen,

  menuRef,

  openLogin

}) {

  return (

    <div

      className="
      flex
      items-center
      gap-3
      "

    >

      {/* Become a Host */}

      <Link

        to="/host"

        className="
        px-4
        py-3
        rounded-full
        text-[15px]
        font-medium
        hover:bg-gray-100
        transition
        whitespace-nowrap
        "

      >

        Become a host

      </Link>

      {/* Globe */}

      <button

        className="
        w-11
        h-11
        rounded-full
        hover:bg-gray-100
        flex
        items-center
        justify-center
        transition
        "

      >

        <Globe size={19} />

      </button>

      {/* Profile Menu */}

      <div

        ref={menuRef}

        className="relative z-50"

      >

        <button

          onClick={() =>

            setMenuOpen(!menuOpen)

          }

          className="
          w-11
          h-11
          rounded-full
          hover:bg-gray-100
          flex
          items-center
          justify-center
          transition
          "

        >

          <Menu size={22} />

        </button>

        {

          menuOpen && (

            <div

              className="
              absolute
              right-0
              top-[60px]
              w-[408px]
              rounded-[24px]
              bg-white
              shadow-2xl
              overflow-hidden
              animate-[fadeIn_.18s_ease]
              "

            >

              {/* Help Centre */}

              <Link

                to="/coming-soon/help-centre"

                onClick={() =>

                  setMenuOpen(false)

                }

                className="
                flex
                items-center
                gap-4
                px-9
                py-7
                hover:bg-gray-50
                text-[18px]
                "

              >

                <CircleHelp size={24} />

                Help Centre

              </Link>

              <hr className="mx-9" />

              {/* Become Host */}

              <Link

                to="/host"

                onClick={() =>

                  setMenuOpen(false)

                }

                className="
                flex
                justify-between
                items-center
                px-9
                py-6
                hover:bg-gray-50
                "

              >

                <div>

                  <div

                    className="
                    font-semibold
                    text-[18px]
                    "

                  >

                    Become a host

                  </div>

                  <div

                    className="
                    text-[15px]
                    text-gray-500
                    mt-1
                    "

                  >

                    It's easy to start hosting and earn extra income.

                  </div>

                </div>

                <img

                  src="https://a0.muscache.com/im/pictures/hosting/Hosting-Menu-Illustration.png"

                  alt="host"

                  className="w-16"

                />

              </Link>

              <hr className="mx-9" />

              {/* Co-host */}

              <Link

                to="/cohost"

                onClick={() =>

                  setMenuOpen(false)

                }

                className="
                block
                px-9
                py-6
                hover:bg-gray-50
                text-[18px]
                "

              >

                Find a co-host

              </Link>

              <hr className="mx-9" />

              {/* Login */}

              <button

                onClick={() => {

                  setMenuOpen(false);

                  openLogin?.();

                }}

                className="
                w-full
                text-left
                px-9
                py-6
                hover:bg-gray-50
                text-[18px]
                "

              >

                Log in or sign up

              </button>

            </div>

          )

        }

      </div>

    </div>

  );

}
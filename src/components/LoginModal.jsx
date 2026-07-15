import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/airbnb-logo.png";

export default function LoginModal({

  onClose,

  showClose = true

}) {

  const navigate = useNavigate();

  const modalRef = useRef(null);

  useEffect(() => {

    if (!showClose) return;

    function handleClickOutside(e) {

      if (

        modalRef.current &&

        !modalRef.current.contains(e.target)

      ) {

        onClose();

      }

    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>

      document.removeEventListener(

        "mousedown",

        handleClickOutside

      );

  }, [onClose, showClose]);

  const redirect = () => {

    navigate("/coming-soon");

  };

  return (

    <div

      className="
      fixed
      inset-0
      bg-black/35
      z-[999]
      flex
      items-center
      justify-center
      px-4
      "

    >

      <div

        ref={modalRef}

        className="
        relative
        bg-white
        rounded-[34px]
        w-full
        max-w-[520px]
        shadow-2xl
        overflow-hidden
        "

      >

        {

          showClose &&

          <button

            onClick={onClose}

            className="
            absolute
            top-6
            right-6
            w-10
            h-10
            rounded-full
            hover:bg-gray-100
            flex
            items-center
            justify-center
            "

          >

            <X size={22} />

          </button>

        }

        <div className="px-10 py-10">

          <div className="flex justify-center mb-6">

            <img

              src={logo}

              alt="Airbnb"

              className="h-14"

            />

          </div>

          <h1

            className="
            text-[30px]
            font-semibold
            text-center
            mb-10
            "

          >

            Log in or sign up

          </h1>

          <input

            type="text"

            placeholder="Phone number or email"

            className="
            w-full
            h-16
            rounded-2xl
            border
            border-gray-400
            px-6
            text-[19px]
            outline-none
            focus:border-black
            "

          />

          <button

            onClick={redirect}

            className="
            w-full
            h-16
            rounded-2xl
            mt-6
            bg-[#FF385C]
            text-white
            text-[22px]
            font-semibold
            hover:bg-[#e31c5f]
            "

          >

            Continue

          </button>

          <div

            className="
            flex
            items-center
            gap-4
            my-8
            "

          >

            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="text-xl">

              or

            </span>

            <div className="flex-1 h-px bg-gray-300"></div>

          </div>

          <div className="flex justify-center gap-6">

            <button

              onClick={redirect}

              className="
              w-24
              h-24
              rounded-2xl
              border
              border-gray-300
              text-[42px]
              hover:bg-gray-50
              "

            >

              🌐

            </button>

            <button

              onClick={redirect}

              className="
              w-24
              h-24
              rounded-2xl
              border
              border-gray-300
              text-[42px]
              hover:bg-gray-50
              "

            >

              🍎

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}
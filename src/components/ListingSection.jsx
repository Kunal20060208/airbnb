import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from "lucide-react";

import PropertyCard from "./PropertyCard";
import ExperienceCard from "./ExperienceCard";
import ServiceCard from "./ServiceCard";

export default function ListingSection({ section, openLogin }) {

  const slider = useRef(null);

  const [left, setLeft] = useState(false);

  const [right, setRight] = useState(true);

  function updateButtons() {

    const el = slider.current;

    if (!el) return;

    setLeft(el.scrollLeft > 10);

    setRight(

      el.scrollLeft + el.clientWidth < el.scrollWidth - 10

    );

  }

  function scroll(direction) {

    const el = slider.current;

    if (!el) return;

    el.scrollBy({

      left: direction === "right"
        ? 1280
        : -1280,

      behavior: "smooth"

    });

    setTimeout(updateButtons, 350);

  }

  function getSectionLink() {

    switch (section.type) {

      case "experience":
        return "/coming-soon/experiences";

      case "service":
        return "/coming-soon/services";

      default:
        return "/coming-soon/homes";

    }

  }

  function renderCard(item) {

    switch (section.type) {

      case "experience":

        return (

          <ExperienceCard

            key={item.id}

            experience={item}

            openLogin={openLogin}

          />

        );

      case "service":

        return (

          <ServiceCard

            key={item.id}

            service={item}

            openLogin={openLogin}

          />

        );

      default:

        return (

          <PropertyCard

            key={item.id}

            property={item}

            openLogin={openLogin}

          />

        );

    }

  }

  return (

    <section

      className="
      px-8
      mb-10
      "

    >

      {/* Heading */}

      <div

        className="
        flex
        items-center
        justify-between
        mb-5
        "

      >

        <Link

          to={getSectionLink()}

          className="group"

        >

          <h2

            className="
            flex
            items-center
            gap-2
            text-[26px]
            font-semibold
            tracking-tight
            transition
            "

          >

            {section.title}

            <ArrowRight

              size={20}

              strokeWidth={2.5}

              className="
              transition-transform
              duration-200
              group-hover:translate-x-1
              "

            />

          </h2>

        </Link>

        <div

          className="
          flex
          items-center
          gap-2
          "

        >

          <button

            disabled={!left}

            onClick={() => scroll("left")}

            className="
            w-8
            h-8
            rounded-full
            border
            border-gray-300
            bg-white
            flex
            items-center
            justify-center
            shadow-sm
            hover:shadow-md
            hover:scale-105
            transition
            disabled:opacity-30
            disabled:cursor-not-allowed
            "

          >

            <ChevronLeft size={16} />

          </button>

          <button

            disabled={!right}

            onClick={() => scroll("right")}

            className="
            w-8
            h-8
            rounded-full
            border
            border-gray-300
            bg-white
            flex
            items-center
            justify-center
            shadow-sm
            hover:shadow-md
            hover:scale-105
            transition
            disabled:opacity-30
            disabled:cursor-not-allowed
            "

          >

            <ChevronRight size={16} />

          </button>

        </div>

      </div>

      {/* Slider */}

      <div className="relative">

        <div

          ref={slider}

          onScroll={updateButtons}

          className="
          flex
          gap-4
          overflow-x-auto
          scroll-smooth
          scrollbar-hide
          pb-2
          "

        >

          {

            section.items.map(item => renderCard(item))

          }

          {/* See All */}

          {section.type !== "service" && (

          <Link

            to={getSectionLink()}

            className="
            min-w-[235px]
            h-[338px]
            rounded-[30px]
            border
            border-gray-200
            bg-white
            shadow-sm
            hover:shadow-xl
            transition-all
            duration-300
            flex
            flex-col
            justify-center
            items-center
            gap-8
            "

          >

            <div

              className="
              relative
              w-[140px]
              h-[110px]
              "

            >

              <img

                src={section.items[0]?.image}

                alt=""

                className="
                absolute
                left-0
                top-7
                w-20
                h-20
                rounded-2xl
                object-cover
                rotate-[-10deg]
                border-4
                border-white
                shadow-lg
                "

              />

              <img

                src={section.items[1]?.image}

                alt=""

                className="
                absolute
                left-10
                top-0
                w-20
                h-20
                rounded-2xl
                object-cover
                rotate-[4deg]
                border-4
                border-white
                shadow-lg
                z-10
                "

              />

              <img

                src={section.items[2]?.image}

                alt=""

                className="
                absolute
                left-[62px]
                top-5
                w-20
                h-20
                rounded-2xl
                object-cover
                rotate-[9deg]
                border-4
                border-white
                shadow-lg
                "

              />

            </div>

            <h3

              className="
              text-[18px]
              font-semibold
              "

            >

              See all

            </h3>

          </Link>

            )}

        </div>

        {/* Right Fade */}

        <div

          className="
          absolute
          right-0
          top-0
          h-full
          w-24
          pointer-events-none
          bg-gradient-to-l
          from-white
          to-transparent
          "

        />

      </div>

    </section>

  );

}
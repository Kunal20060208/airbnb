import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function ExperienceCard({ experience, openLogin }) {

  return (

    <Link
      to="/coming-soon/experience"
      className="
      block
      w-[235px]
      shrink-0
      group
      "
    >

      <div
        className="
        relative
        overflow-hidden
        rounded-[20px]
        "
      >

        <img
          src={experience.image}
          alt={experience.name}
          draggable={false}
          className="
          w-full
          h-[215px]
          object-cover
          transition-all
          duration-300
          group-hover:scale-[1.03]
          "
        />

        {(experience.badge || experience.original) && (

          <div
            className="
            absolute
            left-3
            top-3
            bg-white
            rounded-full
            px-3
            py-1
            text-[11px]
            font-semibold
            shadow
            "
          >

            {experience.badge || "Original"}

          </div>

        )}

        <button

            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openLogin?.();
            }}
          className="
          absolute
          right-3
          top-3
          w-8
          h-8
          rounded-full
          bg-black/20
          backdrop-blur-md
          flex
          items-center
          justify-center
          "
        >

          <Heart
            size={18}
            className="
            stroke-white
            fill-transparent
            "
          />

        </button>

      </div>

      <div className="mt-3">

        <h3
          className="
          text-[15px]
          font-semibold
          leading-5
          line-clamp-2
          "
        >

          {experience.name}

        </h3>

        <p
          className="
          mt-1
          text-[14px]
          text-gray-500
          "
        >

          {experience.location}

        </p>

        <p
          className="
          mt-1
          text-[14px]
          text-gray-500
          "
        >

          {experience.comingSoon
            ? "Coming soon"
            : `From ₹${experience.price} / guest`}

          {!experience.comingSoon &&
            `  ·  ★ ${experience.rating}`}

        </p>

      </div>

    </Link>

  );

}
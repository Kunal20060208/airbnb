import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";

export default function ServiceCard({ service, openLogin }) {

  return (

    <Link

      to="/coming-soon/service"

      className="
      block
      w-[235px]
      shrink-0
      group
      "

    >

      {/* Image */}

      <div

        className="
        relative
        overflow-hidden
        rounded-[22px]
        "

      >

        <img

          src={service.image}

          alt={service.name}

          draggable={false}

          className="
          w-full
          h-[225px]
          object-cover
          transition-all
          duration-300
          group-hover:brightness-95
          group-hover:scale-[1.03]
          "

        />

        {/* Badge */}

        {

          service.badge && (

            <div

              className="
              absolute
              top-3
              left-3
              bg-white
              rounded-xl
              px-3
              py-[5px]
              text-[11px]
              font-semibold
              shadow
              "

            >

              {service.badge}

            </div>

          )

        }

        {/* Heart */}

        <button

            onClick={(e) => {

              e.preventDefault();
              e.stopPropagation();
              openLogin?.();
            }}

          className="
          absolute
          top-3
          right-3
          w-9
          h-9
          rounded-full
          bg-black/20
          backdrop-blur-md
          flex
          items-center
          justify-center
          transition
          hover:bg-black/30
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

      {/* Details */}

      <div className="mt-3">

        <div

          className="
          flex
          items-start
          justify-between
          gap-2
          "

        >

          <h3

            className="
            font-semibold
            text-[15px]
            leading-5
            line-clamp-2
            "

          >

            {service.name}

          </h3>

          <div

            className="
            flex
            items-center
            gap-1
            shrink-0
            text-[14px]
            "

          >

            <Star

              size={13}

              className="
              fill-black
              stroke-black
              "

            />

            {service.rating}

          </div>

        </div>

        <p

          className="
          mt-1
          text-[14px]
          text-gray-500
          line-clamp-1
          "

        >

          From ₹{service.price.toLocaleString()}

          {service.priceType}

        </p>

        {

          service.minimumBooking && (

            <p

              className="
              text-[14px]
              text-gray-500
              mt-1
              line-clamp-1
              "

            >

              {service.minimumBooking}

            </p>

          )

        }

      </div>

    </Link>

  );

}
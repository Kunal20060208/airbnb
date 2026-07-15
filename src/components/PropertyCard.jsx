import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";

import EcoScore from "./EcoScore";
import EcoPopup from "./EcoPopup";

export default function PropertyCard({

    property,

    openLogin

}) {

    const [showEcoPopup, setShowEcoPopup] = useState(false);

    return (

        <>

            <Link

                to="/coming-soon/property"

                className="
                block
                w-[235px]
                shrink-0
                group
                "

            >

                {/* ================= IMAGE ================= */}

                <div

                    className="
                    relative
                    overflow-hidden
                    rounded-[22px]
                    "

                >

                    <img

                        src={property.image}

                        alt={property.name}

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

                    {/* Guest Favourite */}

                    {

                        property.favorite && (

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

                                Guest favourite

                            </div>

                        )

                    }

                    {/* Wishlist Button */}

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

                                {/* ================= DETAILS ================= */}

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
                            line-clamp-1
                            "

                        >

                            {property.title}

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

                            {property.rating}

                        </div>

                    </div>

                    {/* ================= ECO SCORE ================= */}

                    <EcoScore

                        ecoScore={property.ecoScore}

                        carbonLevel={property.carbonLevel}

                        carbonPerNight={property.carbonPerNight}

                        ecoFeatures={property.ecoFeatures}

                        onClick={(e) => {

                            e.preventDefault();

                            e.stopPropagation();

                            setShowEcoPopup(true);

                        }}

                    />

                    {/* ================= LOCATION ================= */}

                    <p

                        className="
                        mt-1
                        text-[14px]
                        text-gray-500
                        line-clamp-1
                        "

                    >

                        {property.location}

                    </p>

                    {/* ================= NIGHTS ================= */}

                    <p

                        className="
                        text-[14px]
                        text-gray-500
                        "

                    >

                        2 nights

                    </p>

                    {/* ================= PRICE ================= */}

                    <p

                        className="
                        mt-2
                        text-[15px]
                        "

                    >

                        <span className="font-semibold">

                            ₹{property.price}

                        </span>

                        {" "}for 2 nights

                    </p>

                </div>

            </Link>

            {/* ================= ECO POPUP ================= */}

            {

                showEcoPopup && (

                    <EcoPopup

                        ecoScore={property.ecoScore}

                        carbonLevel={property.carbonLevel}

                        carbonPerNight={property.carbonPerNight}

                        ecoFeatures={property.ecoFeatures}

                        close={() =>

                            setShowEcoPopup(false)

                        }

                    />

                )

            }

        </>

    );

}
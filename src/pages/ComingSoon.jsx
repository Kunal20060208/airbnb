import { ArrowLeft, Construction } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./ComingSoon.css";

export default function ComingSoon() {

  const location = useLocation();

  useEffect(() => {

    document.title = "Coming Soon | Airbnb";

  }, []);

  const pageName = location.pathname
    .replace("/coming-soon", "")
    .replace(/\//g, "")
    .replace(/-/g, " ");

  const title =
    pageName.length > 0
      ? pageName.replace(/\b\w/g, c => c.toUpperCase())
      : "This Page";

  return (

    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-6">

      <div className="bg-white rounded-[32px] shadow-xl w-full max-w-3xl p-12">

        <div className="flex justify-center mb-8">

          <div className="w-24 h-24 rounded-full bg-[#FFF1F2] flex items-center justify-center">

            <Construction
              size={48}
              color="#FF385C"
            />

          </div>

        </div>

        <h1 className="text-center text-5xl font-semibold text-[#222]">

          {title}

        </h1>

        <p className="mt-8 text-center text-[19px] leading-8 text-[#6A6A6A]">

          This page hasn't been developed yet.

        </p>

        <p className="mt-4 text-center text-[18px] leading-8 text-[#6A6A6A]">

          This project focuses on recreating the Airbnb homepage
          as part of a frontend internship assignment.

        </p>

        <p className="mt-4 text-center text-[18px] leading-8 text-[#6A6A6A]">

          The selected feature will be implemented in a future version.

        </p>

        <div className="flex justify-center mt-12">

          <Link

            to="/"

            className="
            flex
            items-center
            gap-3
            bg-[#FF385C]
            hover:bg-[#E31C5F]
            text-white
            px-8
            py-4
            rounded-full
            text-lg
            font-medium
            transition
            "

          >

            <ArrowLeft size={22} />

            Back to Home

          </Link>

        </div>

      </div>

    </div>

  );

}
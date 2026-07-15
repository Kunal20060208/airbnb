import { useState } from "react";

import { Link } from "react-router-dom";

import {
  Globe,
  ChevronDown
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaXTwitter
} from "react-icons/fa6";

import footerData from "../data/footerData";

export default function Footer() {

  const [activeTab, setActiveTab] = useState("popular");

  const [showMore, setShowMore] = useState(false);

  const tabs = [

    {
      id: "popular",
      label: "Popular"
    },

    {
      id: "artsCulture",
      label: "Arts & culture"
    },

    {
      id: "beach",
      label: "Beach"
    },

    {
      id: "mountains",
      label: "Mountains"
    },

    {
      id: "outdoors",
      label: "Outdoors"
    },

    {
      id: "thingsToDo",
      label: "Things to do"
    }

  ];

  const items = [

    ...footerData[activeTab].initial,

    ...(showMore ? footerData[activeTab].more : [])

  ];

  const supportLinks = [

    "AirCover",

    "Anti-discrimination",

    "Disability support",

    "Cancellation options",

    "Report neighbourhood concern"

  ];

  const hostingLinks = [

    "Airbnb your service",

    "AirCover for Hosts",

    "Hosting resources",

    "Community forum",

    "Hosting responsibly",

    "Join a free hosting class",

    "Find a co-host",

    "Refer a host"

  ];

  const airbnbLinks = [

    "Careers",

    "Investors",

    "Airbnb.org emergency stays"

  ];

  return (

    <footer className="bg-[#f7f7f7] border-t border-gray-300 mt-12">

      <div className="max-w-[1760px] mx-auto px-10 pt-12">

        <h2
          className="
          text-[32px]
          font-semibold
          mb-7
          "
        >

          Inspiration for future getaways

        </h2>

        <div
          className="
          flex
          gap-10
          border-b
          border-gray-300
          "
        >

          {

            tabs.map((tab) => (

              <button

                key={tab.id}

                onClick={() => {

                  setActiveTab(tab.id);

                }}

                className={`
                  pb-4
                  text-[15px]
                  font-medium
                  transition
                  border-b-2
                  ${
                    activeTab === tab.id
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-black"
                  }
                `}

              >

                {tab.label}

              </button>

            ))

          }

        </div>

        <div
          className="
          grid
          grid-cols-6
          gap-x-10
          gap-y-10
          py-10
          "
        >

          {

            items.map((item) => (

              <Link

                key={item.title}

                to="/coming-soon"

                className="
                block
                hover:underline
                "

              >

                <p
                  className="
                  text-[16px]
                  font-medium
                  text-black
                  "
                >

                  {item.title}

                </p>

                <p
                  className="
                  text-[15px]
                  text-gray-500
                  "
                >

                  {item.subtitle}

                </p>

              </Link>

            ))

          }

          {

            !showMore && (

              <button

                onClick={() => setShowMore(true)}

                className="
                flex
                items-center
                gap-1
                text-[16px]
                font-semibold
                "

              >

                Show more

                <ChevronDown size={18} />

              </button>

            )

          }

        </div>

                <div
          className="
          border-t
          border-gray-300
          py-12
          grid
          grid-cols-1
          md:grid-cols-3
          gap-12
          "
        >

          <div>

            <h3
              className="
              text-[18px]
              font-semibold
              mb-5
              "
            >
              Support
            </h3>

            <div className="space-y-4">

              {

                supportLinks.map((link) => (

                  <Link

                    key={link}

                    to="/coming-soon"

                    className="
                    block
                    text-[15px]
                    hover:underline
                    "

                  >

                    {link}

                  </Link>

                ))

              }

            </div>

          </div>

          <div>

            <h3
              className="
              text-[18px]
              font-semibold
              mb-5
              "
            >
              Hosting
            </h3>

            <div className="space-y-4">

              {

                hostingLinks.map((link) => (

                  <Link

                    key={link}

                    to="/coming-soon"

                    className="
                    block
                    text-[15px]
                    hover:underline
                    "

                  >

                    {link}

                  </Link>

                ))

              }

            </div>

          </div>

          <div>

            <h3
              className="
              text-[18px]
              font-semibold
              mb-5
              "
            >
              Airbnb
            </h3>

            <div className="space-y-4">

              {

                airbnbLinks.map((link) => (

                  <Link

                    key={link}

                    to="/coming-soon"

                    className="
                    block
                    text-[15px]
                    hover:underline
                    "

                  >

                    {link}

                  </Link>

                ))

              }

            </div>

          </div>

        </div>

        <div
          className="
          border-t
          border-gray-300
          py-6
          flex
          flex-col
          lg:flex-row
          justify-between
          items-center
          gap-5
          "
        >

          <div
            className="
            flex
            flex-wrap
            items-center
            gap-3
            text-[15px]
            "
          >

            <span>
              © 2026 Airbnb, Inc.
            </span>

            <span>·</span>

            <Link
              to="/coming-soon"
              className="hover:underline"
            >
              Privacy
            </Link>

            <span>·</span>

            <Link
              to="/coming-soon"
              className="hover:underline"
            >
              Terms
            </Link>

            <span>·</span>

            <Link
              to="/coming-soon"
              className="hover:underline"
            >
              Company details
            </Link>

          </div>

                    <div
            className="
            flex
            items-center
            gap-6
            text-[15px]
            "
          >

            <Link
              to="/coming-soon"
              className="
              flex
              items-center
              gap-2
              font-medium
              hover:underline
              "
            >

              <Globe size={18} />

              English (IN)

            </Link>

            <Link
              to="/coming-soon"
              className="
              font-medium
              hover:underline
              "
            >

              ₹ INR

            </Link>

            <Link
              to="/coming-soon"
              className="
              hover:text-black
              transition
              "
            >

              <FaFacebook size={20} />

            </Link>

            <Link
              to="/coming-soon"
              className="
              hover:text-black
              transition
              "
            >

              <FaXTwitter size={20} />

            </Link>

            <Link
              to="/coming-soon"
              className="
              hover:text-black
              transition
              "
            >

              <FaInstagram size={20} />

            </Link>

          </div>

        </div>

      </div>

    </footer>

  );

}
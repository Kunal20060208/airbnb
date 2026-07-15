import {
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

import { Search } from "lucide-react";

import {
  useLocation,
  useNavigate
} from "react-router-dom";

import SearchPopup from "./SearchPopup";
import "./SearchBar.css";

let persistedActiveSection = null;

export default function SearchBar({

  compact = false,

  headerState = "",

  onPopupChange

}) {

  const navigate = useNavigate();

  const location = useLocation();

  const wrapperRef = useRef(null);

  /* ======================================================
     ACTIVE SECTION
  ====================================================== */

  const [activeSection, setActiveSectionState] = useState(
    () => persistedActiveSection
  );

  function setActiveSection(section) {

    persistedActiveSection = section;

    setActiveSectionState(section);

  }

  /* ======================================================
     SEARCH VALUES
  ====================================================== */

  const [destination, setDestination] = useState("");

  const [date, setDate] = useState("");

  const [guests, setGuests] = useState({

    Adults: 0,

    Children: 0,

    Infants: 0,

    Pets: 0

  });

  const [serviceType, setServiceType] = useState("");

  /* ======================================================
     CURRENT PAGE
  ====================================================== */

  const currentPage = useMemo(() => {

    if (location.pathname.startsWith("/homes")) {

      return "homes";

    }

    if (location.pathname.startsWith("/experiences")) {

      return "experiences";

    }

    if (location.pathname.startsWith("/services")) {

      return "services";

    }

    return "all";

  }, [

    location.pathname

  ]);

  /* ======================================================
     LABELS
  ====================================================== */

  const labels = useMemo(() => {

    if (currentPage === "services") {

      return {

        whereLabel: "Location",

        wherePlaceholder: "Search location",

        whoLabel: "Type of service",

        whoPlaceholder: "Add service"

      };

    }

    return {

      whereLabel: "Where",

      wherePlaceholder: "Search destinations",

      whoLabel: "Who",

      whoPlaceholder: "Add guests"

    };

  }, [

    currentPage

  ]);

  /* ======================================================
     TOTAL GUESTS
  ====================================================== */

  const totalGuests = useMemo(() => {

    return (

      guests.Adults +

      guests.Children +

      guests.Infants +

      guests.Pets

    );

  }, [

    guests

  ]);

  /* ======================================================
     POPUP CALLBACK
  ====================================================== */

  useEffect(() => {

    onPopupChange?.(

      activeSection !== null

    );

  }, [

    activeSection,

    onPopupChange

  ]);

  /* ======================================================
     OUTSIDE CLICK
  ====================================================== */

  useEffect(() => {

    function handleOutside(event) {

      if (

        wrapperRef.current &&

        !wrapperRef.current.contains(event.target)

      ) {

        if (event.target.closest(".navbar")) {

          return;

        }

        setActiveSection(null);

      }

    }

    document.addEventListener(

      "mousedown",

      handleOutside

    );

    return () =>

      document.removeEventListener(

        "mousedown",

        handleOutside

      );

  }, []);

  useEffect(() => {

    if (!activeSection) {

      return undefined;

    }

    function handleScroll() {

      setActiveSection(null);

    }

    window.addEventListener(

      "scroll",

      handleScroll,

      { passive: true }

    );

    return () =>

      window.removeEventListener(

        "scroll",

        handleScroll

      );

  }, [

    activeSection

  ]);


  /* ======================================================
     HELPERS
  ====================================================== */

  function openSection(section) {

    setActiveSection(previous =>

      previous === section

        ? null

        : section

    );

  }

  function closePopup() {

    setActiveSection(null);

  }

  function handleSearch() {

    closePopup();

    navigate("/coming-soon");

  }

  /* ======================================================
     DISPLAY VALUES
  ====================================================== */

  const guestText =

    totalGuests === 0

      ? labels.whoPlaceholder

      : `${totalGuests} guest${

          totalGuests > 1

            ? "s"

            : ""

        }`;

  const serviceText =

    serviceType ||

    labels.whoPlaceholder;

  const whereText =

    destination ||

    labels.wherePlaceholder;

  const whenText =

    date ||

    "Add dates";

      /* ======================================================
     COMPACT SEARCH BAR
  ====================================================== */

  if (compact) {

    return (

      <div
        ref={wrapperRef}
        className={`compact-search-container ${
          activeSection ? "popup-open" : ""
        }`}
      >

        <div className="compact-search">

          {/* ================= WHERE ================= */}

          <button

            type="button"

            className={`

              compact-pill

              ${

                activeSection === "where"

                  ? "active"

                  : ""

              }

            `}

            onClick={() =>

              openSection("where")

            }

          >

            {destination || "Anywhere"}

          </button>

          <div className="compact-divider" />

          {/* ================= WHEN ================= */}

          <button

            type="button"

            className={`

              compact-pill

              ${

                activeSection === "when"

                  ? "active"

                  : ""

              }

            `}

            onClick={() =>

              openSection("when")

            }

          >

            {date || "Any week"}

          </button>

          <div className="compact-divider" />

          {/* ================= WHO / SERVICE ================= */}

          <button

            type="button"

            className={`

              compact-pill

              compact-last

              ${

                activeSection ===

                (

                  currentPage === "services"

                    ? "service"

                    : "who"

                )

                  ? "active"

                  : ""

              }

            `}

            onClick={() =>

              openSection(

                currentPage === "services"

                  ? "service"

                  : "who"

              )

            }

          >

            <span>

              {

                currentPage === "services"

                  ? serviceText

                  : guestText

              }

            </span>

            <div className="compact-search-icon">

              <Search size={14} />

            </div>

          </button>

        </div>

        {/* ================= OVERLAY ================= */}

        {

          activeSection &&

          <div

            className="search-overlay"

            onClick={closePopup}

          />

        }

        {/* ================= POPUP ================= */}

        {

          activeSection &&

          <div className="search-popup">

            <SearchPopup

              type={activeSection}

              page={currentPage}

              close={closePopup}

              destination={destination}

              setDestination={setDestination}

              date={date}

              setDate={setDate}

              guests={guests}

              setGuests={setGuests}

              serviceType={serviceType}

              setServiceType={setServiceType}

            />

          </div>

        }

      </div>

    );

  }

  /* ======================================================
     EXPANDED SEARCH BAR
  ====================================================== */

  return (

    <div

      ref={wrapperRef}

      className={`

        search-container

        ${

          activeSection

            ? "popup-open"

            : ""

        }

        ${

          headerState === "compact"

            ? "compact"

            : ""

        }

      `}

    >

      <div

        className={`

          search-wrapper

          ${

            activeSection

              ? "popup-open"

              : ""

          }

          ${

            headerState === "compact"

              ? "compact"

              : ""

          }

        `}

      >

                {/* ================= WHERE ================= */}

        <button

          type="button"

          className={`

            search-item

            ${

              activeSection === "where"

                ? "selected"

                : ""

            }

          `}

          onClick={() =>

            openSection("where")

          }

        >

          <div>

            <span className="search-label">

              {labels.whereLabel}

            </span>

            <span className="search-value">

              {whereText}

            </span>

          </div>

        </button>

        <div className="divider" />

        {/* ================= WHEN ================= */}

        <button

          type="button"

          className={`

            search-item

            ${

              activeSection === "when"

                ? "selected"

                : ""

            }

          `}

          onClick={() =>

            openSection("when")

          }

        >

          <div>

            <span className="search-label">

              When

            </span>

            <span className="search-value">

              {whenText}

            </span>

          </div>

        </button>

        <div className="divider" />

        {/* ================= WHO ================= */}

        <div

          className={`

            search-item

            last

            ${

              activeSection ===

              (

                currentPage === "services"

                  ? "service"

                  : "who"

              )

                ? "selected"

                : ""

            }

          `}

          onClick={()=>

            openSection(

              currentPage === "services"

                ? "service"

                : "who"

            )

          }

        >

          <div className="guest-info">

            <span className="search-label">

              {labels.whoLabel}

            </span>

            <span className="search-value">

              {

                currentPage === "services"

                  ? serviceText

                  : guestText

              }

            </span>

          </div>

        </div>

          {/* ================= SEARCH BUTTON ================= */}

          <button

            type="button"

            className={`

              search-button

              ${

                activeSection

                  ? "expanded"

                  : ""

              }

            `}

            onClick={(event)=>{

              event.stopPropagation();

              handleSearch();

            }}

          >

            <Search size={18} />

            {

              activeSection &&

              <span>

                Search

              </span>

            }

          </button>

        </div>

      {/* ================= OVERLAY ================= */}

      {

        activeSection &&

        <div

          className="search-overlay"

          onClick={closePopup}

        />

      }

      {/* ================= POPUP ================= */}

      {

        activeSection &&

        <div className="search-popup">

          <SearchPopup

            type={activeSection}

            page={currentPage}

            close={closePopup}

            destination={destination}

            setDestination={setDestination}

            date={date}

            setDate={setDate}

            guests={guests}

            setGuests={setGuests}

            serviceType={serviceType}

            setServiceType={setServiceType}

          />

        </div>

      }

    </div>

  );

}

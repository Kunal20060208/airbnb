import { Search } from "lucide-react";

export default function NavbarCompact({

  headerState,

  selectedTab,

  onExpand,

  onFieldClick

}) {

  if (headerState !== "compact") {

    return null;

  }

  const lastField =

    selectedTab === "services"

      ? "Add service"

      : "Add guests";

  return (

    <button

      onClick={onExpand}

      className="
      navbar-compact
      flex
      items-center
      rounded-full
      border
      border-gray-200
      bg-white/95
      backdrop-blur-xl
      shadow-md
      hover:shadow-lg
      transition-all
      duration-300
      overflow-hidden
      "

    >

      {/* Anywhere */}

      <button

        type="button"

        onClick={(e) => {

          e.stopPropagation();

          onFieldClick?.("where");

        }}

        className="
        px-6
        py-3
        text-[14px]
        font-semibold
        hover:bg-gray-100
        transition
        "

      >

        Anywhere

      </button>

      <div className="w-px h-6 bg-gray-200" />

      {/* Anytime */}

      <button

        type="button"

        onClick={(e) => {

          e.stopPropagation();

          onFieldClick?.("when");

        }}

        className="
        px-6
        py-3
        text-[14px]
        font-semibold
        hover:bg-gray-100
        transition
        "

      >

        Anytime

      </button>

      <div className="w-px h-6 bg-gray-200" />

      {/* Last Field */}

      <button

        type="button"

        onClick={(e) => {

          e.stopPropagation();

          onFieldClick?.("who");

        }}

        className="
        flex
        items-center
        gap-3
        pl-6
        pr-2
        py-2
        hover:bg-gray-100
        transition
        "

      >

        <span

          className="
          text-[14px]
          text-gray-500
          whitespace-nowrap
          "

        >

          {lastField}

        </span>

        <span

          className="
          w-8
          h-8
          rounded-full
          bg-[#FF385C]
          flex
          items-center
          justify-center
          text-white
          shadow
          "

        >

          <Search size={15} strokeWidth={3} />

        </span>

      </button>

    </button>

  );

}
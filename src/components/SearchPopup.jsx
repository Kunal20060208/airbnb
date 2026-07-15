import {
  useMemo,
  useState,
  useEffect
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Plus,
  Minus,
  Search
} from "lucide-react";

import "./SearchPopup.css";

/* ==========================================================
   CONSTANTS
========================================================== */

const WEEK_DAYS = [
  "Su",
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa"
];

const FLEXIBLE_OPTIONS = [
  "Weekend",
  "Week",
  "Month"
];

const DATE_FLEXIBILITY = [
  {
    label: "Exact dates",
    value: 0
  },
  {
    label: "± 1 day",
    value: 1
  },
  {
    label: "± 2 days",
    value: 2
  },
  {
    label: "± 3 days",
    value: 3
  },
  {
    label: "± 7 days",
    value: 7
  },
  {
    label: "± 14 days",
    value: 14
  }
];

const SERVICE_TYPES = [
  "Photography",
  "Chefs",
  "Massage",
  "Prepared Meals",
  "Training",
  "Hair",
  "Spa Treatments",
  "Make-up",
  "Catering"
];

function formatShortDate(value) {

  return value.toLocaleDateString(

    "en-US",

    {

      day: "numeric",

      month: "short"

    }

  );

}

function formatDateRange(start, end) {

  if (

    start.getMonth() === end.getMonth() &&

    start.getFullYear() === end.getFullYear()

  ) {

    return `${start.getDate()}–${formatShortDate(end)}`;

  }

  return `${formatShortDate(start)} – ${formatShortDate(end)}`;

}

/* ==========================================================
   LOCATIONS
========================================================== */

const LOCATION_SUGGESTIONS = {

  all: [

    {
      icon: "🏠",
      title: "Nearby",
      subtitle: "Find what's around you"
    },

    {
      icon: "🏙️",
      title: "Delhi",
      subtitle: "Popular destination"
    },

    {
      icon: "🏝️",
      title: "Goa",
      subtitle: "Beach escapes"
    },

    {
      icon: "🏔️",
      title: "Manali",
      subtitle: "Mountain stays"
    }

  ],

  homes: [

    {
      icon: "🏠",
      title: "Nearby",
      subtitle: "Find what's around you"
    },

    {
      icon: "🏙️",
      title: "Delhi",
      subtitle: "Popular destination"
    },

    {
      icon: "🏝️",
      title: "Goa",
      subtitle: "Beach escapes"
    },

    {
      icon: "🏔️",
      title: "Manali",
      subtitle: "Mountain stays"
    },

    {
      icon: "🌲",
      title: "Dehradun",
      subtitle: "Nature getaway"
    }

  ],

  experiences: [

    {
      icon: "🎈",
      title: "Paris",
      subtitle: "Food & culture"
    },

    {
      icon: "🏄",
      title: "Bali",
      subtitle: "Outdoor adventures"
    },

    {
      icon: "🎨",
      title: "Kyoto",
      subtitle: "Art & history"
    },

    {
      icon: "🍷",
      title: "Tuscany",
      subtitle: "Wine tasting"
    }

  ],

  services: [

    {
      icon: "📷",
      title: "Photography",
      subtitle: "Professional photographers"
    },

    {
      icon: "🧑‍🍳",
      title: "Private Chef",
      subtitle: "Meals prepared at home"
    },

    {
      icon: "💆",
      title: "Massage",
      subtitle: "Relax & unwind"
    },

    {
      icon: "💄",
      title: "Make-up",
      subtitle: "Beauty professionals"
    }

  ]

};

/* ==========================================================
   COMPONENT
========================================================== */

export default function SearchPopup({

  type,

  page = "homes",

  close,

  destination,

  setDestination,

  setDate,

  guests,

  setGuests,

  serviceType,

  setServiceType

}) {

  /* ==========================================================
     TODAY
  ========================================================== */

  const today = useMemo(() => {

    const now = new Date();

    now.setHours(0, 0, 0, 0);

    return now;

  }, []);

  /* ==========================================================
     DATE LIMITS
  ========================================================== */

  const minimumMonth = useMemo(() => {

    return new Date(

      today.getFullYear(),

      today.getMonth(),

      1

    );

  }, [today]);

  const maximumMonth = useMemo(() => {

    return new Date(

      today.getFullYear() + 2,

      today.getMonth(),

      1

    );

  }, [today]);

  /* ==========================================================
     LOCAL STATE
  ========================================================== */

  const [currentMonth, setCurrentMonth] = useState(

    new Date(

      today.getFullYear(),

      today.getMonth(),

      1

    )

  );

  const [calendarMode, setCalendarMode] =

    useState("dates");

  const [flexibleStay, setFlexibleStay] =

    useState("Weekend");

  const [selectedFlexibility, setSelectedFlexibility] =

    useState(0);

  const [selectedFlexibleMonth, setSelectedFlexibleMonth] =

    useState(

      new Date(

        today.getFullYear(),

        today.getMonth(),

        1

      )

    );

  const [selectedLocation, setSelectedLocation] =

    useState(destination || "");

  const [selectedService, setSelectedService] =

    useState(serviceType || "");

  const [guestData, setGuestData] = useState({

    Adults: guests?.Adults ?? 0,

    Children: guests?.Children ?? 0,

    Infants: guests?.Infants ?? 0,

    Pets: guests?.Pets ?? 0

  });

  const [checkIn, setCheckIn] = useState(null);

  const [checkOut, setCheckOut] = useState(null);

  /* ==========================================================
     CLOSE ON ESC
  ========================================================== */

  useEffect(() => {

    function handleEscape(event) {

      if (event.key === "Escape") {

        close?.();

      }

    }

    window.addEventListener(

      "keydown",

      handleEscape

    );

    return () =>

      window.removeEventListener(

        "keydown",

        handleEscape

      );

  }, [

    close

  ]);

  /* ==========================================================
     DATE HELPERS
  ========================================================== */

  function isBeforeToday(day) {

    return day.getTime() < today.getTime();

  }

  function isSameDate(a, b) {

    if (!a || !b) {

      return false;

    }

    return (

      a.getDate() === b.getDate() &&

      a.getMonth() === b.getMonth() &&

      a.getFullYear() === b.getFullYear()

    );

  }

  function formatDate(value) {

    if (!value) {

      return "";

    }

    return value.toLocaleDateString(

      "en-US",

      {

        day: "numeric",

        month: "short"

      }

    );

  }

  function formatFlexibilityText(value) {

    if (!value || value === 0) {

      return "";

    }

    return ` ±${value}`;

  }

  function formatFlexibleLabel(month, stayType) {

    if (!month || !stayType) {

      return "Flexible dates";

    }

    const monthName = month.toLocaleString(

      "en-US",

      {

        month: "long"

      }

    );

    return `${stayType} in ${monthName}`;

  }

  function monthTitle(month) {

    return month.toLocaleDateString(

      "en-US",

      {

        month: "long",

        year: "numeric"

      }

    );

  }

    /* ==========================================================
     BUILD MONTH
  ========================================================== */

  function buildMonth(monthDate) {

    const year = monthDate.getFullYear();

    const month = monthDate.getMonth();

    const firstDay = new Date(

      year,

      month,

      1

    );

    const lastDay = new Date(

      year,

      month + 1,

      0

    );

    const totalDays = lastDay.getDate();

    const startWeekday = firstDay.getDay();

    const cells = [];

    for (

      let i = 0;

      i < startWeekday;

      i++

    ) {

      cells.push(null);

    }

    for (

      let day = 1;

      day <= totalDays;

      day++

    ) {

      cells.push(

        new Date(

          year,

          month,

          day

        )

      );

    }

    while (

      cells.length % 7 !== 0

    ) {

      cells.push(null);

    }

    return cells;

  }

  /* ==========================================================
     MONTHS DISPLAYED
  ========================================================== */

  const leftMonth = currentMonth;

  const rightMonth = useMemo(() => {

    return new Date(

      currentMonth.getFullYear(),

      currentMonth.getMonth() + 1,

      1

    );

  }, [

    currentMonth

  ]);

  const leftDays = useMemo(() => {

    return buildMonth(leftMonth);

  }, [

    leftMonth

  ]);

  const rightDays = useMemo(() => {

    return buildMonth(rightMonth);

  }, [

    rightMonth

  ]);

  const showSingleMonth =

    page === "experiences" ||

    page === "services";

  const quickDateOptions = useMemo(() => {

    const tomorrow = new Date(today);

    tomorrow.setDate(today.getDate() + 1);

    const weekendStart = new Date(today);

    weekendStart.setDate(

      today.getDate() + ((5 - today.getDay() + 7) % 7)

    );

    const weekendEnd = new Date(weekendStart);

    weekendEnd.setDate(weekendStart.getDate() + 2);

    return [

      {

        label: "Today",

        value: formatShortDate(today),

        start: today,

        end: null

      },

      {

        label: "Tomorrow",

        value: formatShortDate(tomorrow),

        start: tomorrow,

        end: null

      },

      {

        label: "This weekend",

        value: formatDateRange(weekendStart, weekendEnd),

        start: weekendStart,

        end: weekendEnd

      }

    ];

  }, [today]);

  /* ==========================================================
     MONTH NAVIGATION
  ========================================================== */

  function previousMonth() {

    const previous = new Date(

      currentMonth.getFullYear(),

      currentMonth.getMonth() - 1,

      1

    );

    if (

      previous < minimumMonth

    ) {

      return;

    }

    setCurrentMonth(previous);

  }

  function nextMonth() {

    const next = new Date(

      currentMonth.getFullYear(),

      currentMonth.getMonth() + 1,

      1

    );

    if (

      next > maximumMonth

    ) {

      return;

    }

    setCurrentMonth(next);

  }

  const canGoPrevious =

    currentMonth > minimumMonth;

  const canGoNext =

    currentMonth < maximumMonth;

  /* ==========================================================
     DATE SELECTION
  ========================================================== */

  function selectDate(day) {

    if (!day) {

      return;

    }

    if (

      isBeforeToday(day)

    ) {

      return;

    }

    setSelectedFlexibility(0);

    if (!checkIn) {

      setCheckIn(day);

      setCheckOut(null);

      return;

    }

    if (

      checkIn &&

      !checkOut &&

      day > checkIn

    ) {

      setCheckOut(day);

      return;

    }

    setCheckIn(day);

    setCheckOut(null);

  }

  /* ==========================================================
     RANGE CHECK
  ========================================================== */

  function insideRange(day) {

    if (

      !checkIn ||

      !checkOut

    ) {

      return false;

    }

    return (

      day >= checkIn &&

      day <= checkOut

    );

  }

  /* ==========================================================
     UPDATE SEARCH BAR DATE
  ========================================================== */

  useEffect(() => {

    if (!setDate) {

      return;

    }

    if (

      checkIn &&

      checkOut

    ) {

      setDate(

        `${formatDate(checkIn)} - ${formatDate(checkOut)}${formatFlexibilityText(selectedFlexibility)}`

      );

    }

    else if (

      checkIn

    ) {

      setDate(

        `${formatDate(checkIn)}${formatFlexibilityText(selectedFlexibility)}`

      );

    }

    else {

      setDate("");

    }

  }, [

    checkIn,

    checkOut,

    setDate

  ]);

  useEffect(() => {

    if (!setDate || calendarMode !== "flexible") {

      return;

    }

    if (selectedFlexibleMonth) {

      setDate(

        formatFlexibleLabel(

          selectedFlexibleMonth,

          flexibleStay

        )

      );

    }

  }, [

    selectedFlexibleMonth,

    flexibleStay,

    calendarMode,

    setDate

  ]);

  /* ==========================================================
     FLEXIBLE MONTHS
  ========================================================== */

  const flexibleMonths = useMemo(() => {

    const months = [];

    for (

      let i = 0;

      i < 12;

      i++

    ) {

      months.push(

        new Date(

          today.getFullYear(),

          today.getMonth() + i,

          1

        )

      );

    }

    return months;

  }, [

    today

  ]);

  /* ==========================================================
     FLEXIBLE MONTH CLICK
  ========================================================== */

  function buildFlexibleRange(month, stayType) {

    const rangeStart = new Date(

      month.getFullYear(),

      month.getMonth(),

      1

    );

    const rangeEnd = new Date(rangeStart);

    switch (stayType) {

      case "Weekend": {

        let startDay = new Date(rangeStart);

        if (

          rangeStart.getFullYear() === today.getFullYear() &&

          rangeStart.getMonth() === today.getMonth()

        ) {

          startDay = new Date(today);

        }

        const dayOfWeek = startDay.getDay();

        const daysToFriday = (5 - dayOfWeek + 7) % 7;

        startDay.setDate(startDay.getDate() + daysToFriday);

        if (startDay.getMonth() !== month.getMonth()) {

          startDay = new Date(rangeStart);

          const firstDayOfWeek = startDay.getDay();

          const daysToFirstFriday = (5 - firstDayOfWeek + 7) % 7;

          startDay.setDate(startDay.getDate() + daysToFirstFriday);

        }

        rangeEnd.setTime(startDay.getTime());

        rangeEnd.setDate(startDay.getDate() + 2);

        return {

          start: startDay,

          end: rangeEnd

        };

      }

      case "Week": {

        rangeEnd.setDate(rangeStart.getDate() + 6);

        break;

      }

      case "Month": {

        rangeEnd.setMonth(rangeEnd.getMonth() + 1);

        rangeEnd.setDate(0);

        break;

      }

      default: {

        rangeEnd.setDate(rangeStart.getDate() + 6);

      }

    }

    return {

      start: rangeStart,

      end: rangeEnd

    };

  }

  function chooseFlexibleMonth(month) {

    setSelectedFlexibleMonth(month);

  }

  useEffect(() => {

    if (!selectedFlexibleMonth) {

      return;

    }

    const { start, end } = buildFlexibleRange(

      selectedFlexibleMonth,

      flexibleStay

    );

    setCheckIn(start);

    setCheckOut(end);

  }, [selectedFlexibleMonth, flexibleStay]);

    /* ==========================================================
     LOCATION SELECT
  ========================================================== */

  function chooseDestination(location) {

    setSelectedLocation(location.title);

    if (setDestination) {

      setDestination(location.title);

    }

  }

  function selectQuickDate(option) {

    setSelectedFlexibility(0);

    setCheckIn(option.start);

    setCheckOut(option.end);

    setSelectedFlexibleMonth(

      new Date(

        option.start.getFullYear(),

        option.start.getMonth(),

        1

      )

    );

  }

  function handleCalendarModeChange(mode) {

    setCalendarMode(mode);

    if (mode === "dates" && checkIn) {

      setCurrentMonth(

        new Date(

          checkIn.getFullYear(),

          checkIn.getMonth(),

          1

        )

      );

    }

    if (mode === "flexible") {

      setSelectedFlexibility(0);

      const targetMonth =

        checkIn ||

        new Date(

          today.getFullYear(),

          today.getMonth(),

          1

        );

      setSelectedFlexibleMonth(

        new Date(

          targetMonth.getFullYear(),

          targetMonth.getMonth(),

          1

        )

      );

    }

  }

  /* ==========================================================
     GUEST COUNTER
  ========================================================== */

  function updateGuest(type, change) {

    const updated = {

      ...guestData,

      [type]: Math.max(

        0,

        guestData[type] + change

      )

    };

    setGuestData(updated);

    setGuests?.(updated);

  }

  /* ==========================================================
     SERVICE SELECT
  ========================================================== */

  function toggleService(service) {

    const value =

      selectedService === service

        ? ""

        : service;

    setSelectedService(value);

    setServiceType?.(value);

  }

  /* ==========================================================
     DAY CLASS
  ========================================================== */

  function getDayClass(day) {

    if (!day) {

      return "empty";

    }

    if (isBeforeToday(day)) {

      return "disabled";

    }

    if (isSameDate(day, checkIn)) {

      return "checkin";

    }

    if (isSameDate(day, checkOut)) {

      return "checkout";

    }

    if (insideRange(day)) {

      return "inside-range";

    }

    return "";

  }

  /* ==========================================================
     MONTH RENDERER
  ========================================================== */

  function renderMonth(month, days) {

    return (

      <div className="month-box">

        <h3 className="month-title">

          {monthTitle(month)}

        </h3>

        <div className="weekdays">

          {

            WEEK_DAYS.map(day => (

              <span key={day}>

                {day}

              </span>

            ))

          }

        </div>

        <div className="calendar-days">

          {

            days.map((day, index) => (

              day === null

                ?

                <div

                  key={index}

                  className="calendar-empty"

                />

                :

                <button

                  key={day.toISOString()}

                  type="button"

                  disabled={isBeforeToday(day)}

                  className={getDayClass(day)}

                  onClick={() =>

                    selectDate(day)

                  }

                >

                  {day.getDate()}

                </button>

            ))

          }

        </div>

      </div>

    );

  }

  /* ==========================================================
     GUEST TYPES
  ========================================================== */

  const guestTypes =

    page === "experiences"

      ?

      [

        {

          key: "Adults",

          title: "Adults",

          subtitle: "Ages 13 or above"

        },

        {

          key: "Children",

          title: "Children",

          subtitle: "Ages 2–12"

        },

        {

          key: "Infants",

          title: "Infants",

          subtitle: "Under 2"

        }

      ]

      :

      [

        {

          key: "Adults",

          title: "Adults",

          subtitle: "Ages 13 or above"

        },

        {

          key: "Children",

          title: "Children",

          subtitle: "Ages 2–12"

        },

        {

          key: "Infants",

          title: "Infants",

          subtitle: "Under 2"

        },

        {

          key: "Pets",

          title: "Pets",

          subtitle: "Bringing a service animal?"

        }

      ];

        /* ==========================================================
     WHEN POPUP
  ========================================================== */

  if (type === "when") {

    return (

      <div

        className={`popup calendar-popup ${

          showSingleMonth

            ? "single-month-popup"

            : ""

        }`}

      >

        {/* ================= HEADER TABS ================= */}

        <div className="calendar-tabs">

          <button

            type="button"

            className={

              calendarMode === "dates"

                ? "tab-active"

                : ""

            }

            onClick={() =>

              handleCalendarModeChange("dates")

            }

          >

            Dates

          </button>

          <button

            type="button"

            className={

              calendarMode === "flexible"

                ? "tab-active"

                : ""

            }

            onClick={() =>

              handleCalendarModeChange("flexible")

            }

          >

            Flexible

          </button>

        </div>

        {

          calendarMode === "dates"

            ?

            <>

              {/* ================= CALENDAR ================= */}

              <div

                className={`calendar-top ${

                  showSingleMonth

                    ? "single-month-calendar"

                    : ""

                }`}

              >

                {

                  showSingleMonth &&

                  <div className="quick-date-options">

                    {

                      quickDateOptions.map(option => (

                        <button

                          key={option.label}

                          type="button"

                          className={

                            isSameDate(checkIn, option.start) &&

                            (

                              option.end

                                ? isSameDate(checkOut, option.end)

                                : !checkOut

                            )

                              ? "selected"

                              : ""

                          }

                          onClick={() =>

                            selectQuickDate(option)

                          }

                        >

                          <strong>{option.label}</strong>

                          <span>{option.value}</span>

                        </button>

                      ))

                    }

                  </div>

                }

                <button

                  type="button"

                  className="month-arrow"

                  disabled={!canGoPrevious}

                  onClick={previousMonth}

                >

                  <ChevronLeft size={22} />

                </button>

                <div className="calendar-container">

                  {

                    renderMonth(

                      leftMonth,

                      leftDays

                    )

                  }

                  {

                    !showSingleMonth &&

                    renderMonth(

                      rightMonth,

                      rightDays

                    )

                  }

                </div>

                <button

                  type="button"

                  className="month-arrow"

                  disabled={!canGoNext}

                  onClick={nextMonth}

                >

                  <ChevronRight size={22} />

                </button>

              </div>

              {/* ================= FLEXIBILITY ================= */}

              <div className="date-options">

                {

                  DATE_FLEXIBILITY.map(option => (

                    <button

                      key={option.label}

                      type="button"

                      className={

                        selectedFlexibility === option.value

                          ? "selected"

                          : ""

                      }

                      onClick={() =>

                        setSelectedFlexibility(

                          option.value

                        )

                      }

                    >

                      {option.label}

                    </button>

                  ))

                }

              </div>

            </>

            :

            <>

              {/* ================= FLEXIBLE STAY ================= */}

              <div className="flexible-panel">

                <h2>

                  How long would you like to stay?

                </h2>

                <div className="stay-buttons">

                  {

                    FLEXIBLE_OPTIONS.map(option => (

                      <button

                        key={option}

                        type="button"

                        className={

                          flexibleStay === option

                            ? "selected"

                            : ""

                        }

                        onClick={() =>

                          setFlexibleStay(option)

                        }

                      >

                        {option}

                      </button>

                    ))

                  }

                </div>

                <h2>

                  When do you want to go?

                </h2>

                <div className="month-scroll">

                                      {

                    flexibleMonths.map(month => (

                      <button

                        key={month.toISOString()}

                        type="button"

                        className={

                          `month-card ${

                            selectedFlexibleMonth &&

                            selectedFlexibleMonth.getMonth() === month.getMonth() &&

                            selectedFlexibleMonth.getFullYear() === month.getFullYear()

                              ? "selected"

                              : ""

                          }`

                        }

                        onClick={() =>

                          chooseFlexibleMonth(month)

                        }

                      >

                        <div className="calendar-icon">

                          <Calendar size={34} />

                        </div>

                        <h3>

                          {

                            month.toLocaleString(

                              "en-US",

                              {

                                month: "long"

                              }

                            )

                          }

                        </h3>

                        <p>

                          {month.getFullYear()}

                        </p>

                      </button>

                    ))

                  }

                </div>

              </div>

            </>

        }

      </div>

    );

  }

  /* ==========================================================
     WHERE POPUP
  ========================================================== */

  if (type === "where") {

    return (

      <div className="popup location-popup">

        <h2>

          Suggested destinations

        </h2>

        <div className="location-list">

          {

            LOCATION_SUGGESTIONS[page].map(location => (

              <button

                key={location.title}

                type="button"

                className={

                  `location-card ${

                    selectedLocation === location.title

                      ? "selected"

                      : ""

                  }`

                }

                onClick={() =>

                  chooseDestination(location)

                }

              >

                <span className="location-icon">

                  {location.icon}

                </span>

                <div>

                  <h3>

                    {location.title}

                  </h3>

                  <p>

                    {location.subtitle}

                  </p>

                </div>

              </button>

            ))

          }

        </div>

      </div>

    );

  }

  /* ==========================================================
     WHO POPUP
  ========================================================== */

  if (type === "who") {

    return (

      <div className="popup guest-popup">

        {

          guestTypes.map(item => (

            <div

              key={item.key}

              className="guest-row"

            >
                
                              <div>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.subtitle}

                </p>

              </div>

              <div className="counter">

                <button

                  type="button"

                  disabled={guestData[item.key] === 0}

                  onClick={() =>

                    updateGuest(

                      item.key,

                      -1

                    )

                  }

                >

                  <Minus size={16} />

                </button>

                <span>

                  {guestData[item.key]}

                </span>

                <button

                  type="button"

                  onClick={() =>

                    updateGuest(

                      item.key,

                      1

                    )

                  }

                >

                  <Plus size={16} />

                </button>

              </div>

            </div>

          ))

        }

      </div>

    );

  }

  /* ==========================================================
     SERVICE POPUP
  ========================================================== */

  if (type === "service") {

    return (

      <div className="popup service-popup">

        <h2>

          Type of service

        </h2>

        <div className="service-grid">

          {

            SERVICE_TYPES.map(service => (

              <button

                key={service}

                type="button"

                className={

                  `service-chip ${

                    selectedService === service

                      ? "selected"

                      : ""

                  }`

                }

                onClick={() =>

                  toggleService(service)

                }

              >

                {service}

              </button>

            ))

          }

        </div>

        {

          selectedService && (

            <button

              type="button"

              className="service-search"

              onClick={close}

            >

              <Search size={18} />

              <span>

                Search

              </span>

            </button>

          )

        }

      </div>

    );

  }

  /* ==========================================================
     FALLBACK
  ========================================================== */

  return null;

}

import {
  Leaf,
  Sun,
  Droplets,
  Car,
  Recycle,
  Wind,
  Trees,
  BatteryCharging
} from "lucide-react";

import "./EcoScore.css";

/* ==========================================================
   FEATURE ICONS
========================================================== */

const featureIcons = {

  "Solar Energy": Sun,

  "Rainwater Harvesting": Droplets,

  "EV Charging": Car,

  Recycling: Recycle,

  "Wind Energy": Wind,

  "Tree Plantation": Trees,

  "Battery Storage": BatteryCharging

};

/* ==========================================================
   ECO SCORE COMPONENT
========================================================== */

export default function EcoScore({

  ecoScore = 0,

  carbonLevel = "Moderate",

  carbonPerNight = 0,

  ecoFeatures = [],

  onClick

}) {

  /* ========================================================
     SCORE COLOR
  ======================================================== */

  function getScoreClass(score) {

    if (score >= 90) {

      return "excellent";

    }

    if (score >= 75) {

      return "good";

    }

    if (score >= 60) {

      return "moderate";

    }

    return "poor";

  }

  const scoreClass = getScoreClass(ecoScore);

  return (

    <button

      type="button"

      className={`

        eco-score

        ${scoreClass}

      `}

      onClick={onClick}

    >

      {/* ====================================================
         HEADER
      ===================================================== */}

      <div className="eco-header">

        <div className="eco-title">

          <Leaf
            size={18}
            strokeWidth={2.2}
          />

          <span>

            Eco Score

          </span>

        </div>

        <span className="eco-value">

          {ecoScore}

        </span>

      </div>

      {/* ====================================================
         STATUS
      ===================================================== */}

      <div className="eco-status">

        <span className="eco-badge">

          {carbonLevel}

        </span>

        <span className="eco-carbon">

          {carbonPerNight} kg CO₂/night

        </span>

      </div>

      {/* ====================================================
         FEATURES
      ===================================================== */}

      <div className="eco-features">

        {

          ecoFeatures

            .slice(0, 3)

            .map((feature) => {

              const Icon =

                featureIcons[feature] ||

                Leaf;

              return (

                <div

                  key={feature}

                  className="eco-chip"

                >

                  <Icon
                    size={14}
                  />

                  <span>

                    {feature}

                  </span>

                </div>

              );

            })

        }

      </div>

    </button>

  );

}
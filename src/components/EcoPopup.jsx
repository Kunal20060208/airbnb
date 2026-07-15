import {
    Leaf,
    Trees,
    Sun,
    Car,
    Wind,
    Droplets,
    Recycle,
    BatteryCharging,
    X,
    Info
} from "lucide-react";

import "./EcoPopup.css";

/* ==========================================================
   ICON MAP
========================================================== */

const icons = {

    "Solar Energy": Sun,

    "Rainwater Harvesting": Droplets,

    "EV Charging": Car,

    Recycling: Recycle,

    "Wind Energy": Wind,

    "Tree Plantation": Trees,

    "Battery Storage": BatteryCharging

};

/* ==========================================================
   ECO POPUP
========================================================== */

export default function EcoPopup({

    ecoScore,

    carbonLevel,

    carbonPerNight,

    ecoFeatures,

    close

}){

    function getColor(score){

        if(score>=90){

            return "#2e7d32";

        }

        if(score>=75){

            return "#43a047";

        }

        if(score>=60){

            return "#fb8c00";

        }

        return "#d32f2f";

    }

    const color=getColor(ecoScore);

    return(

        <div className="eco-popup-overlay">

            <div className="eco-popup">

                {/* ================= CLOSE ================= */}

                <button

                    className="eco-close"

                    onClick={close}

                >

                    <X size={18}/>

                </button>

                {/* ================= HEADER ================= */}

                <div className="eco-header">

                    <div

                        className="eco-circle"

                        style={{

                            borderColor:color,

                            color:color

                        }}

                    >

                        <Leaf size={36}/>

                        <span>

                            {ecoScore}

                        </span>

                    </div>

                    <div>

                        <h2>

                            Sustainability Score

                        </h2>

                        <p>

                            This property follows environmentally
                            friendly practices that help reduce
                            carbon emissions.

                        </p>

                    </div>

                </div>

                {/* ================= SCORE ================= */}

                <div className="eco-summary">

                    <div className="summary-card">

                        <span>

                            Carbon Level

                        </span>

                        <strong>

                            {carbonLevel}

                        </strong>

                    </div>

                    <div className="summary-card">

                        <span>

                            CO₂ / Night

                        </span>

                        <strong>

                            {carbonPerNight} kg

                        </strong>

                    </div>

                </div>

                {/* ================= FEATURES ================= */}

                <div className="eco-section">

                    <h3>

                        Eco Features

                    </h3>

                    <div className="eco-grid">

                        {

                            ecoFeatures.map(feature=>{

                                const Icon=

                                    icons[feature] ||

                                    Leaf;

                                return(

                                    <div

                                        key={feature}

                                        className="eco-feature"

                                    >

                                        <Icon size={20}/>

                                        <span>

                                            {feature}

                                        </span>

                                    </div>

                                );

                            })

                        }

                    </div>

                </div>

                {/* ================= INFORMATION ================= */}

                <div className="eco-section">

                    <h3>

                        Sustainability Information

                    </h3>

                    <div className="eco-info">

                        <Info size={18}/>

                        <p>

                            Eco Score is calculated using renewable
                            energy usage, waste management,
                            water conservation, transportation,
                            and estimated carbon emissions.

                        </p>

                    </div>

                </div>

                {/* ================= TIPS ================= */}

                <div className="eco-section">

                    <h3>

                        How you can help 🌍

                    </h3>

                    <ul className="eco-tips">

                        <li>

                            Turn off lights when leaving.

                        </li>

                        <li>

                            Reuse towels during your stay.

                        </li>

                        <li>

                            Separate recyclable waste.

                        </li>

                        <li>

                            Walk or use public transport whenever possible.

                        </li>

                    </ul>

                </div>

            </div>

        </div>

    );

}
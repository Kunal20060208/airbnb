import "./PageLoader.css";

export default function PageLoader() {

  return (

    <div className="page-loader">

      <div className="loader-content">

        {/* ================= LOADER ================= */}

        <div className="loader-spinner">

          <div className="loader-ring"></div>

          <div className="loader-ring delay"></div>

        </div>

        {/* ================= TEXT ================= */}

        <h2>

          Loading...

        </h2>

        <p>

          Preparing your Airbnb experience

        </p>

      </div>

    </div>

  );

}
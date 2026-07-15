import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import logo from "../assets/airbnb-logo.png";
import "./CoHost.css";

export default function CoHost() {

  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();

  return (

    <div className="cohost-page">

      {/* --- Header --- */}

      <header className="cohost-header">

        <div className="cohost-logo">

          <img
            src={logo}
            alt="Airbnb Logo"
            style={{
              display: "block",
              height: "32px",
              width: "auto"
            }}
          />

        </div>

        <button
          className="cohost-exit-btn"
          onClick={() => navigate("/coming-soon")}
        >
          Exit
        </button>

      </header>

      {/* --- Scrollable Middle Section --- */}

      <main className="cohost-main">

        <div className="cohost-content">

          <h1>
            Find someone to help you host
          </h1>

          <p className="cohost-subtitle">
            Get help managing your home and guests from a co-host – a top-rated Airbnb host.
          </p>

          <div className="cohost-features">

            <div className="feature-item">

              <div className="feature-icon">
                📋
              </div>

              <div className="feature-text">

                <h3>
                  Choose the help you need
                </h3>

                <p>
                  Let a co-host handle everything, or choose from a list of services.
                </p>

              </div>

            </div>

            <div className="feature-item">

              <div className="feature-icon">
                🔑
              </div>

              <div className="feature-text">

                <h3>
                  Get on-site support
                </h3>

                <p>
                  Co-hosts can be at your home to help when you need it.
                </p>

              </div>

            </div>

            <div className="feature-item">

              <div className="feature-icon">
                🖼️
              </div>

              <div className="feature-text">

                <h3>
                  Make the most of your home
                </h3>

                <p>
                  Get help styling your space, taking photos and writing a catchy description.
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

      {/* --- Footer --- */}

      <footer className="cohost-footer">

        <button
          className="cohost-submit-btn"
          onClick={() => setShowLogin(true)}
        >
          Log in to continue
        </button>

      </footer>

      {showLogin && (

        <LoginModal
          onClose={() => setShowLogin(false)}
          showClose={true}
        />

      )}

    </div>

  );

}
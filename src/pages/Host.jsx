import Header from "../components/Header"; // Separate from Navbar as requested
import Footer from "../components/Footer"; // Reusing your global application footer
import LoginModal from "../components/LoginModal";
import "./Host.css";

export default function Host() {
  const backgroundCards = [
    { name: "TORONTO", img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400" },
    { name: "MEDELLÍN", img: "https://images.unsplash.com/photo-1583390949103-28118c35f63f?w=400" },
    { name: "PARIS", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400" },
    { name: "MIAMI", img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=400" },
    { name: "BUDAPEST", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400" },
    { name: "MONTRÉAL", img: "https://images.unsplash.com/photo-1519178125841-f5b214f447d2?w=400" },
    { name: "EDINBURGH", img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400" },
    { name: "SAN DIEGO", img: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=400" }
  ];

  const totalGridItems = Array(4).fill(backgroundCards).flat();

  return (
    <div className="host-page">
      {/* Imported Global Header component (distinct from Navbar) */}
      <Header />

      <main className="host-main">
        <div className="collage-container">
          <div className="collage-grid-bg">
            {totalGridItems.map((card, index) => (
              <div key={index} className="collage-card-portrait">
                <img 
                  src={card.img} 
                  alt={card.name} 
                  className="card-bg-image" 
                />
                <span className="collage-card-label">{card.name}</span>
              </div>
            ))}
          </div>

          {/* Persistent embedded Login module overlay */}
          <div className="fixed-login-container">
            <LoginModal 
              onClose={() => {}} 
              showClose={false} 
              className="embedded-login-modal"
            />
          </div>
        </div>
      </main>

      {/* Imported Footer component sitting organically at the bottom of the page */}
      <Footer />
    </div>
  );
}

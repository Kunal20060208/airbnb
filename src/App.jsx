import { lazy, Suspense } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import PageLoader from "./components/PageLoader";

/* ==========================================================
   Lazy Loaded Pages
========================================================== */

const All = lazy(() =>
  import("./pages/All")
);

const Home = lazy(() =>
  import("./pages/Home")
);

const Experiences = lazy(() =>
  import("./pages/Experiences")
);

const Services = lazy(() =>
  import("./pages/Services")
);

const ComingSoon = lazy(() =>
  import("./pages/ComingSoon")
);

const Host = lazy(() =>
  import("./pages/Host")
);

const CoHost = lazy(() =>
  import("./pages/CoHost")
);

/* ==========================================================
   APP
========================================================== */

function App() {

  return (

    <BrowserRouter>

      <Suspense
        fallback={<PageLoader />}
      >

        <Routes>

          {/* ================= HOME ================= */}

          <Route
            path="/"
            element={<All />}
          />

          {/* ================= HOMES ================= */}

          <Route
            path="/homes"
            element={<Home />}
          />

          {/* ================= EXPERIENCES ================= */}

          <Route
            path="/experiences"
            element={<Experiences />}
          />

          {/* ================= SERVICES ================= */}

          <Route
            path="/services"
            element={<Services />}
          />

          {/* ================= HOST ================= */}

          <Route
            path="/host"
            element={<Host />}
          />

          {/* ================= CO-HOST ================= */}

          <Route
            path="/cohost"
            element={<CoHost />}
          />

          {/* ================= COMING SOON ================= */}

          <Route
            path="/coming-soon"
            element={<ComingSoon />}
          />

          <Route
            path="/coming-soon/help-centre"
            element={<ComingSoon />}
          />

          {/* ================= 404 ================= */}

          <Route
            path="*"
            element={<ComingSoon />}
          />

        </Routes>

      </Suspense>

    </BrowserRouter>

  );

}

export default App;
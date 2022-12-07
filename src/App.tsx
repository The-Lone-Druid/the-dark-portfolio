import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./layouts/default-exports";
import {
  AboutRoute,
  CloudServicesRoute,
  HomeRoute,
  ServicesRoute,
  SolutionsRoute
} from "./pages/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* public layout */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomeRoute />} />
            <Route path="about" element={<AboutRoute />} />
            <Route path="services" element={<ServicesRoute />}>
              <Route path="cloud-services" element={<CloudServicesRoute />} />
              <Route path="solutions" element={<SolutionsRoute />} />
            </Route>
          </Route>
          {/* auth layout */}
          {/* <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomeRoute />} />
            <Route path="about" element={<AboutRoute />} />
            <Route path="services" element={<ServicesRoute />}>
              <Route path="cloud-services" element={<CloudServicesRoute />} />
              <Route path="solutions" element={<SolutionsRoute />} />
            </Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

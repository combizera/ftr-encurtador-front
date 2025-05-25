import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Redirect } from "./pages/Redirect";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirect" element={<Redirect to="/final" />} />
      </Routes>
    </BrowserRouter>
  );
}

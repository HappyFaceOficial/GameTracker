import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageLogin } from "./pages/PageLogin";
import { PageRegister } from "./pages/PageRegister";
import { PagePrincipal } from "./pages/PagePrincipal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PageLogin />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/menu" element={<PagePrincipal />} />
      </Routes>
    </Router>
  );
}

export default App;
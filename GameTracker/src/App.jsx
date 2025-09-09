import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageLogin } from "./pages/PageLogin";
import { PageRegister } from "./pages/PageRegister";
import { PagePrincipal } from "./pages/PagePrincipal";
import { PageGame } from "./pages/PageGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/menu" element={<PagePrincipal />} />
        <Route path="/game" element={<PageGame />} />
      </Routes>
    </Router>
  );
}

export default App;

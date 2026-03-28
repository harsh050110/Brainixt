import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Insights from "./pages/Insights/Insights";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </div>
  );
}

export default App;
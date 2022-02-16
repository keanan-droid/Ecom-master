import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { RegisterPage} from "./Pages/RegisterPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { RegisterPage} from "./Pages/RegisterPage"
import { CustomerServicePage } from "./Pages/CustomerServicePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/customer-care" element={<CustomerServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;

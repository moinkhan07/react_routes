import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Mail from "./components/Mail";
import Phone from "./components/Phone";
import PhoneLog from "./components/PhoneLog";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />}>
            <Route index element={<Mail />} />
            <Route path="mail" element={<Mail />} />
            <Route path="phone" element={<Phone />}>
              <Route path="log" element={<PhoneLog />} />
            </Route>
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

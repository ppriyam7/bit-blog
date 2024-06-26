import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/about" element={<About />} />;
        <Route path="/sign-in" element={<Signin />} />;
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />;
        </Route>
        <Route path="/projects" element={<Projects />} />;
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

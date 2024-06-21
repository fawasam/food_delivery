import { lazy, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

const Home = lazy(() => import("./pages/Home/Home"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder/PlaceOrder"));

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <> </>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        {location.pathname !== "/" ? (
          <Breadcrumb path={location.pathname} />
        ) : (
          ""
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/order" element={<PlaceOrder />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import NotFound from "./Components/noFound/NotFound";
import SignUp from "./Components/_auth/forms/SignUp";
import AuthLayout from "./Components/_auth/AuthLayout";
import Login from "./Components/_auth/forms/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Root from "./Components/_root/Root";
import AllMoveies from "./Components/allMoveies/AllMoveies";
import About from "./Components/about/About";
import ContactUs from "./Components/contactUs/ContactUs";
import Home from "./Components/home/Home";
import Move from "./Components/moveDetails/Move";
function App() {
  let user = localStorage.getItem("CurrentUser");

  const [currentUser, setCurrentUser] = useState(null);

  function ProtectedRoute(props) {
    if (currentUser) {
      return props.children;
    } else {
      return <Navigate to="home" />;
    }
  }

  function saveUserData() {
    setCurrentUser(JSON.stringify(user));
    localStorage.removeItem("email");
  }
  // logout

  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout saveUserData={saveUserData} />}>
          <Route path="signup" element={<SignUp />} />
          <Route
            path="/login"
            element={<Login saveUserData={saveUserData} />}
          />
          <Route path="" element={<Login saveUserData={saveUserData} />} />
        </Route>

        {/* Private Routes */}
        {user ? (
          <Route element={<Root />}>
            <>
              <Route path="/" element={<Home />} />
              <Route path="/move" element={<Move />}>
                <Route path=":id" element={<Move />} />
              </Route>
              <Route path="/movies" element={<AllMoveies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/home" element={<Home />} />
              <Route path="/movie" element={<Move />} />
              <Route path="*" element={<NotFound />} />
            </>
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </>
  );
}

export default App;

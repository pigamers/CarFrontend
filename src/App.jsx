import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import GetCar from "./pages/GetCar";
import SellCar from "./pages/SellCar";
import AboutUs from "./pages/AboutUs";
import { useSelector } from "react-redux";
import FullCarDetailPage from "./pages/FullCarDetailPage";
import ErrorPage from "./components/ErrorPage";
import PublicRoute from "./components/PublicRoute";
import ListeningScreen from "./components/ListeningScreen";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  const theme = useSelector(state => state.theme.defaultTheme);
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="getcar"
          element={<GetCar />}
        />
        <Route
          path="sellcar"
          element={<SellCar />}
        />
        <Route
          path="about"
          element={<AboutUs />}
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="forgotpassword"
          element={<ForgotPasswordPage />}
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/cardetail/:id"
          element={<FullCarDetailPage />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </div >
  )
}

export default App

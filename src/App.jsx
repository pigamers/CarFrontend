import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import GetCar from "./pages/GetCar";
import SellCar from "./pages/SellCar";
import AboutUs from "./pages/AboutUs";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FullCarDetailPage from "./pages/FullCarDetailPage";
import ErrorPage from "./components/ErrorPage";
import PublicRoute from "./components/PublicRoute";
// import ListeningScreen from "./components/ListeningScreen";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Profile from "./pages/Profile";

function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.defaultTheme);

  useEffect(() => {
    // Check if user's device is set to dark mode
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Set initial theme based on system preference
    if (darkModeMediaQuery.matches) {
      dispatch({ type: 'SET_THEME', payload: 'dark' });
    }

    // Listen for changes in system dark mode preference
    const handleThemeChange = (e) => {
      dispatch({ type: 'SET_THEME', payload: e.matches ? 'dark' : 'light' });
    };

    darkModeMediaQuery.addEventListener('change', handleThemeChange);

    // Cleanup listener when component unmounts
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, [dispatch]);

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
          path="user-profile"
          element={<Profile />}
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

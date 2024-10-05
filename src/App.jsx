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
import PrivateRoute from "./components/PrivateRoute";

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
            <PrivateRoute>
              <Login />
            </PrivateRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PrivateRoute>
              <Signup />
            </PrivateRoute>
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

import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import GetCar from "./pages/GetCar"
import SellCar from "./pages/SellCar"
import About from "./pages/About"
import { Provider } from "react-redux"
import store from "./utils/store"

function App() {

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="getcar" element={<GetCar />} />
          <Route path="sellcar" element={<SellCar />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Provider>
    </>
  )
}

export default App

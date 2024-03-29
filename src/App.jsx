import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./tabs/Home.jsx";
import MainLayout from "./components/MainLayout.jsx";
import { WeatherContextProvider } from "./context/WeatherContext.jsx";
import Weather from "./tabs/Weather.jsx";
function App() {
  return (
    <>
      <Toaster position="top-left" />
      <WeatherContextProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/weather" element={<Weather />}></Route>
          </Route>
        </Routes>
      </WeatherContextProvider>
    </>
  );
}

export default App;

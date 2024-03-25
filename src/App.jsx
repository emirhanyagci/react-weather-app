import { Routes, Route } from "react-router-dom";
import Home from "./tabs/Home.jsx";
import MainLayout from "./components/MainLayout.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/weather"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

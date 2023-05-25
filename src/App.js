import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Nav from "./components/nav/Sidebar";
import Home from "./modules/home/Home";
import NoPage from "./modules/page/NoPage";
// import NoPage from "./modules/page/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/">
            <Route path="NoPage" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

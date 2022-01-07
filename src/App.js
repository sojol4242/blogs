import Home from "./components/Home/Home";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import AllNews from "./components/Home/NewsCards/AllNews";
import NewsDetails from "./components/Home/NewsCards/NewsDetails";

function App() {
  return (
    <>
      {" "}
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/more__news" element={<AllNews />} />
        <Route path="/newsDetails/:id" element={<NewsDetails/>} />
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;

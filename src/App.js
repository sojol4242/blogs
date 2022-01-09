import Home from "./components/Home/Home";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import AllNews from "./components/Home/NewsCards/AllNews";
import NewsDetails from "./components/Home/NewsCards/NewsDetails";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const DataContext = createContext();
function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://inshortsapi.vercel.app/news?category=all")
      .then((res) => {
        setNews(res.data.data);
      
      });
  }, []);
  const contextData = { news, setNews }
  console.log(contextData);
  return (
    <>
      {" "}
      <DataContext.Provider value={contextData}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />

            <Route path="/more__news" element={<AllNews />} />
            <Route path="/newsDetails/:id" element={<NewsDetails />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;

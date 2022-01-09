import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import Spinner from "../../Shared/Spinner";
import FilterNews from "./FilterNews";
import MenuButton from "./MenuButton";
import { v4 as uuid4 } from "uuid";
import { DataContext } from "../../../App";
import NewsCard from "./NewsCard";

const AllNews = () => {
  const newsData = useContext(DataContext);
  const [categories, setCategories] = useState([]);
  const [filterNews, setFilterNews] = useState([]);

  // make filterable menu
  useEffect(() => {
    const allCategories = [
      "all",
      ...new Set(newsData.news.slice(0, 6).map((item) => item.author)),
    ];
    setCategories(allCategories);
  }, []);

  const filterItems = (category) => {
    if (category === "all") {
      setFilterNews(newsData.news);
      return;
    } else {
      const newNews = newsData.news.filter((item) => item.author === category);
      setFilterNews(newNews);
    }
    
  };
 
  return (
    <>
      <Navbar />

      <div className="container  flex flex-col justify-center items-center my-10 mx-auto md:container md:mx-auto xs:mx-auto">
        <div>
          <div className="mt-8 sm:text-center lg:text-center">
            <h1 className="text-4xl tracking-tight  uppercase font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Explore</span>{" "}
              <span className="block text-cyan-600 xl:inline">News</span>
            </h1>
          </div>
          <div className="my-12 flex justify-around items-center">
            {categories.map((category) => (
              <MenuButton
                items={category}
                key={uuid4}
                filterItems={filterItems}
              />
            ))}
          </div>
        </div>

        {newsData.news.length > 0 ? (
          <>
        
            <div className="container">
           
                 <div className={`${filterNews?"p-4 max-w-full grid gap-4 xs:max-auto  xs:grid-cols-1 xs:p-8 md:grid-cols-2 lg:gap-6 lg:grid-cols-3 xl:grid-cols-3":"none"}`}><FilterNews filterNews={filterNews} /> </div>
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default AllNews;

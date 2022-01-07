import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Shared/Spinner";
import NewsCard from "./NewsCard";

const NewsCards = () => {
 


 
  const [news, setNews] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://newsx.p.rapidapi.com/search",
      params: { limit: "10", skip: "0" },
      headers: {
        "x-rapidapi-host": "newsx.p.rapidapi.com",
        "x-rapidapi-key": "8c3fe34780mshb566ab307ab601dp1dfa42jsn4b0fd3073888",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setNews(response.data)
      })
      .catch(function (error) {
        console.error(error);
    
      });
  }, []);

  return (
    <div className="container  flex flex-col justify-center items-center my-10 mx-auto md:container md:mx-auto xs:mx-auto">
      <div className="my-10 sm:text-center lg:text-center">
        <h1 className="text-4xl tracking-tight  uppercase font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Explore</span>{" "}
          <span className="block text-cyan-600 xl:inline">News</span>
        </h1>
      </div>
      {news.length > 0 ? (
        <>
          <div className="container p-4 max-w-full grid gap-4 xs:max-auto  xs:grid-cols-1 xs:p-8 md:grid-cols-2 lg:gap-6 lg:grid-cols-3 xl:grid-cols-3">
            {news.splice(0,3).map((element, index) => (
              <NewsCard news={element} key={index} />
            ))}
          </div>
          <Link
            to="/more__news"
            type="button"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-cyan-500 hover:to-cyan-300 text-white px-3 py-2 mt-6 rounded-md transition duration-150 ease-out hover:ease-in font-bold uppercase text-xs flex"
          >
            More News
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </>
      ) : (
        <Spinner />
     
      )}
    </div>
  );
};

export default NewsCards;

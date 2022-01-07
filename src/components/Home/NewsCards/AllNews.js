import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import Spinner from '../../Shared/Spinner';
import NewsCard from './NewsCard';

const AllNews = () => {
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
      
      <>
      <Navbar/>
      
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
              {news.map((element, index) => (
                <NewsCard news={element} key={index} />
              ))}
            </div>
   
          </>
        ) : (
          <Spinner />
          // max-w-sm mx-auto  bg-white rounded-xl shadow-md   sm:flex sm:items-center
        )}
      </div></>
        
    );
};

export default AllNews;
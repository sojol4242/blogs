// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
 
const NewsDetails = () => {
  const [news, setNews] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
     axios.get('https://inshortsapi.vercel.app/news?category=all').then((res)=> {
      // setNews(res.data.results);
      setNews(res.data.data.find(news => news.author===id));
  // console.log();
     
     
  })
 
  }, []);
// const {author,title,content,imageUrl,date,time,url}=news;
  return (
    <main className="h-screen bg-cyan-100 p-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-lg font-semibold text-cyan-700  md:text-3xl">
            {news.title}
          </h1>
          <p className="text-sm leading-4 font-medium text-white sm:text-gray-500 dark:sm:text-gray-400">
            Written by {news.author}
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={news.imageUrl?news.imageUrl:"https://i.ibb.co/XxXM3wZ/360-F-434728286-OWQQv-AFo-XZLd-GHl-Obozsol-Neu-Sxhpr84.jpg"}
            alt=""
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          {/* <img src="/beach-house-interior-1.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/>
            <img src="/beach-house-interior-2.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/> */}
        </div>
        <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          {/* <dt className="sr-only">Reviews</dt> */}
          {/* <dd className="text-cyan-600 flex items-center dark:text-indigo-400">
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="mr-1 stroke-current dark:stroke-indigo-500"
            >
              <path
                d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>
              4.89 <span className="text-gray-400 font-normal">(128)</span>
            </span>
          </dd> */}
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center">
            {/* <svg
              width="2"
              height="2"
              aria-hidden="true"
              fill="currentColor"
              className="mx-3 text-gray-300"
            >
              <circle cx="1" cy="1" r="1" />
            </svg> */}
            {/* <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mr-1 text-dark-400 dark:text-gray-500"
              aria-hidden="true"
            >
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg> */}
            Publish at {news.date}
          </dd>
        </dl>
        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
         
            
             {/* { news.keywords.map((keyword ,i)=>   <span
              key={i}
              className="inline-block bg-cyan-200 rounded-full px-3 py-1 text-sm font-semibold text-dark-700 mr-2"
            >
              #{keyword}
            </span>)} */}
          
            <span
            
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #tag
            </span>
        
        </div>
        <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 text-dark-400 ">
          {news.content}
        </p>
      </div>
      <Link
        to="/more__news"
        type="button"
        className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-cyan-500 hover:to-cyan-300 text-white px-3 py-2 mt-6 rounded-md transition duration-150 ease-out hover:ease-in font-bold uppercase text-xs flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
        Back to news 
      </Link>
    </main>
  );
};

export default NewsDetails;

import React from "react";
import { Link } from "react-router-dom";
 
import { v4 as uuidv4 } from 'uuid';
const FilterNews = ({ filterNews }) => {
  // const { content, imageUrl, author, title } = filterNews;
  
 

  return (
    <>
   

      {filterNews.map((e ) => (
        <>
          <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden" key={uuidv4}>
            {/*max-w-sm mx-auto  bg-white rounded-xl shadow-md */}
            <div className="flex flex-col flex-wrap md:flex xs:">
              <div className="shrink md:shrink-0">
                {/* className="w-full h-16" */}
                <img
                  className="max-h-32 w-full"
                  src={
                    e.imageUrl
                      ? e.imageUrl
                      : "https://i.ibb.co/XxXM3wZ/360-F-434728286-OWQQv-AFo-XZLd-GHl-Obozsol-Neu-Sxhpr84.jpg"
                  }
                  alt={e.title}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-cyan-500 font-semibold">
                  {e.author}
                </div>
                <h4 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  {e.title}.
                </h4>
                <p className="mt-2 text-gray-500">
                  {e.content.slice(0, 98)}
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
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </p>
                <Link
                  to={`/newsDetails/${e.author}`}
                  className="w-32 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-cyan-500 hover:to-cyan-300 text-white px-3 py-2 mt-6 rounded-md transition duration-150 ease-out hover:ease-in font-bold uppercase text-xs  flex justify-center items-center"
                >
                  Read More{" "}
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
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default FilterNews;

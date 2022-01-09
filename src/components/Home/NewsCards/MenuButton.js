import React from "react";
 
const MenuButton = ({ items, filterItems }) => {
  console.log(items, filterItems);
  return (
  
      <button
      
        type="button"
        className="mx-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-cyan-500 hover:to-cyan-300 text-white px-3 py-1 mt-6 rounded-md transition duration-150 ease-out hover:ease-in uppercase text-xs  flex justify-center items-center"
        onClick={() => filterItems(items)}
      >
        {items}
      </button>
    
  );
};

export default MenuButton;

import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, price, id }) => {
  return (
    <Link to={`/catalogProduct/${id}`}>
      <div className="shadow-lg w-[350px] h-[385px]">
        <div>
          <img className="w-full h-[300px]" src={image} alt={title} />
        </div>
        <div className="flex items-center justify-center gap-12 py-5">
          <div className="flex flex-col gap-3">
            <h4 className="text-heroText font-Montserrat">{title}</h4>
            <span className="text-heroText font-Montserrat font-bold">
              {price} Azn
            </span>
          </div>
          <div>
            <button className="bg-heroText py-2 px-4 border-none outline-none text-white text-[12px] tracking-[1.5px] rounded-lg transition duration-200 opacity-80 hover:opacity-100">
              Səbətə əlavə et
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

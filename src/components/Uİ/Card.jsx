import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

const Card = (props) => {
  const { image, title, price, id, amount } = props;

  const { handleClick } = useContext(DataContext);

  return (
    <div className="shadow-lg w-[350px] h-[450px]">
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
        <div className="flex flex-col gap-5">
          <button
            onClick={() => handleClick(props)}
            className="bg-heroText py-2 px-4 border-none outline-none text-white text-[12px] tracking-[1.5px] rounded-lg transition duration-200 opacity-80 hover:opacity-100"
          >
            Səbətə əlavə et
          </button>
          <Link to={`/catalogProduct/${id}`}>
            <button className="bg-orange-700 py-2 px-4 border-none outline-none text-white text-[12px] tracking-[1.5px] rounded-lg transition duration-200 opacity-80 hover:opacity-100">
              Ətraflı Bax
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

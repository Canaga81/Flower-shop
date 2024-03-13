import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import CardBanksPhotos from "../../images/card-banks-photos.png";
import { FaLongArrowAltLeft } from "react-icons/fa";

const CatalogProduct = () => {
  const { products } = useContext(DataContext);

  // console.log(products);

  const { id } = useParams();

  const product = products.find((item) => item.id == Number(id));
  // console.log(products.id);
  //   console.log(product);

  if (!product) {
    return <div>Məhsul Yoxdur !</div>;
  }

  const { image, title, price } = product;

  return (
    <div className="w-full h-full">
      <div className="container mx-auto px-2 py-16">
        <div className="flex cr:flex-row flex-col gap-x-16 gap-y-16 justify-between items-center">
          <div className="sm:w-[540px] w-[full] sm:h-[420px] h-[300px]">
            <img className="w-full h-full" src={image} alt="" />
          </div>
          <div className="flex flex-col cr:items-start items-center gap-5">
            <h2 className="font-Montserrat sm:text-[28px] text-[22.2px]">
              Məhsulun Adı: <span className="pl-2 font-bold"> {title}</span>
            </h2>
            <p className="font-Montserrat sm:text-[28px] text-[22.2px]">
              Məhsulun Qiyməti:{" "}
              <span className="pl-2 font-bold"> {price} Azn</span>
            </p>

            <h3 className="sm:text-[24px] text-[20px] cr:text-start text-center">
              Metrolara çatdırılma <span className="font-bold">pulsuzdur.</span>{" "}
              Ancaq normalda çatdırılmanın qiymeti{" "}
              <span className="text-red-500 font-bold">1.50 Azn</span>{" "}
              olacaqdır.
            </h3>
            <img src={CardBanksPhotos} alt="" />
            <div className="flex gap-6 rd:flex-row flex-col items-center gap-y-7">
              <button className="rd:w-[180px] w-[240px] bg-heroText py-3 px-4 border-none outline-none text-white sm:text-[18px] text-[16px] tracking-[1.5px] rounded-lg transition duration-200 opacity-80 hover:opacity-100">
                Səbətə əlavə et
              </button>
              <Link to={'/catalog'}>
                <button className="rd:w-[170px] w-[240px] bg-red-500 flex gap-3 items-center py-3 px-4 border-none outline-none text-white sm:text-[18px] text-[16px] tracking-[1.5px] rounded-lg transition duration-200 opacity-80 hover:opacity-100">
                  <FaLongArrowAltLeft /> <p>Geri Qayıt</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogProduct;

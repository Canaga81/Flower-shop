import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import Card from "../Uİ/Card";

const Rated = () => {

  const {
    products,
    isLoading,
    error,
    query,
    visible,
    visiblePlusFunc,
  } = useContext(DataContext);

  return (
    <>
      <div className="w-full h-full py-28 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-16">
            <div>
              <h1 className="text-center font-Montserrat font-bold lg:text-[56px] md:text-[52px] sm:[42px] text-[36px]">
                ƏN ÇOX SATILANLAR
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-9">
              {isLoading && (
                <p className="text-center font-Montserrat text-heroText tracking-[1.5px] lg:text-[45px] md:text-[39px] sm:text-[30px] text-[25px]">
                  Loading...
                </p>
              )}
              {!isLoading && error && (
                <p className="text-center font-Montserrat text-red-600 tracking-[1.5px] lg:text-[45px] md:text-[39px] sm:text-[30px] text-[25px]">
                  {error}
                </p>
              )}
              {!isLoading &&
                products.length > 0 &&
                products
                  .slice(0, visible)
                  .filter((product) =>
                    product.title
                      .toLowerCase("tr-TR")
                      .includes(query.toLowerCase("tr-TR"))
                  )
                  .map(({ id, title, image, price, amount }) => (
                    <Card
                      key={id}
                      title={title}
                      image={image}
                      price={price}
                      amount={amount}
                      id={id}
                    />
                  ))}
              {!isLoading && !error && products.length === 0 && (
                <p className="text-center font-Montserrat text-heroText tracking-[1.5px] lg:text-[45px] md:text-[39px] sm:text-[30px] text-[25px]">
                  Hec bir Mehsul Yoxdur !
                </p>
              )}
            </div>
            <div>
              <button
                onClick={visiblePlusFunc}
                className="lg:text-[24px] md:text-[21px] sm:text-[19px] text-[16px] border-none outline-none bg-heroText py-2 px-10 rounded-lg transition duration-200 opacity-80 hover:opacity-100 text-white font-Montserrat"
              >
                Daha Çox
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rated;

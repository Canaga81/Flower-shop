import { useContext } from "react";
import { Link } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import { DataContext } from "../../contexts/DataContext";

const ShoppingCart = () => {
  const { cart, handleChange, cartRemoveItem, price, clearCartFunc } = useContext(DataContext);

  return (
    <div className="w-full h-full">
      <div className="container mx-auto sm:px-10 px-2 py-16">
        <div className="flex flex-col gap-16">
          <div className="flex justify-between gap-x-9 items-center">
            <h2 className="font-Montserrat sm:text-[24px] text-[18px]">
              <span className="pr-2 font-bold transition-all hover:text-red-500">
                <Link to={"/"}>Ana Səhifə</Link>
              </span>
              /<span className="pl-2">Səbət</span>
            </h2>

            <h2 className="font-Montserrat font-bold transition-all hover:text-red-500 sm:text-[24px] text-[18px]">
              <Link to={"/catalog"}>Alış-verişə davam edin</Link>
            </h2>
          </div>

          {
            cart.length > 0 ? <div><div>
            <div className="border-t pb-6"></div>

            <div className="flex flex-col gap-10">
              {cart.map((cartItem, idx) => (
                <div
                  className="flex items-center gap-2 justify-between flex-wrap"
                  key={idx}
                >
                  <div className="flex sm:gap-5 gap-2 items-center">
                    <div className="w-[150px] h-[150px]">
                      <img
                        className="w-full h-full"
                        src={cartItem.image}
                        alt=""
                      />
                    </div>
                    <div className="font-Montserrat text-heroText">
                      <h2 className="sm:text-[20px] text-[16px] text-heroText">
                        Məhsulun adi:{" "}
                        <span className="font-bold">{cartItem.title}</span>
                      </h2>
                      <p className="sm:text-[20px] text-[16px] text-heroText">
                        Məhsulun adi:{" "}
                        <span className="font-bold">{cartItem.price} Azn</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center sm:gap-16 gap-6">
                    <div className="flex items-center sm:gap-5 gap-2">
                      <div className="flex items-center sm:gap-3 gap-1.5 border w-[120px]">
                        <div
                          onClick={() => handleChange(cartItem, -1)}
                          className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer sm:text-[18px] text-[14px] font-Montserrat text-heroText"
                        >
                          -
                        </div>
                        <div className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer sm:text-[18px] text-[14px] font-Montserrat text-heroText">
                          {cartItem.amount}
                        </div>
                        <div
                          onClick={() => handleChange(cartItem, 1)}
                          className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer sm:text-[18px] text-[14px] font-Montserrat text-heroText"
                        >
                          +
                        </div>
                      </div>
                      <div
                        onClick={() => cartRemoveItem(cartItem.id)}
                        className="cursor-pointer transition-all hover:text-red-500"
                      >
                        <CiTrash size={28} />
                      </div>
                    </div>
                    <div className="sm:text-[20px] text-[16px] font-Montserrat font-bold">
                      Cəmi: {cartItem.amount * cartItem.price} Azn
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button className="bg-red-600 mt-16 py-2 px-12 border-none outline-none text-white text-[18px] tracking-[1.5px] rounded-lg transition duration-200 opacity-80 hover:opacity-100" onClick={clearCartFunc}>Hamısını Sil</button>
            </div>
          </div>
          <div className="mt-16 flex justify-between items-end flex-wrap gap-x-6 gap-y-9">
            <div className="flex flex-col items-center gap-9">
              <div className="flex flex-col gap-3 md:w-[630px] sm:w-[500px] w-full">
                <h2 className="sm:text-[24px] text-[20px] font-Montserrat text-heroText tracking-[1.5px]">
                  Satıcı üçün xüsusi təlimat
                </h2>
                <textarea
                  className="resize-none w-full h-[132px] border outline-none font-Montserrat pt-2 pl-3"
                  placeholder="Satıcı üçün təlimatlarınızı buraya əlavə edin"
                ></textarea>
              </div>
              <div className="flex flex-col gap-3 md:w-[630px] sm:w-[500px] w-full">
                <h2 className="sm:text-[24px] text-[20px] font-Montserrat text-heroText tracking-[1.5px]">
                  Hədiyyə mesajı
                </h2>
                <textarea
                  className="resize-none w-full h-[132px] border outline-none font-Montserrat pt-2 pl-3"
                  placeholder="Hədiyyə mesajınızı buraya əlavə edin"
                ></textarea>
              </div>
              <div></div>
            </div>
            <div className="flex flex-col gap-6 mb-6">
              <div className="flex flex-col gap-3">
                <h3 className="sm:text-[24px] text-[20px] font-Montserrat">Subtotal: <span className="font-bold">{price} Azn</span></h3>
                <p className="text-[12px] font-Montserrat text-heroText">
                  Vergilər və çatdırılma ödəniş zamanı hesablanır
                </p>
              </div>
              <div>
                <button onClick={() => alert("Sifarişiniz Uğurla Göndərildi !")} className="bg-heroText py-2 px-12 border-none outline-none text-white text-[18px] tracking-[1.5px] rounded-lg transition duration-200 opacity-80 hover:opacity-100">Gonder</button>
              </div>
            </div>
          </div></div> : <h1 className="font-Montserrat font-bold text-red-500 text-center sm:text-[36px] text-[27px]">Hec Bir Məhsul Yoxdur !</h1>
          }
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

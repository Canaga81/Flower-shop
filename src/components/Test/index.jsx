import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className=" flex flex-col items-center gap-3">
          <div className="">
            <img
              className="w-full h-full"
              src="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1.5 py-3 px-2 ">
            <h3 className="text-[16px] tracking-[1.5px] font-Montserrat text-heroText font-bold">
              Name
            </h3>
            <p className="text-[12px] tracking-[1px] font-Montserrat text-heroText w-[240px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              assumenda.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-3">
          <div className="">
            <img
              className="w-full h-full"
              src="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1.5 py-3 px-2 ">
            <h3 className="text-[16px] tracking-[1.5px] font-Montserrat text-heroText font-bold">
              Name
            </h3>
            <p className="text-[12px] tracking-[1px] font-Montserrat text-heroText w-[240px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              assumenda.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-3">
          <div className="">
            <img
              className="w-full h-full"
              src="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1.5 py-3 px-2 ">
            <h3 className="text-[16px] tracking-[1.5px] font-Montserrat text-heroText font-bold">
              Name
            </h3>
            <p className="text-[12px] tracking-[1px] font-Montserrat text-heroText w-[240px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              assumenda.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-3">
          <div className="">
            <img
              className="w-full h-full"
              src="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1.5 py-3 px-2 ">
            <h3 className="text-[16px] tracking-[1.5px] font-Montserrat text-heroText font-bold">
              Name
            </h3>
            <p className="text-[12px] tracking-[1px] font-Montserrat text-heroText w-[240px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              assumenda.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-3">
          <div className="">
            <img
              className="w-full h-full"
              src="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1.5 py-3 px-2 ">
            <h3 className="text-[16px] tracking-[1.5px] font-Montserrat text-heroText font-bold">
              Name
            </h3>
            <p className="text-[12px] tracking-[1px] font-Montserrat text-heroText w-[240px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              assumenda.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-3">
          <div className="">
            <img
              className="w-full h-full"
              src="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1.5 py-3 px-2 ">
            <h3 className="text-[16px] tracking-[1.5px] font-Montserrat text-heroText font-bold">
              Name
            </h3>
            <p className="text-[12px] tracking-[1px] font-Montserrat text-heroText w-[240px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              assumenda.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-3">
          <div className="">
            <img
              className="w-full h-full"
              src="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1.5 py-3 px-2 ">
            <h3 className="text-[16px] tracking-[1.5px] font-Montserrat text-heroText font-bold">
              Name
            </h3>
            <p className="text-[12px] tracking-[1px] font-Montserrat text-heroText w-[240px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              assumenda.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-3">
          <div className="">
            <img
              className="w-full h-full"
              src="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1.5 py-3 px-2 ">
            <h3 className="text-[16px] tracking-[1.5px] font-Montserrat text-heroText font-bold">
              Name
            </h3>
            <p className="text-[12px] tracking-[1px] font-Montserrat text-heroText w-[240px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              assumenda.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
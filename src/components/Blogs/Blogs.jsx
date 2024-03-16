import BlogsData from "../../DataBase/BlogsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Blogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full py-16">
      <div className="mx-auto py-16 bg-searchBg px-6">
        <div className="">
          <div>
            <h1 className="text-center mb-9 text-heroText font-Montserrat font-bold lg:text-[48px] md:text-[42px] sm:[36px] text-[27px]">
              BLOQLARIMIZ
            </h1>
          </div>
          <div className="flex justify-center">
            <Slider
              {...settings}
              className="flex gap-10 max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[400px] rd:max-w-[300px] yd:max-w-[300px] lm:max-[250px]"
            >
              {BlogsData.map((blogData) => (
                <div
                  className=" flex flex-col items-center gap-3 max-w-[400px] bg-white"
                  key={blogData.id}
                >
                  <div className="w-full">
                    <img
                      className="w-[400px] h-[300px] object-cover"
                      src={blogData.img}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 py-3 px-2 ">
                    <h3 className="text-[16px] tracking-[1.5px] font-Montserrat text-heroText font-bold">
                      {blogData.name}
                    </h3>
                    <p className="text-[12px] tracking-[1px] font-Montserrat text-heroText w-[240px]">
                      {blogData.text}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

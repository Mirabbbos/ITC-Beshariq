import HeaderImage from "../assets/my-image.png";
import FogComponent from "../components/backgraund";
import Download from "./download";
import Endsection from "./endsection";
import SectionTwo from "./hero";
import Icons from "./icons";
import Pictures from "./pictures";
import Portfolios from "./portfolios";
import Hul from "../assets/hullll.png";

export default function BannerTrailerItem(props) {
  function handleScroll(headerID) {
    const headerId = document.getElementById("headerID");
    const { scrollY } = window;
    scrollY > 10
      ? headerId.current?.classList.add("active")
      : headerId.current?.classList.remove("active");
  }
  return (
    <div>
      <div className="h-[60vh] md:h-[100vh] w-full bg-white  ">
        <div className="z-10 repeate-Effect absolute w-full h-[100vh] flex items-center justify-center">
          <div className="justify-center w-full items-center mx-auto">
            <img className="w-[300px] h-[250px] mx-auto" src={Hul} alt="" />
            <h1 className="text-[40px] font-semibold mx-auto text-center">
              Beshariq tumani filiali
            </h1>
            <p className="max-w-[600px] text-center mx-auto mt-5">
              Axborot texnologiyalari (inglizcha: Information Technology(IT)) —
              bu kompyuter tizimlari, dasturiy taʼminot, dasturlash tillari,
              maʼlumotlar, maʼlumotlarni qayta ishlash va saqlashni oʻz ichiga
              olgan tegishli sohalar toʻplami.
            </p>
            <button className="btn rounded-full w-[260px] h-[55px] justify-center flex mt-11 !mx-auto items-center bg-green-600 hover:bg-transparent hover:border-[2.5px] hover:border-green-600 transition-all  duration-500 text-2xl">
              Batasil
            </button>
          </div>
        </div>
        <div className="w-full h-[100vh]">
          <FogComponent className="opacity-10" />
        </div>
      </div>
      <SectionTwo />
      <Download />
      <Pictures />
      <Icons />
      <Portfolios />
      <Endsection />
    </div>
  );
}

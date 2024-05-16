import React from "react";

//images
import PORT1 from "../assets/portfolio1.webp"
import PORT2 from "../assets/portfolio2.jpg"
import PORT3 from "../assets/portfolio3.webp"
import PORT4 from "../assets/portfolio4.webp"
import PORT5 from "../assets/portfolio5.jpg"
import PORT6 from "../assets/portfolio6.jpg"



export default function Portfolios() {
  return (
    <div>
      <section className="text-gray-400body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Bizning Taniqli Portfoliolar
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={PORT1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 transition-all duration-700">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    1-taniqli portfolio
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Graphic Design Portfolio
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={PORT2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 transition-all duration-700">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    2-taniqli portfolio
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Shaped portfolio
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={PORT3}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 transition-all duration-700">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    3-taniqli portfolio
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Collection Portfolio
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={PORT4}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 transition-all duration-700">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    4-taniqli portfolio
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Jewelry Portfolio
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={PORT5}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 transition-all duration-700">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    5-taniqli portfolio
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Fashion portfolio
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img  
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={PORT6}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 transition-all duration-700">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    6-taniqli portfolio
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Designer portfolio
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

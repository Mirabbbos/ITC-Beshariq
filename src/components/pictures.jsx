import React from "react";

// imgages
import IT1 from "../assets/it park uzbekistan.png"
import IT2 from "../assets/it park stollari.png"
import IT3 from "../assets/it3.jpeg"
import IT4 from "../assets/it4.jpg"
import IT5 from "../assets/it5.jfif"
import IT6 from "../assets/it6.jpg"

export default function Pictures() {
  return (
    <div>
      <section className="text-gray-400body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1
              data-aos="fade-right"
              className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4"
            >
              IT Park Haqida Qisqacha
            </h1>
            <p
              data-aos="fade-left"
              className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"
            >
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  data-aos="flip-left"
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={IT1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  data-aos="flip-right"
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={IT2}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  data-aos="flip-down"
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={IT3}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  data-aos="flip-up"
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={IT4}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  data-aos="flip-right"
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={IT5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  data-aos="flip-left"
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={IT6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

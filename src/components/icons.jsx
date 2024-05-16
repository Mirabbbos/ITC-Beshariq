import React from "react";

//icons
import { SiHtml5 } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { GrGithub } from "react-icons/gr";
import { RiJavascriptFill } from "react-icons/ri";

//images
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/js.png";
import REACT from "../assets/react.png";
import GITHUB from "../assets/github-logo.png";
import JAVA from "../assets/java.jpg";

export default function Icons() {
  return (
    <div data-aos="zoom-in">
      <section className="text-gray-400 body-font">
        <h1 className="sm:text-3xl text-2xl text-center font-semibold title-font mb-4 text-white">
          IT Languages{" "}
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.
        </p>
        <div className="container px-5 py-24  mx-auto">
          <div className="flex flex-wrap -m-4 ">
            <div className="lg:w-1/3 lg:mb-0 mb-6  p-4">
              <div className="h-full text-center ">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={HTML}
                />
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover ml-32 object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={CSS}
                />
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={JS}
                />
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center ml-32 rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={REACT}
                />
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={GITHUB}
                />
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center ml-32 rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={JAVA}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";

//images
import ITPARKDIRECTOR from "../assets/itparkdirector.jpg"



export default function Endsection() {
  return (
    <div>
      <section className="text-gray-400body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <img
              className="w-[350px] h-[280px] mx-auto rounded-3xl"
              src={ITPARKDIRECTOR}
              alt=""
            />
            <p className="leading-relaxed text-lg mt-10">
              IT Park direktori Farhod Ibragimov “Yuksalish” umummilliy harakati
              versiyasiga koʻra, 40 yoshgacha boʻlgan Oʻzbekistonning eng
              istiqbolli rahbarlari TOP-40 taligiga kirdi. Soʻnggi yillarda
              Oʻzbekistonda davlat tashkilotlari, vazirlik va idoralarni
              boshqaruvchi yosh rahbarlar safi anchagina kengaydi. Bu yil
              “Yuksalish” umummilliy harakati Ijtimoiy-iqtisodiy tashabbuslar
              instituti bilan birgalikda qariyb 100 ta nomzodning 40 nafarini
              istiqbolli rahbarlar roʻyxati yakuniy reytingiga kiritdi. Xabar
              berilishicha, reytingni shakllantirishda nomzodlarning yoshi,
              ma’lumoti, mutaxassisligi, aholi orasida mashhurligi, islohotlar
              jarayonida ishtirok etishi va taʼsir darajasi hisobga olingan. Shu
              tariqa, IT Park direktori Farhod Ibragimov ilk bor Oʻzbekiston
              Respublikasining 40 yoshgacha boʻlgan eng istiqbolli rahbarlari
              roʻyxatiga kiritildi.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <h2 className="text-white font-medium title-font tracking-wider text-sm">
              IT Park Direktori
            </h2>
            <p className="text-gray-500">Farhod Ibragimov</p>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import AccordionApp from "./AccordionApp";

const Accordion = () => {
  return (
    <div className="w-full h-full py-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-9">
          <h1 className="text-center font-Montserrat font-bold lg:text-[56px] md:text-[52px] sm:[42px] text-[36px]">
            Tez-tez verilən suallar
          </h1>
          <div className="flex flex-col gap-3 items-center ">
            <AccordionApp
              question={
                "Eyni gündə çiçək çatdırılmasını sifariş edə bilərəmmi?"
              }
              answer={
                "Bəli, sifarişinizi eyni gün əldə etmək üçün saat 12:00-a qədər yerləşdirə bilərsiniz, lakin saat 12:00-dan gec olarsa, sadəcə bizə zəng edin və cədvəlimizi yenidən tənzimləməyə və eyni gündə çatdırmağa çalışacağıq."
              }
            />
            <AccordionApp
              question={"Bazar günləri çatdırılma var?"}
              answer={
                "Bəli, biz edirik. Biz bütün bazar günləri çatdırırıq, çatdırılma üçün buketləri onlayn sifariş edə bilərsiniz və ya sadəcə bizə zəng edin və biz sizə güllərinizi çatdıraq."
              }
            />
            <AccordionApp
              question={"Güllərin çatdırılması xidmətinin qiyməti nə qədərdir?"}
              answer={
                "4 milə qədər pulsuz çatdırırıq, 4-8 km – 15 dollar, 8-20 km – 20 dollar, 20-30 km – 30 dollar və 30-50 km – 50 dollar."
              }
            />
            <AccordionApp
              question={"Çiçəkləri çatdırmaq nə qədər vaxt aparır?"}
              answer={
                "Biz adətən gün ərzində çatdırırıq, lakin siz onlayn sifariş etdiyiniz zaman, məsələn, səhər 8-dən axşam 12-ə kimi vaxt intervallarını seçə bilərsiniz və biz verilən vaxtda çatdıracağıq. Həmçinin, buketlərin dəqiq vaxtda çatdırılmasına ehtiyacınız varsa, +214 772 56 74 nömrəsinə zəng etməyiniz kifayətdir və biz onları seçdiyiniz vaxtda sizə çatdırmaq üçün əlimizdən gələni etməyə çalışacağıq."
              }
            />
            <AccordionApp
              question={"Mağazadan çiçək götürə bilərəmmi?"}
              answer={
                "Bəli olar! Sizi hər zaman mağazamıza dəvət edirik, lakin yerləşdiyimiz yerə yaxın yaşayırsınızsa, unutmayın ki, pulsuz çatdırılma ilə gül sifariş edə bilərsiniz."
              }
            />
            <AccordionApp
              question={"Sabah üçün gül çatdırılmasını sifariş edə bilərəmmi?"}
              answer={
                "Bəli, siz gecə yarısına qədər onlayn sifariş verə və ya 18:00-a qədər mağazamıza zəng edərək sifarişinizi ertəsi gün çatdıra bilərsiniz."
              }
            />
            <AccordionApp
              question={"Çiçəkləri hara çatdırırsınız?"}
              answer={
                "West Hollywood, North Hollywood, Beverly Hills, Santa Monica, Pasadena, Encino, Bel Air, Brentwood, Sherman Oaks, Manhattan Beach, El Segundo, Marina del Rey, Culver City, Koreatown, Downtown LA, Palms, Van Nuys, Glendale, Studio City, Venesiya, Pacific Palisades və Malibu."
              }
            />
            <AccordionApp
              question={"Öz buketimi yarada bilərəmmi?"}
              answer={
                "Bəli, bizdə hər gün çoxlu təzə kompozisiyalar var, siz çox xoş gəlmisiniz, xoşunuza gələn gülləri seçin və biz onlardan sizin üçün buket və ya gül kompozisiyasını hazırlayaq. Siz hər zaman bizim gül emalatxanasına baş çəkə və çiçəkçilərlə addım-addım gül kompozisiyasını hazırlamağın hiss atmosferindən həzz ala bilərsiniz."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

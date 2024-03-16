import React from "react";
import aboutComponentImage from '../../images/about_Component_image.png';

const AboutComponent = () => {
  return (
    <div className="w-full h-full py-16">
      <div>
        <div className="flex flex-col items-center gap-9">
          <div>
            <img className="min-h-[360px]" src={aboutComponentImage} alt="about_image" />
          </div>
          <div>
            <p className="lg:text-[24px] md:text-[22.2px] sm:text-[20.4px] text-[18px] text-heroText font-Montserrat font-normal md:px-36 sm:px-24 px-5">
              Digər tərəfdən, biz o anın ləzzətinin cazibəsinə aldanmış və
              ruhdan düşmüş, ehtirasla o qədər kor olmuş, gələcək ağrı və
              bəlaları qabaqcadan görə bilməyəcək qədər aldadılmış və ruhdan
              düşmüş kişiləri haqlı bir qəzəb və nifrətlə qınayırıq; Eyni günah
              iradə zəifliyi ilə vəzifəsini yerinə yetirməyənlərə aiddir ki, bu
              da zəhmətdən və əzabdan sıxılaraq deməklə eynidir. Bu hallar
              mükəmməl sadədir və ayırd etmək asandır. Sərbəst bir saatda, seçim
              gücümüzün boğulmadığı və ən çox bəyəndiyimiz şeyi edə bilməyimizə
              heç bir şey mane olmadıqda, hər zövq alqışlanmalıdır və hər
              ağrıdan qaçınılmalıdır. Lakin müəyyən şəraitdə və vəzifə iddiaları
              və ya iş öhdəlikləri ucbatından tez-tez baş verir ki, ləzzətlərdən
              imtina etmək və zəhlətökənlikləri qəbul etmək lazımdır. Buna görə
              də müdrik insan bu məsələlərdə həmişə bu seçim prinsipinə riayət
              edir: o, başqa böyük həzzləri təmin etmək üçün həzzləri rədd edir,
              ya da daha pis ağrılardan qaçmaq üçün ağrılara dözür. Tələblərə
              ehtiyacınız var, adipiscing elitinə diqqət yetirin, iş və hər
              hansı bir böyük gücə sahib ola bilərsiniz. Minimum hesab edirəm
              ki, heç bir nəticə əldə edə bilməyəcəksiniz. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              identity of the officia desertunt mollit anim id est of office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
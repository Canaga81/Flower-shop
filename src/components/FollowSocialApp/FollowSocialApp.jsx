import React from 'react';
import social_app_image_1 from '../../images/socail_image_1.jpg'
import social_app_image_2 from '../../images/socail_image_2.jpg'
import social_app_image_3 from '../../images/socail_image_3.jpg'
import social_app_image_4 from '../../images/socail_image_4.jpg'
import social_app_image_5 from '../../images/socail_image_5.jpg'
import social_app_image_6 from '../../images/socail_image_6.jpg'

const FollowSocialApp = () => {
  return (
    <div className='w-full h-full px-6 py-16'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-9 items-center justify-center'>
                <div className='flex flex-col gap-3 items-center'>
                    <h1 className="text-center text-heroText font-Montserrat font-bold lg:text-[48px] md:text-[42px] sm:[36px] text-[27px]">BİZİ İNSTAGRAMDA İZLƏYİN</h1>
                    <p className='text-center text-heroText font-Montserrat lg:text-[24px] md:text-[22.2px] sm:text-[20.4px] text-[18px]'>@CHERRYBLOSSOM.LA</p>
                </div>
                <div className='flex flex-wrap items-center justify-center'>
                    <img className='lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] sm:w-[320px] sm:h-[320px] w-full h-full' src={social_app_image_1} alt="socail_app_image" />
                    <img className='lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] sm:w-[320px] sm:h-[320px] w-full h-full' src={social_app_image_2} alt="socail_app_image" />
                    <img className='lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] sm:w-[320px] sm:h-[320px] w-full h-full' src={social_app_image_3} alt="socail_app_image" />
                    <img className='lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] sm:w-[320px] sm:h-[320px] w-full h-full' src={social_app_image_4} alt="socail_app_image" />
                    <img className='lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] sm:w-[320px] sm:h-[320px] w-full h-full' src={social_app_image_5} alt="socail_app_image" />
                    <img className='lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] sm:w-[320px] sm:h-[320px] w-full h-full' src={social_app_image_6} alt="socail_app_image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FollowSocialApp;
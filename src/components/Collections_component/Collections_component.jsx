import image_1 from '../../images/GRADUATION.png';
import image_2 from '../../images/ANNIVERSARY.png';
import image_3 from '../../images/love_and_romance_image.png';
import image_4 from '../../images/NEW_BABY_image.png';
import image_5 from '../../images/BIRTHDAY.png';
import image_6 from '../../images/NEW_YEAR_image.png';
import image_7 from '../../images/SYMPATHY.png';
import image_8 from '../../images/thank_you_image.png';
import image_9 from '../../images/toys_image.png';
import image_10 from '../../images/LUXURY.png';
import image_11 from '../../images/VALENTINE_DAY_image.png';
import image_12 from '../../images/WEDDING.png';

const Collections_component = () => {
  return (
    <div className='w-full h-full py-16'>
        <div className='container mx-auto'>
            <div className='flex gap-1 justify-center items-center flex-wrap'>
                <img className='w-[360px] h-[240px]' src={image_1} alt="" />
                <img className='w-[360px] h-[240px]' src={image_2} alt="" />
                <img className='w-[360px] h-[240px]' src={image_3} alt="" />
                <img className='w-[360px] h-[240px]' src={image_4} alt="" />
                <img className='w-[360px] h-[240px]' src={image_5} alt="" />
                <img className='w-[360px] h-[240px]' src={image_6} alt="" />
                <img className='w-[360px] h-[240px]' src={image_7} alt="" />
                <img className='w-[360px] h-[240px]' src={image_8} alt="" />
                <img className='w-[360px] h-[240px]' src={image_9} alt="" />
                <img className='w-[360px] h-[240px]' src={image_10} alt="" />
                <img className='w-[360px] h-[240px]' src={image_11} alt="" />
                <img className='w-[360px] h-[240px]' src={image_12} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Collections_component;
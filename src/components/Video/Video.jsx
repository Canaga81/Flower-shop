import VideoContact from '../../images/video_contact.mp4';

const Video = () => {

  return (

    <div className="w-full h-full px-6 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col sm:gap-6 gap-3 items-center">
          <h1 className="lg:text-[40px] md:text-[33px] sm:text-[27px] text-[24px] font-Montserrat font-bold tracking-[1.5px]">Bizə necə çatmaq olar?</h1>
          <div>
            <video className="min-h-[360px]" width="640" height="360" controls>
              <source src={VideoContact} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
    
  );

};

export default Video;
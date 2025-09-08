import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
  <div className="py-16 pt-12 lg:py-24 lg:pt-20">
    <div className="container">
      <div className="bg-gradient-to-r from-[#bda28d]
                  to-[#f9e8ce] text-gray-900 py-8 px-10
                  rounded-3xl text-center md:text-left relative overflow-hidden z-0">
        <div 
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}>

        </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif font-semibold text-2xl md:text-3xl">
                Let's create something amazing together!
              </h2>

              <p className="text-sm mt-2 md:text-base">
                If you believe I could be a great fit for your organization and you're excited about the possibility of collaborating on innovative projects, let's connect!
              </p>
            </div>
            
            <div>
              <a href="https://www.linkedin.com/in/shubhankar-mishra23/" target="_blank" rel="noopener noreferrer">
                <button className="text-gray-900 bg-white 
                inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max 
                border border-white"
                >
                  <span className="font-semibold">
                    Contact Me
                  </span>
                  
                  <ArrowUpRightIcon className='size-4'/>
                </button>
              </a>
            </div>
          </div>
      </div>
    </div>
  </div>
);
};

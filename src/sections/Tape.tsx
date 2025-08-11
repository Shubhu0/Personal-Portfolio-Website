import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performing",
  "Secure",
  "Reliable",
  "Usable",
  "Accessible",
  "User Friendly",
  "Search Optimized",
  "Scalable",
  "Responsive"
];

export const TapeSection = () => {
  return (
  <div>
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-[#bda28d]
                  to-[#f9e8ce]  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div 
          className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]"
          style={{
            transform: 'translateX(-750px)'
          }}
          >
            {[...new Array(2)].fill(0).map((_,idx) => (
              <Fragment key={idx}>
              {words.map((word) => (
                <div key={word} className="inline-flex text-[#f1ebe1] gap-4 items-center">
                    <span className="text-gray-900 text-sm uppercase font-extrabold">
                      {word}
                    </span>
                    <StarIcon  className="size-6 text-gray-900 -rotate-12"/>
                </div>
                
              ))}
              </Fragment>
            ))}
          {words.map((word) => (
            <div key={word} className="inline-flex text-[#f1ebe1] gap-4 items-center">
                <span className="text-gray-900 text-sm uppercase font-extrabold">
                  {word}
                </span>
                <StarIcon  className="size-6 text-gray-900 -rotate-12"/>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({title, description, className}: {
    title: string,
    description: string,
    className?: string
}) => {
    return (
        <div className={twMerge("flex flex-col p-6 md:py-8", className)}>
              <div className="inline flex items-center">
              <StarIcon  className="size-9 text-[#44624a]"/>
              <h3 className="font-serif text-3xl font-bold">
                {title}
              </h3>
              </div>

              <p className="text-sm lg:text-base text-white-60 max-w-xs mt-2">
                {description}
              </p>
            </div>
    );
}
import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";
import { Fragment } from "react";

export const ToolboxItems = ({
    items,
    className,
    itemsWrapperClassName,
    isPaused = false,
}: {
    items: {
        title: string;
        iconType: React.ElementType;
    }[];
    className?: string;
    itemsWrapperClassName?: string;
    isPaused?: boolean;
}) => {
    return (
        <div
            className={twMerge(
                "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
                className,
            )}
        >
            <div
                className={twMerge(
                    "flex flex-none py-0.5 gap-6 pr-6",
                    isPaused
                        ? "[animation-play-state:paused]"
                        : "animate-move-left [animation-duration:30s]",
                    itemsWrapperClassName,
                )}
            >
                {[...new Array(2)].fill(0).map((_, idx) => (
                    <Fragment key={idx}>
                        {items.map((item) => (
                            <div
                                key={item.title}
                                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg toolbox-item transition-all duration-300 hover:-rotate-3 hover:scale-105 hover:bg-white/5 cursor-pointer"
                            >
                                <TechIcon component={item.iconType} />
                                <span className="font-semibold text-white/80 hover:text-white transition-colors">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};
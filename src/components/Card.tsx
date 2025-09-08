import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({ 
    className,
    children,
    ...other
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div 
            className={twMerge(
                "portfolio-card rounded-3xl relative z-0 overflow-hidden p-6 transition-all duration-300",
                className
            )}
            {...other}
        >
            <div 
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    background: `linear-gradient(45deg, 
                        rgba(68, 98, 74, 0.1) 0%, 
                        rgba(189, 162, 141, 0.1) 50%, 
                        rgba(139, 168, 136, 0.1) 100%
                    )`
                }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
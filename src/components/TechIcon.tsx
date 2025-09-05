import React from 'react';

export const TechIcon = ({ component }: { component: React.ElementType }) => {
    const Component = component;
    
    return (
        <div className="relative">
            <svg className="size-0">
                <defs>
                    <linearGradient id="tech-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f9e8ce" />
                        <stop offset="50%" stopColor="#bda28d" />
                        <stop offset="100%" stopColor="#8ba888" />
                    </linearGradient>
                </defs>
            </svg>
            <Component className="size-10 fill-[url(#tech-icon-gradient)] transition-transform duration-300 hover:scale-110" />
        </div>
    );
};
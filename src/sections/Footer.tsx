import ArrowRightUpIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: 'Twitter',
    href: 'https://x.com/shubhankar_m98?s=21&t=t6kDPgSaTzIZpBm2dhrHkA',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/shubhankar.m?igsh=MTEzaWFhd3h3cTRkcw%3D%3D&utm_source=qr',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shubhankar-mishra23/',
  }
]

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 
      -translate-x-1/2 bg-[#44624a] -z-10
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex
        flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-white/40">
            &copy; 2024. All rights reserved.
          </div>

            <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map(link => (
              <a href={`${link.href}`}
              target="_blank" rel="noopener noreferrer"
              key={link.title}
              className="inline-flex items-center gap-1.5">
              <span className="font-semibold">{link.title}</span>
              <ArrowRightUpIcon className="w-4 h-4"/>
              </a>
            ))}
            </nav>
        </div>
      </div>
    </footer>
);
};

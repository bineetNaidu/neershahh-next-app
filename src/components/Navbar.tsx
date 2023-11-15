import type { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <nav className="absolute top-0 m-0 p-0 w-full lg:px-[12rem] md:px-[8rem] z-[1001]">
      <div className="container flex justify-between my-12">
        <h1 className="text-4xl font-[Sacramento] leading-[40px] font-medium text-white">
          #sonaकाaina
        </h1>

        <div className="flex sm:gap-4 text-white">
          <a href="#upload_sec">
            <span className="opacity-50 hover:opacity-100 transition-all">
              Upload Photos
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

import type { FC } from 'react';

export const ContactUs: FC = () => {
  return (
    <div className='bg-[url("/images/img_bg_4.jpg")] bg-no-repeat relative bg-cover bg-center bg-fixed transition-all w-10/12 h-[400px] mx-auto my-20 rounded-lg'>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50"></div>

      <article className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center text-white z-10">
          <h1 className="text-6xl font-[Sacramento]">
            Powered by Tapover India
          </h1>
          <h2 className="text-md mt-4 text-gray-300 tracking-wider">
            Any Query for us? Do let us know below. Thanks.
          </h2>

          <div className="flex gap-4 mt-5">
            <button className="px-5 py-3 bg-pink-500 text-white rounded-full mt-7 outline-none hover:bg-pink-400 transition-all hover:scale-105 active:scale-95">
              Let&apos;s connect
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

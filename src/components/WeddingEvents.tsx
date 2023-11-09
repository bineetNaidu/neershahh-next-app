import type { FC } from 'react';

export const WeddingEvents: FC = () => {
  return (
    <div className='bg-[url("/images/img_bg_3.jpg")] min-w-full min-h-screen h-full bg-no-repeat relative bg-cover bg-center overflow-hidden bg-fixed transition-all'>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50"></div>

      <article className="min-h-screen h-full flex justify-center items-center">
        <div className="flex flex-col items-center text-white z-10">
          <h1 className="uppercase text-gray-400 font-bold tracking-wider">
            Our Special Events
          </h1>
          <h2 className="text-6xl font-[Sacramento] my-8 font-semibold">
            Wedding Events
          </h2>
          <div className="flex container gap-5 my-10">
            <div className="border p-10 rounded text-center flex flex-col w-[400px]">
              <p className="font-bold">28 NOV 23</p>
              <hr className="my-4" />
              <p className="text-pink-500 mb-2 font-semibold">DAY 1</p>
              <div className="text-gray-300">
                <p>12:30 - Dasturi</p>
                <p>1:00 - Mayera sambela</p>
                <p>3:00 - Phoolon ki Holi</p>
                <p>7:00 - Sangeet</p>
                <p>10:00 - DJ Night</p>
              </div>
            </div>
            <div className="border p-10 rounded text-center flex flex-col w-[400px]">
              <p className="font-bold">29 NOV 23</p>
              <hr className="my-4" />
              <p className="text-pink-500 mb-2 font-semibold">DAY 2</p>
              <div className="text-gray-300">
                <p>9:15 - Sambela</p>
                <p>12:00 - Phera</p>
                <p>3:00 - Mayra</p>
                <p>7:00 - Reception</p>
                <p className="mt-2 italic">and the journey begins!</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

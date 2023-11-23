import type { FC } from 'react';
import Image from 'next/image';

export const WeddingInfo: FC = () => {
  return (
    <div className="flex flex-col items-center mb-[150px]">
      <div className="my-[80px] text-center">
        <h2 className="text-[65px] text-pink-500 font-[Sacramento] font-bold">
          Hello!
        </h2>
        <h3 className="text-black text-xl mb-4 tracking-wide">
          November 29th, 2023 , India
        </h3>
        <p>We invited you to celebrate our wedding</p>
      </div>
      <div className="flex flex-col md:flex-row container gap-y-10 md:gap-2 lg:w-3/4 transition-all justify-center items-center">
        <div className="flex flex-col-reverse sm:flex-row items-center gap-4">
          <div className="text-center sm:text-right">
            <h2 className="text-pink-500 font-[Sacramento] text-4xl mb-4 font-semibold">
              Jainam Jain
            </h2>
          </div>
          <div className="min-w-fit">
            <Image
              alt="AVATAR"
              src="/images/groom.jpg"
              width={150}
              height={150}
              className="rounded-full w-[150px] h-[150px] bg-center bg-cover"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="min-w-fit">
            <Image
              alt="AVATAR"
              src="/images/bride.jpg"
              width={150}
              height={150}
              className="rounded-full w-[150px] h-[150px] bg-center bg-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-pink-500 font-[Sacramento] text-4xl mb-4 font-semibold">
              Sonal Jain
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

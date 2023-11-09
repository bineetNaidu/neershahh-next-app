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
      <div className="flex container gap-2 w-3/4">
        <div className="flex items-center gap-4">
          <div className="text-right">
            <h2 className="text-pink-500 font-[Sacramento] text-4xl mb-4 font-semibold">
              Jainam Jain
            </h2>
            <p className="text-gray-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove
            </p>
          </div>
          <div className="min-w-fit">
            <Image
              alt="AVATAR"
              src="/images/groom.jpg"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="min-w-fit">
            <Image
              alt="AVATAR"
              src="/images/bride.jpg"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="text-left">
            <h2 className="text-pink-500 font-[Sacramento] text-4xl mb-4 font-semibold">
              Sonal Jain
            </h2>
            <p className="text-gray-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

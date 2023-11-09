import type { FC } from 'react';

export const UploadMemories: FC = () => {
  return (
    <div className="flex flex-col items-center my-20 text-center">
      <h1 className="uppercase text-gray-400 font-semibold tracking-wider">
        SAY CHEESE AND SHARE THE LOVE
      </h1>
      <h2 className="text-4xl md:text-5xl lg:text-6x font-[Sacramento] my-8 font-semibold text-pink-500">
        Picture Perfect Moments
      </h2>

      <p>
        Upload your funniest, loveliest, and most &rsquo;frame-worthy&rsquo;
        moments with us
      </p>

      <button className="px-6 py-2 mt-8 border rounded-lg bg-pink-400 text-white transition-all hover:scale-105 active:scale-95 hover:bg-pink-300">
        Upload here!
      </button>
    </div>
  );
};

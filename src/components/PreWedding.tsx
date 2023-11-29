'use client';

import { useState, type FC, useRef } from 'react';
import Countdown, { CountdownRendererFn } from 'react-countdown';

export const PreWedding: FC = () => {
  const [countdownStatus, setCountdownStatus] = useState<'running' | 'over'>(
    'running'
  );

  const renderer: CountdownRendererFn = ({
    hours,
    minutes,
    seconds,
    completed,
    days,
  }) => {
    if (completed) {
      // Render a completed state
      setCountdownStatus('over');
      return null;
    } else {
      // Render a countdown
      return (
        <span
          className={`text-2xl text-white z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${
            countdownStatus === 'over' ? 'hidden pointer-events-none' : ''
          }`}
          suppressHydrationWarning
        >
          {days}d {hours}hrs {minutes}mins {seconds}s
        </span>
      );
    }
  };
  return (
    <div className="flex flex-col items-center my-20 w-full md:w-10/12 mx-auto bg-gray-100 p-10 rounded-lg text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-[Sacramento] my-8 font-semibold text-pink-500">
        Pre-Wedding Shoot
      </h1>
      <p>
        From laughs to love, our pre-wedding adventure is a rom-com in motion!
      </p>

      <div className="my-10 flex justify-center items-center relative">
        <Countdown date={'2023-11-28T20:00:00'} renderer={renderer} />

        <p className="text-center text-md md:text-xl italic">
          We will upload the video soon!
        </p>
        {/* <iframe
          className={`w-[280px] sm:w-[420px] md:w-[550px] h-[250px] pointer-events-none rounded-md ${
            countdownStatus === 'over' ? '' : 'blur-lg'
          }`}
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe> */}
      </div>
    </div>
  );
};

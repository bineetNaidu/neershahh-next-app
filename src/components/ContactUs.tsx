import type { FC } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { Footer } from './Footer';

export const ContactUs: FC = () => {
  return (
    <div className='bg-[url("/images/img_bg_4.jpg")] bg-no-repeat relative bg-cover bg-center bg-fixed transition-all w-full md:w-10/12 h-[400px] mx-auto my-20 rounded-lg'>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50"></div>

      <article className="w-full h-full flex justify-center items-center px-2">
        <div className="flex flex-col items-center text-white z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Sacramento] text-center">
            Powered by Tapover India
          </h1>
          <h2 className="text-sm sm:text-md mt-4 text-gray-300 tracking-wider">
            Any Query for us? Do let us know below. Thanks.
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mt-5 items-center w-11/12">
            <Input
              placeholder="Name"
              className="bg-transparent placeholder:text-gray-400"
            />
            <Input
              placeholder="Email"
              type="email"
              className="bg-transparent placeholder:text-gray-400"
            />
            <Button
              variant="outline"
              className="bg-pink-500 border-none w-full"
            >
              Let&apos;s connect
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

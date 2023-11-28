'use client';

import { useState, type FC, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { Footer } from './Footer';
import { handleContactMeForm } from '@/lib/firebase';
import { useToast } from './ui/use-toast';

export const ContactUs: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNameInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const handleEmailInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const resetState = useCallback(() => {
    setEmail('');
    setName('');
  }, []);

  const handleContactUsBtn = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!!name && !!email) {
        console.log('log');

        const r = await handleContactMeForm({ name, email });
        if (r) {
          resetState();
          toast({
            title: 'Thank you for contacting us!',
            description: 'We will get back to you as soon as possible.',
          });
        }
      }
    },
    [email, name, resetState, toast]
  );

  return (
    <div className='bg-[url("/images/bg-banner.JPG")] bg-no-repeat relative bg-cover bg-left bg-fixed transition-all w-full md:w-10/12 h-[400px] mx-auto my-20 rounded-lg'>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50"></div>

      <article className="w-full h-full flex justify-center items-center px-2">
        <div className="flex flex-col items-center text-white z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Sacramento] text-center">
            Powered by Tapover India
          </h1>
          <h2 className="text-sm sm:text-md mt-4 text-gray-300 tracking-wider">
            Any Query for us? Do let us know below. Thanks.
          </h2>

          <form
            className="flex flex-col md:flex-row gap-4 mt-5 items-center w-11/12"
            onSubmit={handleContactUsBtn}
          >
            <Input
              required
              value={name}
              onChange={handleNameInputChange}
              placeholder="Name"
              className="bg-transparent placeholder:text-gray-400"
            />
            <Input
              required
              value={email}
              onChange={handleEmailInputChange}
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
          </form>
        </div>
      </article>

      <Footer />
    </div>
  );
};

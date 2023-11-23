import type { FC } from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGlobe } from 'react-icons/fa';
import { Button } from './ui/button';

export const Footer: FC = () => {
  return (
    <footer className="text-center py-20">
      <p>
        <small className="block">
          &copy; 2023 TapOver India. All Rights Reserved.
        </small>
        <small className="block">Designed by Tapover India.</small>
      </p>

      <div className="flex justify-center gap-5 mt-5 text-xl">
        <Button variant={'outline'} className="rounded-full p-3">
          <FaFacebook />
        </Button>
        <Button variant={'outline'} className="rounded-full p-3">
          <FaInstagram />
        </Button>
        <a href="https://tapover.taplink.ws/" target="_blank">
          <Button variant={'outline'} className="rounded-full p-3">
            <FaGlobe />
          </Button>
        </a>
        <Button variant={'outline'} className="rounded-full p-3">
          <FaXTwitter />
        </Button>
        <Button variant={'outline'} className="rounded-full p-3">
          <FaYoutube />
        </Button>
      </div>
    </footer>
  );
};

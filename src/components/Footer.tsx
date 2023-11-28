import type { FC } from 'react';
import { FaInstagram } from 'react-icons/fa';
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
        <a href="https://www.instagram.com/tapover.india/" target="_blank">
          <Button variant={'outline'} className="rounded-full p-3">
            <FaInstagram />
          </Button>
        </a>
        <a href="https://tapover.taplink.ws/" target="_blank">
          <Button variant={'outline'} className="rounded-full p-3">
            <FaGlobe />
          </Button>
        </a>
      </div>
    </footer>
  );
};

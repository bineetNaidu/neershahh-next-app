'use client';

import React, { useCallback } from 'react';
import { Button } from './ui/button';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup } from 'firebase/auth';
import { GoogleProvider, auth } from '@/lib/firebase';
import { useToast } from './ui/use-toast';
import { ToastAction } from './ui/toast';

export const AuthOverlay = () => {
  const { toast } = useToast();
  const handleAuth = useCallback(async () => {
    try {
      await signInWithPopup(auth, GoogleProvider);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }, [toast]);

  return (
    <div className="transition-all">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-95 blur touch-none"></div>
      <div className="w-full h-full z-10">
        <Button
          variant="secondary"
          onClick={handleAuth}
          className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
        >
          <FcGoogle className="mr-2" />
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

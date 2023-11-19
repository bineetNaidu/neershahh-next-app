'use client';

import { FC, useState, useCallback, useEffect } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Uploader } from './Uploader';
import { AuthOverlay } from './AuthOverlay';
import { auth } from '@/lib/firebase';
import { User, signOut } from 'firebase/auth';
import { Toaster } from '@/components/ui/toaster';

export const UploadMemories: FC = () => {
  const [uploadMode, setUploadMode] = useState<
    'selfie' | 'moments' | undefined
  >(undefined);

  const handleSelfieBtnClick = useCallback(() => {
    setUploadMode('selfie');
  }, []);

  const handleMomentsBtnClick = useCallback(() => {
    setUploadMode('moments');
  }, []);

  const handleModeReset = useCallback(() => {
    setUploadMode(undefined);
  }, []);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
      if (loggedInUser) {
        console.log(loggedInUser);
        setUser(loggedInUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      className="flex flex-col items-center my-20 text-center mx-2"
      id="upload_sec"
    >
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
      <Dialog onOpenChange={handleModeReset}>
        <DialogTrigger asChild>
          <button className="px-6 py-2 mt-8 border rounded-lg bg-pink-400 text-white transition-all hover:scale-105 active:scale-95 hover:bg-pink-300">
            Upload here!
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload Memories</DialogTitle>
            <DialogDescription>
              Share your favarite moments and memories from the event.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2 relative p-4">
              {!user && <AuthOverlay />}
              {!uploadMode && (
                <>
                  <Button onClick={handleMomentsBtnClick}>
                    Your best moments!
                  </Button>

                  <Button onClick={handleSelfieBtnClick}>
                    Selfie Contest!
                  </Button>
                </>
              )}

              {!!uploadMode && !!user && (
                <Uploader mode={uploadMode} auth={user} />
              )}
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            {uploadMode && (
              <Button type="button" onClick={handleModeReset}>
                <IoMdArrowRoundBack className="mr-2 h-4 w-4" /> back
              </Button>
            )}
            {user && <Button onClick={() => signOut(auth)}>Sign out</Button>}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Toaster />
    </div>
  );
};

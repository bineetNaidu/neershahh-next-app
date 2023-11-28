'use client';

import React, { FC, useState, useCallback, useEffect } from 'react';
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
import {
  auth,
  checkAuthUserHasPhoneNumber,
  handleAddPhoneNumber,
} from '@/lib/firebase';
import { User, signOut } from 'firebase/auth';
import { Toaster } from '@/components/ui/toaster';
import { Input } from './ui/input';

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
  const [hasPhnNum, setHasPhnNum] = useState(false);
  const [phnNum, setPhnNum] = useState('');

  const handlePhnNumInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhnNum(e.target.value);
    },
    []
  );

  const handleAddPhoneNumClick = useCallback(async () => {
    if (!user) return;
    if (!phnNum) return;

    try {
      await handleAddPhoneNumber(user.uid, phnNum);
      setHasPhnNum(true);
    } catch (e) {
      console.log(e);
      setHasPhnNum(false);
    }
  }, [user, phnNum]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (loggedInUser) => {
      if (loggedInUser) {
        setUser(loggedInUser);
        const r = await checkAuthUserHasPhoneNumber(loggedInUser.uid);
        r ? setHasPhnNum(true) : setHasPhnNum(false);
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
        Share your memories - Upload your funniest, loveliest, and most
        &apos;frame-worthy&apos; moments with us. And get a chance to win
        exclusive prizes
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
              Share your favarite moments and memories from the event. And share
              your beautiful wedding selfie and <b>Five lucky winners</b> will
              stand a chance to win a <b>personalized colour edited frame</b>.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2 relative p-4">
              {!user && <AuthOverlay />}

              {!hasPhnNum && !!user && (
                <div>
                  <h1 className="text-xs mb-2">
                    Please Add your phone number, so that we can contact you if
                    you win any prizes.
                  </h1>
                  <div className="flex flex-col gap-3">
                    <Input
                      required
                      value={phnNum}
                      onChange={handlePhnNumInputChange}
                      placeholder="+91"
                      className="bg-transparent placeholder:text-gray-400"
                    />
                    <Button
                      className="text-xs"
                      onClick={handleAddPhoneNumClick}
                    >
                      Add Phone Number
                    </Button>
                  </div>
                </div>
              )}

              {hasPhnNum && !uploadMode && (
                <>
                  <Button onClick={handleMomentsBtnClick}>
                    Your best moments!
                  </Button>

                  <Button onClick={handleSelfieBtnClick}>
                    Selfie Contest!
                  </Button>
                </>
              )}

              {!!uploadMode && !!user && hasPhnNum && (
                <Uploader mode={uploadMode} auth={user} />
              )}
            </div>
          </div>
          <DialogFooter className="sm:justify-start gap-2">
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

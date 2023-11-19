'use client';

import React, { FC, useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from './ui/button';
import { IoCloudUploadSharp } from 'react-icons/io5';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { FiLoader } from 'react-icons/fi';
import { Progress } from './ui/progress';
import { useToast } from './ui/use-toast';
import { User } from 'firebase/auth';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

type Props = {
  mode: 'selfie' | 'moments';
  auth: User;
};

export const Uploader: FC<Props> = ({ auth, mode }) => {
  const { toast } = useToast();
  const [uploadStatus, setUploadStatus] = useState<
    'uploading' | 'uploaded' | 'failed' | 'not-uploading' | 'paused'
  >('not-uploading');
  const [progress, setProgress] = useState(0);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    fileRejections,
  } = useDropzone({ accept: { 'image/*': [] }, onDrop, maxFiles: 4 });

  const style: any = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.name} className="text-xs">
      {file.name} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.name} className="text-xs">
        {file.name} - {file.size} bytes
        <ul className="font-extrabold">
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });

  const handleUpload = useCallback(async () => {
    if (acceptedFiles.length) {
      acceptedFiles.forEach((f) => {
        const uploadRef = ref(storage, `uploads/${auth.uid}/${f.name}`);
        const uploadTask = uploadBytesResumable(uploadRef, f);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = Math.floor(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
            switch (snapshot.state) {
              case 'paused':
                setUploadStatus('paused');
                break;
              case 'running':
                setUploadStatus('uploading');
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            setUploadStatus('failed');

            setTimeout(() => {
              setUploadStatus('not-uploading');
            }, 1500);
            console.error(error);
          },
          async () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            await getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                toast({
                  title: 'Uploaded successfully',
                  description: (
                    <a href={downloadURL} target="_blank">
                      preview
                    </a>
                  ),
                });

                setUploadStatus('uploaded');
              }
            );

            setTimeout(() => {
              setUploadStatus('not-uploading');
            }, 2000);
          }
        );
      });
    }
  }, [acceptedFiles, auth.uid, toast]);

  return (
    <section className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
        <p>(you can upload 4 photos only)</p>
      </div>
      <aside>
        {!!acceptedFileItems.length && (
          <div className="text-green-500">
            <h4>Accepted files:</h4>
            <ul>{acceptedFileItems}</ul>
            <Button
              onClick={handleUpload}
              variant="outline"
              className={`flex items-center mt-4
							${uploadStatus === 'failed' && 'text-red-500'}
              ${uploadStatus === 'not-uploading' && 'text-black'}
              ${uploadStatus === 'paused' && 'text-gray-500'}
              ${uploadStatus === 'uploaded' && 'text-green-500'}
              ${uploadStatus === 'uploading' && 'text-blue-500'}
							`}
            >
              {uploadStatus === 'uploading' ? (
                <FiLoader className="mr-2 animate-spin" />
              ) : (
                <IoCloudUploadSharp className="mr-2" />
              )}
              {uploadStatus === 'failed' && 'Upload failed'}
              {uploadStatus === 'not-uploading' && 'Upload!'}
              {uploadStatus === 'paused' && 'upload paused!'}
              {uploadStatus === 'uploaded' && 'uploaded!'}
              {uploadStatus === 'uploading' && 'uploading!'}
            </Button>
            {!!progress && (
              <Progress value={progress} className={`w-full mt-2`} />
            )}
          </div>
        )}
        {!!fileRejectionItems.length && (
          <div className="text-red-500">
            <h4>Rejected files:</h4>
            <ul>{fileRejectionItems}</ul>
          </div>
        )}
      </aside>
    </section>
  );
};

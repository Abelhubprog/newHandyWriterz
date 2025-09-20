import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { SUPPORTED_MEDIA_TYPES } from './types';

interface ImageUploaderProps {
  onUpload: (file: File) => void;
  initialImage?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload, initialImage }) => {
  const [preview, setPreview] = useState<string | null>(initialImage || null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      onUpload(file);
      setPreview(URL.createObjectURL(file));
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: SUPPORTED_MEDIA_TYPES.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
    >
      <input {...getInputProps()} />
      {preview ? (
        <img src={preview} alt="Preview" className="max-h-48 mx-auto" />
      ) : (
        isDragActive ?
          <p>Drop the image here ...</p> :
          <p>Drag 'n' drop an image here, or click to select one</p>
      )}
    </div>
  );
};

export default ImageUploader;

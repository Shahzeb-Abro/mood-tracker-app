import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { AvatarPlaceholder } from "@/assets/svgAssets/AvatarPlaceholder";

export const ImageUploader = ({ setValue, error, imgUrl }) => {
  const [preview, setPreview] = useState();
  const inputRef = useRef();
  const [localError, setLocalError] = useState("");

  const handleFileChange = (e) => {
    setLocalError("");
    const file = e.target.files[0];
    if (!file) return;

    // You can optionally do client-side validation too
    const isValidType = /(png|jpe?g)$/i.test(file.type);
    const isValidSize = file.size <= 250 * 1024;

    if (isValidType && isValidSize) {
      setValue("file", file); // Set to react-hook-form
      setPreview(URL.createObjectURL(file));
    } else {
      setLocalError("File must be JPEG or PNG and under 250KB");
      setValue("file", null); // Clear invalid file
      setPreview(null);
    }
  };

  console.log("Local Error", localError);

  useEffect(() => {
    setPreview(imgUrl);
  }, [imgUrl]);

  return (
    <div className="flex items-start gap-5">
      <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
        {preview ? (
          <img
            src={preview}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <AvatarPlaceholder />
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-preset-6 text-primary-text">Upload Image</span>
        <span className="text-preset-7 text-secondary-text">
          Max 250KB, PNG or JPEG
        </span>
        <div className="mt-2">
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
            ref={inputRef}
            onChange={handleFileChange}
          />
          <Button
            variant="secondary"
            label="Upload"
            type="button"
            onClick={() => inputRef.current?.click()}
          />
        </div>
        {error && <span className="text-red-600 text-xs mt-1">{error}</span>}
      </div>
    </div>
  );
};

import { IKContext, IKUpload } from "imagekitio-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ children, type, setProgress, setData }) => {
  const [isUploaded, setIsUploaded] = useState(false); // Track if the file is uploaded
  const ref = useRef(null);

  const onError = (err) => {
    toast.error("Image upload failed!");
    setIsUploaded(false); // Reset if upload fails
  };

  const onSuccess = (res) => {
    setData(res);
    setIsUploaded(true); // Set to true once upload is successful
  };

  const onUploadProgress = (progress) => {
    setProgress(Math.round((progress.loaded / progress.total) * 100));
  };

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursor-pointer" onClick={() => ref.current.click()}>
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          {isUploaded ? "Uploaded Successfully" : children}{" "}
          {/* Button text change */}
        </button>
      </div>
    </IKContext>
  );
};

export default Upload;

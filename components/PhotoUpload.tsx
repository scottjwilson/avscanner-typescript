import { ChangeEvent, useEffect, useState } from "react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";

interface Photo {
  url: string;
  size: string;
  onUpload: Function;
}
export default function PhotoUpload({ url, size, onUpload }: Photo) {
  const [photoUrl, setPhotoUrl] = useState<any | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabaseClient.storage
        .from("images")
        .download(path);
      if (error) {
        throw error;
      }
      if (data) {
        const url = URL.createObjectURL(data);
        setPhotoUrl(url);
      }
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  }

  const uploadPhoto = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);

      if (!e.target.files || e.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = e.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabaseClient.storage
        .from("images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {photoUrl ? (
        <img
          src={photoUrl}
          alt="media"
          className="avatar image"
          style={{ height: size, width: size }}
        />
      ) : (
        <div
          className="avatar no-image"
          style={{ height: size, width: size }}
        />
      )}
      <div style={{ width: size }}>
        <label
          className="border flex justify-center items-center py-2   rounded-md hover:bg-base-100 transition ease-in-out cursor-pointer"
          htmlFor="single"
        >
          {uploading ? "Uploading ..." : "Upload"}
        </label>
        <input
          style={{
            visibility: "hidden",
            position: "absolute",
          }}
          className="btn"
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadPhoto}
          disabled={uploading}
        />
      </div>
    </div>
  );
}

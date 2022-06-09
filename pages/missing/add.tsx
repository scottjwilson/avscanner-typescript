import PhotoUpload from "@/components/PhotoUpload";
import useForm from "@/lib/useForm";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

const AddPerson: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const { inputs, handleChange } = useForm({
    name: "",
    age: "",
    description: "",
    lastSeen: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await supabaseClient.from("missing_persons").insert([
        {
          name: inputs.name,
          age: inputs.age,
          description: inputs.description,
          last_seen: inputs.lastSeen,
          photo_url: photoUrl,
        },
      ]);
      if (data) {
        setIsLoading(false);
        toast.success("Successfully Added");
        router.push("/missing");
      }
    } catch (error) {
      alert(error);
    }
  }

  const inputClass = `input input-bordered`;

  return (
    <div className="max-w-md mx-auto bg-base-300 p-4 rounded-md">
      <h1 className="text-center text-xl">Add new missing person</h1>
      <form className="form-control" onSubmit={onSubmit}>
        <label htmlFor="name" className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          className={inputClass}
          type="text"
          placeholder="Their Name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
        <label htmlFor="age" className="label">
          <span className="label-text">Age</span>
        </label>
        <input
          className={inputClass}
          type="text"
          placeholder="Age"
          name="age"
          value={inputs.age}
          onChange={handleChange}
        />
        <label htmlFor="description" className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          className={inputClass}
          type="text"
          placeholder="Description"
          name="description"
          value={inputs.description}
          onChange={handleChange}
        />
        <label htmlFor="last seen" className="label">
          <span className="label-text">Last Seen</span>
        </label>
        <input
          className={inputClass}
          type="text"
          placeholder="Last Seen"
          name="lastSeen"
          value={inputs.lastSeen}
          onChange={handleChange}
        />
        <PhotoUpload
          url={photoUrl}
          size={150}
          onUpload={(url) => {
            setPhotoUrl(url);
            // updateProfile({ username, website, avatar_url: url });
          }}
        />
        <div className="mt-6">
          <button
            type="submit"
            className={
              isLoading
                ? "btn-primary btn btn-block loading"
                : "btn-primary btn btn-block"
            }
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPerson;

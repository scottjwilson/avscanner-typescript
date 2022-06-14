import PhotoUpload from "@/components/PhotoUpload";
import useForm from "@/lib/useForm";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent, SetStateAction, useState } from "react";
import toast from "react-hot-toast";

const AddPerson: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  // const { inputs, handleChange } = useForm({
  //   name: "",
  //   age: "",
  //   description: "",
  //   lastSeen: "",
  // });

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [lastSeen, setLastSeen] = useState("");
  const [dateMissing, setDateMissing] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await supabaseClient.from("missing_persons").insert([
        {
          name: name,
          age: age,
          description: description,
          lastSeen: lastSeen,
          photoUrl: photoUrl,
          dateMissing: dateMissing,
        },
      ]);
      if (data) {
        setIsLoading(false);
        toast.success("Successfully Added");
        router.push("/missing");
      }
    } catch (error) {
      alert(error);
      console.log(error);
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age" className="label">
          <span className="label-text">Age</span>
        </label>
        <input
          className={inputClass}
          type="text"
          placeholder="Age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="description" className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          className={inputClass}
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="last seen" className="label">
          <span className="label-text">Last Seen</span>
        </label>
        <input
          className={inputClass}
          type="text"
          placeholder="Last Seen"
          name="lastSeen"
          value={lastSeen}
          onChange={(e) => setLastSeen(e.target.value)}
        />
        <label htmlFor="date missing" className="label">
          <span className="label-text">Approximate Date Missing</span>
        </label>
        <input
          className={inputClass}
          type="date"
          placeholder="Last Seen"
          name="dateMissing"
          value={dateMissing}
          onChange={(e) => setDateMissing(e.target.value)}
        />
        <PhotoUpload
          url={photoUrl}
          size={150}
          onUpload={(url: SetStateAction<string>) => {
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

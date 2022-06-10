import PhotoUpload from "@/components/PhotoUpload";
import useForm from "@/lib/useForm";
import {
  supabaseClient,
  supabaseServerClient,
} from "@supabase/supabase-auth-helpers/nextjs";
import { GetServerSideProps, NextPage } from "next";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

const MissingSlug: NextPage = ({ person }) => {
  const [loading, setLoading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");

  const router = useRouter();

  const { inputs, handleChange } = useForm({
    name: person.name,
    age: person.age,
    description: person.description,
    lastSeen: person.last_seen,
  });

  async function onSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await supabaseClient
        .from("missing_persons")
        .update([
          {
            name: inputs.name,
            age: inputs.age,
            description: inputs.description,
            last_seen: inputs.lastSeen,
            photo_url: photoUrl,
          },
        ])
        .eq("id", person.id);
      if (data) {
        setLoading(false);
        toast.success("Successfully Updated");
        router.push("/missing");
      }
    } catch (error) {
      alert(error);
    }
  }

  async function handleDelete(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await supabaseClient
        .from("missing_persons")
        .delete()
        .eq("id", person.id);
      if (data) {
        setLoading(false);
        toast.success("Successfully Deleted");
        router.push("/missing");
      }
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      {/* <pre>{JSON.stringify(person, null, 2)}</pre> */}

      <div className="max-w-md mx-auto  rounded-md p-8 bg-base-300">
        <h1 className="text-center text-xl">Edit missing person</h1>
        <form className="form-control" onSubmit={onSubmit}>
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            className="input input-primary"
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
            className="input input-primary"
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
            className="input input-primary"
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
            className="input input-primary"
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

          <div className="mt-6 mb-2">
            <button
              type="submit"
              className={
                loading
                  ? "btn-primary btn btn-block loading"
                  : "btn-primary btn btn-block"
              }
            >
              Update
            </button>
          </div>
        </form>
        <div>
          <button
            onClick={handleDelete}
            className={
              loading
                ? "btn-error btn-outline btn btn-block loading"
                : "btn-error btn-outline btn btn-block"
            }
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx;

  const { data: person, error } = await supabaseServerClient(ctx)
    .from("missing_persons")
    .select("*")
    .filter("id", "eq", params.id)
    .single();

  if (error) {
    console.log(error.message);
  }

  return { props: { person } };
};

export default MissingSlug;

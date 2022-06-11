import { useUser } from "@supabase/supabase-auth-helpers/react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import { NextSeo } from "next-seo";
import useForm from "@/lib/useForm";

export default function SignInPage() {
  const router = useRouter();
  const { user } = useUser();

  const [loading, setLoading] = useState(false);
  const { inputs, handleChange } = useForm({
    full_name: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabaseClient.auth.signUp(
      {
        email: inputs.email,
        password: inputs.password,
      },
      { data: { full_name: inputs.full_name } }
    );
    if (error) {
      alert(JSON.stringify(error));
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user) {
      router.push("/");
    }
    // if (user && cart.length === 0) {
    //   router.push("/menu");
    // }
    // if (user && cart.length > 0) {
    //   router.push("/checkout");
    // }
  }, [user, router]);

  return (
    <>
      <NextSeo title="Sign Up" description="AVSN Sign Up" />
      <div className="max-w-md mx-auto">
        <div className="mx-4  p-4 rounded-xl bg-base-300 shadow-xl">
          <h1 className="text-center mt-2">Create an Account</h1>

          <form className="form-control" onSubmit={onSubmit} method="post">
            <div className="flex justify-center space-x-2 items-center"></div>
            <Link href="/signin">
              <a className="description text-center mt-2 text-sm">
                Already have an account?
                <span className="font-semibold underline ml-1">
                  Click here to Login
                </span>
              </a>
            </Link>
            <Link href="/forgotpassword">
              <a className="description text-center mt-2 text-sm text-primary-focus">
                <span className="font-semibold"> Forgot Password?</span>
                <span className=" underline ml-1">Reset your password</span>
              </a>
            </Link>
            <label htmlFor="full_name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              className="input input-primary"
              type="text"
              placeholder="Name"
              name="full_name"
              value={inputs.full_name}
              onChange={handleChange}
            />
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input input-primary"
              type="email"
              placeholder="Your email"
              autoComplete="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />

            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              className="input input-primary"
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            />
            {/* <input className="syrrup" type="syrrup" name="syrrup" /> */}
            <div className="mt-6">
              <button
                type="submit"
                className="btn   btn-primary btn-block  text-white"
                disabled={loading}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
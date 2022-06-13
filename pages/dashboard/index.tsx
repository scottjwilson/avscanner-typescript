import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent } from "react";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const handleLogout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <h1>Welcomne</h1>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default Dashboard;

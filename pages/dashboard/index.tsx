import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

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
    <div className="code-container">
      <h1>Welcome</h1>
      <button onClick={handleLogout} className="btn">
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;

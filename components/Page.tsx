import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import React from "react";
import { Props } from "types";
import MobNav from "./MobNav";

const Page = ({ children }: Props) => {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 3000,
          position: "top-center",

          style: {
            paddingInline: "1rem",
            fontFamily: "karla, sans-serif",
            fontSize: ".9rem",
          },
        }}
      />
      <div
        style={{ WebkitTapHighlightColor: "transparent" }}
        className="bg-base-100"
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <MobNav />
        <Footer />
      </div>
    </>
  );
};

export default Page;

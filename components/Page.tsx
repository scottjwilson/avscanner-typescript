import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

export default function Page({ children }) {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 3000,
          position: "top-center",
          reverseOrder: "true",
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
        <Footer />
      </div>
    </>
  );
}

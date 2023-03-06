"use client";
import toast, { Toaster } from "react-hot-toast";

export default function ClientProvider() {
  return (
    <>
      {/* 建立dark模式的toaster */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          style: {
            background: "#232324",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

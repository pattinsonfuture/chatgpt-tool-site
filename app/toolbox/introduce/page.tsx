import Introduce from "@/components/Introduce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "介紹產品",
};

export default function page() {
  return (
    <>
      <Introduce />
    </>
  );
}

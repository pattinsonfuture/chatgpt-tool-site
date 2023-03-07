import Toolbox from "@/components/Toolbox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "介紹產品",
};

export default function page() {
  return (
    <>
      <Toolbox toolboxcategory="introduce" />
    </>
  );
}

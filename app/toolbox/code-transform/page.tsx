import Toolbox from "@/components/Toolbox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "轉換語言",
};

export default function page() {
  return (
    <>
      <Toolbox toolboxcategory="code-transform" />
    </>
  );
}

import Toolbox from "@/components/Toolbox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "修正程式",
};

export default function page() {
  return (
    <>
      <Toolbox toolboxcategory="code-fix" />
    </>
  );
}

import Toolbox from "@/components/Toolbox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "解釋程式",
};

export default function page() {
  return (
    <>
      <Toolbox toolboxcategory="code-interpret" />
    </>
  );
}

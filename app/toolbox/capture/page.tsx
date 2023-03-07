import Toolbox from "@/components/Toolbox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "擷取摘要",
};

export default function page() {
  return (
    <>
      <Toolbox toolboxcategory="capture" />
    </>
  );
}

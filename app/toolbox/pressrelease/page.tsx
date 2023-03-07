import Toolbox from "@/components/Toolbox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "生成新聞稿",
};

export default function page() {
  return (
    <>
      <Toolbox toolboxcategory="pressrelease" />
    </>
  );
}

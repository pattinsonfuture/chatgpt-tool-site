import { ToolboxChooseFormProps } from "@/constants/toolbox-typings";
import IntroduceForm from "./IntroduceForm";

function ToolboxChooseForm(props: ToolboxChooseFormProps) {
  if (props.toolboxcategory === "introduce") {
    return <IntroduceForm {...props} />;
  } else {
    return <div>其他表單</div>;
  }
}

export default ToolboxChooseForm;

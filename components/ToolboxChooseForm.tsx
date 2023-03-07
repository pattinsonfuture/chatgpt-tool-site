import { ToolboxChooseFormProps } from "@/constants/toolbox-typings";
import CaptureForm from "./ToolboxForm/CaptureForm";
import IntroduceForm from "./ToolboxForm/IntroduceForm";
import PressreleaseForm from "./ToolboxForm/PressreleaseForm";

function ToolboxChooseForm(props: ToolboxChooseFormProps) {
  if (props.toolboxcategory === "introduce") {
    return <IntroduceForm {...props} />;
  } else if (props.toolboxcategory === "pressrelease") {
    return <PressreleaseForm {...props} />;
  } else if (props.toolboxcategory === "capture") {
    return <CaptureForm {...props} />;
  }
  return <div>其他表單</div>;
}

export default ToolboxChooseForm;

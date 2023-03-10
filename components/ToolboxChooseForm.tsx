import { ToolboxChooseFormProps } from "@/constants/toolbox-typings";
import CaptureForm from "./ToolboxForm/CaptureForm";
import CodeFixForm from "./ToolboxForm/CodeFixForm";
import CodeInterpretForm from "./ToolboxForm/CodeInterpretForm";
import CodeTransformForm from "./ToolboxForm/CodeTransformForm";
import IntroduceForm from "./ToolboxForm/IntroduceForm";
import PressreleaseForm from "./ToolboxForm/PressreleaseForm";

function ToolboxChooseForm(props: ToolboxChooseFormProps) {
  if (props.toolboxcategory === "introduce") {
    return <IntroduceForm {...props} />;
  } else if (props.toolboxcategory === "pressrelease") {
    return <PressreleaseForm {...props} />;
  } else if (props.toolboxcategory === "capture") {
    return <CaptureForm {...props} />;
  } else if (props.toolboxcategory === "code-interpret") {
    return <CodeInterpretForm {...props} />;
  } else if (props.toolboxcategory === "code-fix") {
    return <CodeFixForm {...props} />;
  } else if (props.toolboxcategory === "code-transform") {
    return <CodeTransformForm {...props} />;
  }
  return <div>其他表單</div>;
}

export default ToolboxChooseForm;

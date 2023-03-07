export type toolboxcategory =
| "introduce"
| "pressrelease"
| "capture"
| "commands"
| "clean"
| "convert"
| "fix"
| "interpret"
| "regex"
;

export type CombinedFormInput = IntroduceFormInput & PressreleaseFormInput & CaptureFormInput;

export interface ToolboxChooseFormProps {
    toolboxcategory: toolboxcategory;
    form: CombinedFormInput;
    setForm: React.Dispatch<React.SetStateAction<CombinedFormInput>>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export interface IntroduceFormInput {
    product_name: string;
    introductory_tone: string;
    ingredients: string;
    length: number;
    other: string;
}

export interface PressreleaseFormInput {
    title: string;
    keywords: string;
}

export interface CaptureFormInput {
    content: string;
}

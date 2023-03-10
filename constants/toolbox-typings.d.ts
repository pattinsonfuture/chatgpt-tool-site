export type toolboxcategory =
| "introduce"
| "pressrelease"
| "capture"
| "code-transform"
| "code-clean"
| "code-convert"
| "code-fix"
| "code-interpret"
| "code-regex"
;

export type CombinedFormInput = IntroduceFormInput & PressreleaseFormInput & CaptureFormInput & CodeInterpretFormInput & CodeTransformFormInput;

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

export interface CodeInterpretFormInput {
    language: string;
    code: string;
}

export interface CodeTransformFormInput {
    language: string;
    tolanguage: string;
    code: string;
}

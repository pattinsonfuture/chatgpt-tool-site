import { CombinedFormInput, toolboxcategory } from "@/constants/toolbox-typings";

export const ChoosePrompt = (toolboxcategory:toolboxcategory,form:CombinedFormInput) => {
    console.log("ChoosePrompt",toolboxcategory,form);
    
    if (toolboxcategory === "introduce") {
        return `老闆:用${form.introductory_tone}的語氣描述「${form.product_name}」，列舉成分${form.ingredients}的效益，大約使用${form.length}個字來描述。${form.other??""}\n你:`
    }else if (toolboxcategory === "pressrelease") {
        return `老闆:新聞標題為「${form.title}」，關鍵字有${form.keywords}，撰寫一篇新聞內容。\n你:`
    }else if (toolboxcategory === "capture") {
        return `老闆:「${form.content}」總結文章的摘要。\n你:`
    }else if (toolboxcategory === "code-commands") {
        return `老闆:請輸入你想要執行的指令。\n你:`
    }else if (toolboxcategory === "code-clean") {
        return `老闆:請輸入你想要簡潔化的程式碼。\n你:`
    }else if (toolboxcategory === "code-convert") {
        return `老闆:請輸入你想要重構的程式碼。\n你:`
    }else if (toolboxcategory === "code-fix") {
        return `### Fix bugs in the below function\n### Buggy ${form.language}\n${form.code}\n### Fixed ${form.language}`
    }else if (toolboxcategory === "code-interpret") {
        return `${form.code}\n\n\"\"\"\n解釋以上 ${form.language} 程式碼的意思:\n\"\"\"\n解釋:`
    }else if (toolboxcategory === "code-regex") {
        return `老闆:請輸入你想要使用的正規表達式。\n你:`
    }
    return `老闆:寫一篇關於「${form.title}」的新聞內容，關鍵字有${form.keywords}。\n你:`
}
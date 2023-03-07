import { CombinedFormInput, toolboxcategory } from "@/constants/toolbox-typings";

export const ChoosePrompt = (toolboxcategory:toolboxcategory,form:CombinedFormInput) => {
    if (toolboxcategory === "introduce") {
        return `老闆:用${form.introductory_tone}的語氣描述「${form.product_name}」，列舉成分${form.ingredients}的效益，大約使用${form.length}個字來描述。${form.other??""}\n你:`
    }else if (toolboxcategory === "pressrelease") {
        return `老闆:寫一篇關於「${form.title}」的新聞稿，關鍵字有${form.keywords}。\n你:`
    }
    return `老闆:寫一篇關於「${form.title}」的新聞稿，關鍵字有${form.keywords}。\n你:`
}
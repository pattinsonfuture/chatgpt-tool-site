interface ToolList {
    label:string
    lists:Program[] | WrittenContent[] | Business[]
}

type Program = 
| "闡釋程式"
| "修正程式"
| "Commands"
| "程式簡潔化"
| "重構程式"
| "正規表達式"

type WrittenContent = 
| "取得摘要"
| "撰寫新聞稿"

type Business = 
| "介紹產品"
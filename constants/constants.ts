import { ToolLists } from "./typings";

export const toolListMap: ToolLists[] = [
    {
        category:"程式語言",
        lists:[
            {label:"解釋程式",slug:"interpret"},
            {label:"修正程式",slug:"fix"},
            {label:"Commands",slug:"commands"},
            {label:"程式簡潔化",slug:"clean"},
            {label:"重構程式",slug:"convert"},
            {label:"正規表達式",slug:"regex"},
        ]
    },
    {
        category:"撰寫文章",
        lists:[
            {label:"擷取摘要",slug:"capture"},
            {label:"生成新聞稿",slug:"pressrelease"},
        ]
    },
    {
        category:"市場業務",
        lists:[
            {label:"介紹產品",slug:"introduce"},
        ]
    }
]
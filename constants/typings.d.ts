interface ToolLists {
    category:string
    lists:Program[] | WrittenContent[] | Business[]
}

type Program = 
| {label:"解釋程式",slug:"interpret"}
| {label:"修正程式",slug:"fix"}
| {label:"Commands",slug:"commands"}
| {label:"程式簡潔化",slug:"clean"}
| {label:"重構程式",slug:"convert"}
| {label:"正規表達式",slug:"regex"}

type WrittenContent = 
| {label:"擷取摘要",slug:"capture"}
| {label:"撰寫新聞稿",slug:"pressrelease"}

type Business = 
| {label:"介紹產品",slug:"introduce"}

interface MessageRecord {
    text:string;
    createdAt:Date;
    user:{
        _id:string;
        name:string;
        avatar:string;
    };
}
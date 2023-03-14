# ChatGPT 工具箱

![Logo](https://github.com/pattinsonfuture/chatgpt-tool-site/blob/main/public/images/c07aa58e518a0a01.png?raw=true)

> 這是一個使用 Next.js和 Openai API 開發的 GPT工具箱。

### [Demo](https://chatgpt-tool-site.vercel.app/)

### How To Use
1. 克隆或下載本存儲庫
2. 在終端中進入存儲庫目錄
3. 安裝所需的依賴項
   ```bash
   npm install
   # 或者
   yarn install
   ```
4. 建立本地環境檔 `.env.local`
   到[Openai](https://platform.openai.com/account/api-keys)註冊你的密鑰
   ```bash
   OPENAI_API_KEY=
   ```
5. 啟動環境
   ```bash
   npm run dev
   # 或者
   yarn dev
   ```
6. 進入網址`http://localhost:3000/`

在終端中進入存儲庫目錄

執行以下命令安裝所需的依賴項：

### 功能特色 TODO
- [x] Robot聊天室
- [x] 程式語言
  - [x] 解釋程式
  - [x] 修正程式
  - [x] 轉換語言
  - [ ] ~~程式簡潔化~~
  - [ ] ~~重構程式~~
  - [ ] ~~正規表達式~~
- [x] 撰寫文章
  - [x] 擷取摘要
  - [x] 生成新聞稿
- [x] 市場業務
  - [x] 介紹產品
- [ ] 精美的介面：需要一個UI大大求救
- [ ] 精美的動畫
- [x] Openai API
  - [x] chat completions API (gpt-3.5-turbo)
  - [x] completions API (text-davinci-003)
  - [x] using nextjs edge with ReadableStream 



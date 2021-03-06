# Express Blog

本作業為 程式實驗導師計畫第四期的第十七週 - 現代後端開發（上） hw1，[課綱點此](https://github.com/Lidemy/mentor-program-4th-Lauviah0622/tree/master/homeworks/week17)。作業沒有一個具體的名子，既然是用 express 寫的，所以就姑且稱作 Express Blog 。

利用 express 加上 ejs，資料部份則是使用 sequelize。[Demo](https://express-blog.lauviah.io/) 放在 aws 的 ec2 上面。

## 功能說明

### 訪客
  - [所有文章](https://express-blog.lauviah.io/)，點擊文章可觀看詳細文章內容
  - [文章分類列表](https://express-blog.lauviah.io/categories)
  - 詳細文章內容
  - [關於我](https://express-blog.lauviah.io/about)
  - 登入

### 管理員

可以使用帳號：`admin` 密碼：`admin` 做登入

- 新增文章
  - 文章標題
  - 可選擇原分類或新增分類
  - 文章內容使用 ckeditor，能加入文字樣式
- 後台管理
  - 編輯文章
  - 刪除文章

## 如何部署

本專案預設使用 pm2 做部署

0. 安裝 pm2 以及 專案的 dependencies
    ```
    NODE_ENV=production npm install
    npm install pm2@latest -g 
    ```

2. 設定環境變數  
    複製 `.envtemplate` 並更改檔名為 `.env`
    ```
    cp .envtemplate .env
    ```  

    然後修改資料庫登入資訊，並修改 DB_PROD 的環境變數
    ```
    DB_PROD=mysql:[usename]:[password]@[ip]:[port]/[dbname]
    ```

    ※目前只使用過 mysql，使用其他資料庫可能會有相容性問題※

3. 資料庫設定
    建立 table 還有基本的內容

    ```
    npm run db_mgr
    ```

4. 執行專案
    ```
    NODE_ENV=production npm run deploy
    ```







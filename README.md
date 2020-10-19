- index v
    1. POST/login(session) => getPassword v
    2. GET/logout(session) v
    3. GET/ => getAllArticle
- aboutme v
    1. GET/about
- article v
    1. GET/article/:id => getArticle
- admin v
    1. GET/ => admin v
    2. DELETE/ => deleteArticle
- categories v
    1. GET/ => getAllArticle
- edit v
    1. GET/edit/:id v
    2. POST/article/:id => updateArticle
- post v
    1. GET/addpost => render('addpost')
    2. POST/article => addArticle
    3. GET/categoires => getCategories
    4. POST/categories => addCategories
    

## databaes
- articles
    1. id
    2. title
    3. content
    4. isDelete
    5. categoryID()
    6. createdAt
    7. updatedAt
- categories
    0. id
    1. name


npx sequelize-cli model:generate --name Article --attributes title:string,contnet:text,isDelete:boolean,categoryId:integer
npx sequelize-cli model:generate --name Category --attributes name:string

## middleware
- checkstatus





- [x] view
- [x] router
- [x] api
- [] model
- [] login
- [] err handle



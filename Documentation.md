## Folder Structure

```
- config/
---- db.js                  // Database setup using mongoose.
- controllers/              // Controllers to handle requests.
---- category.js
---- product.js
---- index.js
- models/                   // Mongoose models. Define database structure.
---- Category.js
---- Product.js
- routes/                   // Routing endpoints.
---- category.js
---- product.js
---- index.js
- test/                     // API tests.
---- routes.test.js
- index.js                  // Main server setup.
- .gitignore
- Documentation.md          // Documentation of the project
- package.json              // define all our node app and dependencies
- README.md                 // Basic details of the project, how to run and test
```

## Schema

### Category

| Property | Type       |
| -------- | ---------- |
| name     | string     |
| products | [ObjectId] |

### Product

| Property | Type     |
| -------- | -------- |
| name     | string   |
| category | ObjectId |
| brand    | string   |
| image    | string   |

## Endpoints

#### Add a category

```
URL : \category\add
Method : POST
URL Params : -
Data Params : {
                name  : string
              }
```

#### Add a Product

```
URL : \product\add
Method : POST
URL Params : -
Data Params : {
                name  : string,
                category : string,
                brand : string,
                image : string
              }
```

#### Update a Product

```
URL : \product\add\:id
Method : POST
URL Params : id = string
Data Params : {
                name  : string,
                category : string,
                brand : string,
                image : string
              }
```

#### Delete a Product

```
URL : \product\delete\:id
Method : GET
URL Params : id = string
Data Params : -
```

#### Get a Product

```
URL : \product\:id
Method : GET
URL Params : id = string
Data Params : -
```

#### Filter Products

```
URL : \products\?
Method : GET
URL Params : name = string, category = string, brand = string
Data Params : -
```

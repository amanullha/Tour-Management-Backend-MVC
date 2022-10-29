<hr>

## **_Tour Management System API_**

<hr>

Here I use

<ul>
<li>Node Js - for server running</li>
<li>Express Js - for create API easily</li>
<li>Dotenv - for environement varriable</li>
<li>Cors - for middleware</li>
<li>Colors - for colorful message</li>
<li>Mongoose - for use mongoDB easily</li>
<li>Nodemon - for simply restarts node application</li>
<li>underscore -js is a utility library that is widely used to deal with arrays, collections and objects in JavaScript.</li>
</ul>

In this application has 6 API end-point

Application URL

```bash
https://tour-management-system-backend-mvc.vercel.app/
```

<ol>
<li>

### _Get all tour package or specifice tour package as your query API_

```bash
https://tour-management-system-backend-mvc.vercel.app/api/v1/tours
```

This get api end-point provide all tours package or specific tours package as your query. Here dafault limit 3 which means in one page show only 5 tour package. Your can query by fields, limit, sort, page, logical operation like as greater then or less then etc., and data many more. Query perameter link like this

```bash
https://tour-management-system-backend-mvc.vercel.app/api/v1/tours?price[gt]=0&sort=price,visitedCount&page=1&limit=10&fields=name,price,visitedCount
```

</li>
<li>

### _Create tour package API_

```bash
https://tour-management-system-backend-mvc.vercel.app/api/v1/tours
```

This post api create new tour package given body data. This body data is validate by mongoose schema. Schema design is

```javascript

"name": "Dhaka full-day",
"description": "Book this full-day tour of Sonargaon and Mainamati to get to know the",
"price": 2580,
"subscription":"Premium",
"status": "Available",
"visitedCount":0,
"image": "https://assets.vogue.in/photos/5ce43c1f9cc0c0f041f9eae9/master/pass/Bangkok-city-guide.jpg"

```

</li>
<li>

### _Get the specific tour package API end-point_

```bash
https://tour-management-system-backend-mvc.vercel.app/api/v1/tours/id
```

Example API

```bash
https://tour-management-system-backend-mvc.vercel.app/api/v1/tours/635d6e2d492ed060e52e9212
```

Get a given id tour package information and that package is count a view in each end-point hitting

</li>
<li>

### _Update the specific tour package API end-point_

```bash
https://tour-management-system-backend-mvc.vercel.app/api/v1/tours/id
```

Example API

```bash
https://tour-management-system-backend-mvc.vercel.app/api/v1/tours/635d6e2d492ed060e52e9212
```

This api get the id form url params and get the update data from the req body. Body example like this

```bash
{
  "price": "500"
}
```

</li>

<li>

### _Get top 3 Trending tour package API end-point_

```bash
https://tour-management-system-backend-mvc.vercel.app/api/v1/tours/trending?page=1&limit=3&fields=name,visitedCount,price
```

</li>
<li>

### _Get top 3 cheapest tour package API end-point_

```bash
https://tour-management-system-backend-mvc.vercel.app/api/v1/tours/cheapest?page=1&limit=3&fields=name,visitedCount,price
```

</li>
</ol>

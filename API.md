## API Documentation

This sample project will give you a small RESTful API to build your template against. It is built using JavaScript/Node.js (our language of choice), ExpressJS (a small, lightweight web MVC framework) & Mongoose (a MongoDB object modelling library).

**List Users**
----
Returns a list of Users

* **URL**

  `/users`

* **Method:**

  `GET`

*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    [{
      "_id": "57b330de848a005e48f5de94",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "olivia",
        "last": "young"
      },
      "location": {
        "street": "1119 grove road",
        "city": "Mountmellick",
        "state": "rhode island",
        "zip": 88061
      },
      "email": "olivia.young@example.com",
      "username": "crazykoala938",
      "password": "malibu",
      "salt": "78TEnNQ1",
      "md5": "9bebcc9d890f8c9e04c9e40fc1f41476",
      "sha1": "36d6a69cabff0ad780a3dcceb4e94d44edb62fc6",
      "sha256": "9e39c873967f52d67e8d052aad87daf4b63d5464a27de982b64abfe9b208efc8",
      "registered": 1411100094,
      "dob": 818810543,
      "phone": "011-475-1126",
      "cell": "081-725-2254",
      "PPS": "4335321T",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
      },
      "__v": 0
    }, {
      "_id": "57b330de848a005e48f5de95",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "susanne",
        "last": "russell"
      },
      "location": {
        "street": "6896 grafton street",
        "city": "Naas",
        "state": "louisiana",
        "zip": 25003
      },
      "email": "susanne.russell@example.com",
      "username": "ticklishswan833",
      "password": "reader",
      "salt": "Qp38szSx",
      "md5": "57f8e3404f1926bf3fa50c152f037a33",
      "sha1": "43bf7f8fe85e46957cdcb33be61f19dfe9014317",
      "sha256": "c12980f91c86dae1ba9d4d880e8d51645e59f95c6b3d1f28854891d6587b39b5",
      "registered": 1345063087,
      "dob": 481147180,
      "phone": "061-032-9311",
      "cell": "081-609-1066",
      "PPS": "7348900T",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/69.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
      },
      "__v": 0
    }]
    ```

* **Error Response:**

* **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:**

  ```javascript
  { "error": "Error listing users" }
  ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
  ```


**Show User**
----
  Returns JSON data about a single user.

* **URL**

  `/users/:id`

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {
      "_id": "57b330de848a005e48f5de94",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "olivia",
        "last": "young"
      },
      "location": {
        "street": "1119 grove road",
        "city": "Mountmellick",
        "state": "rhode island",
        "zip": 88061
      },
      "email": "olivia.young@example.com",
      "username": "crazykoala938",
      "password": "malibu",
      "salt": "78TEnNQ1",
      "md5": "9bebcc9d890f8c9e04c9e40fc1f41476",
      "sha1": "36d6a69cabff0ad780a3dcceb4e94d44edb62fc6",
      "sha256": "9e39c873967f52d67e8d052aad87daf4b63d5464a27de982b64abfe9b208efc8",
      "registered": 1411100094,
      "dob": 818810543,
      "phone": "011-475-1126",
      "cell": "081-725-2254",
      "PPS": "4335321T",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
      },
      "__v": 0
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error reading user" }
    ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users/1",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });

**Create User**
----

Creates a new user

* **URL**

  `/users`

* **Method:**

  `PUT`

*  **URL Params**

  None

* **Data Params**

  JSON input

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**

    ```javascript
    {
      "__v": 0,
      "gender": "male",
      "name": {
        "last": "Fan",
        "first": "David",
        "title": "mr"
      },
      "location": {
        "zip": 73994,
        "state": "Munster",
        "city": "Waterford",
        "street": "12 Monet Court"
      },
      "email": "113410128@umail.ucc.ie",
      "username": "itsdavidfan",
      "password": "lol",
      "salt": "NaCL",
      "md5": "7cbcfc6659a4334aef4ebeae6406d0b3",
      "sha1": "6eb782953f39720b66abb1a70932372e422bc2d0",
      "sha256": "e4d3e58a4b3b28c20ff8c3ba8af5ac0720ad352a32c8f5f348d00c02fa42e1ca",
      "registered": 1193223661,
      "dob": 795430595,
      "phone": "051-350-201",
      "cell": "083-005-8027",
      "PPS": "7466773T",
      "picture": {
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/63.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/63.jpg",
        "large": "https://randomuser.me/api/portraits/men/63.jpg"
      },
      "_id": "57f7d44252743c1990ccd688"
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error creating user" }
    ```

**Delete User**
----

Deletes a user

* **URL**

  `/users/:id`

* **Method:**

  `DELETE`

*  **URL Params**

  `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 204 <br />
    

* **Error Response:**

  * **Code:** 404 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "User not found" }
    ```

**Update User**
----

Updates a users details
Updating "name" and "location" not working. Multidimensional arrays not working.

* **URL**

  `/users/:id`

* **Method:**

  `PUT`

*  **URL Params**

  `id=[string]`

* **Data Params**

  JSON input

* **Success Response:**

* **Code:** 201 <br />
    **Content:**

  ```javascript
    {
      "__v": 0,
      "gender": "male",
      "name": {
        "last": "Fan",
        "first": "David",
        "title": "mr"
      },
      "location": {
        "zip": 73994,
        "state": "Munster",
        "city": "Waterford",
        "street": "12 Monet Court"
      },
      "email": "113410128@umail.ucc.ie",
      "username": "itsdavidfan",
      "password": "lol",
      "salt": "NaCL",
      "md5": "7cbcfc6659a4334aef4ebeae6406d0b3",
      "sha1": "6eb782953f39720b66abb1a70932372e422bc2d0",
      "sha256": "e4d3e58a4b3b28c20ff8c3ba8af5ac0720ad352a32c8f5f348d00c02fa42e1ca",
      "registered": 1193223661,
      "dob": 795430595,
      "phone": "051-350-201",
      "cell": "083-005-8027",
      "PPS": "7466773T",
      "picture": {
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/63.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/63.jpg",
        "large": "https://randomuser.me/api/portraits/men/63.jpg"
      },
      "_id": "57f7d44252743c1990ccd688"
    }
    ```
    

* **Error Response:**

  * **Code:** 404 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "User not found" }
    ```


----
Inspired by https://gist.github.com/iros/3426278

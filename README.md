# Online Grocery Cart


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Online Grocery Cart is a Front end built using angualar framework which is serving api's from Online Grocery Cart backend by nodejs,

## Features

- User/Admin Login with JWT token.
- User/Admin Singup with JWT token.
- Password Update
- Get Profile
- Delete Account/Profile.
- Add Products(admins only).
- Update Product(admins only).
- Delete Product(admins only).
- Get All Products
- Get Single Product


## Tech

Online Grocery Cart uses some open source libraries and frameworks to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Twitter Bootstrap] - css styling library
- [font awesome] - icons library
- [node.js] - evented I/O for the backend

And of course Online Grocery Cart itself is open source with a [public repository][frontrepo]
on GitHub.

## Installation

Online Grocery Cart requires [Node.js](https://nodejs.org/) v10+ and [Angular](https://angular.io/) v12+ to run properly.

Install the dependencies and devDependencies and start the server.

```sh
cd online-grocery-cart-frontend
npm i
ng serve
visit http://localhost:4200/auth/admin/signup
```



## Running this project

Make sure backend of [online grocery cart](https://github.com/aishbetu/online-grocery-cart-backend-assessmenet) is also running in the backend along with mongodb server.


Open your favorite Browser and follow.

**For Admins**
1) To Signup as Admin:
   visit this url - http://localhost:4200/auth/admin/signup

2) On successfull signup you'll redirect to manage Products where you can add products by add product button and can view all, update or delete product from the table.

3) Onclick on Logout you'' be redirected to the url - http://localhost:4200/auth/admin/login'. From here you can login again as a admin

**For User**
1) To Signup as an user:
   visit this url - http://localhost:4200/auth/signup

2) On successfull signup you'll redirect to Products page from where you can view all products, click a product to view details, add to cart. You can also click on you name to check you profile and update password. You can also check your cart.

3) Onclick on Logout you'' be redirected to the url - http://localhost:4200/auth/login'. From here you can login again as a user


## License

MIT


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


[node.js]: <http://nodejs.org>
[Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
[AngularJS]: <http://angularjs.org>
[font awesome]: <https://fontawesome.com/>
[frontrepo]: <https://github.com/aishbetu/online-grocery-cart-frontend>

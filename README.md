<h1 align="center"> 🐄 Online Cow Selling Backend for Eid Ul Adha 🐪 </h1>

## 🚩 Table of Contents
- [Server](#server)
- [Features](#features)
- [Project Routes](#project-routes)
- [Technologies](#technologies)
- [Dev Dependencies](#devdependencies)

## Server
* Live: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/

## Technologies
- TypeScript ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
- Express ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)
- Mongoose ![Mongoose](https://img.shields.io/badge/-Mongoose-880000?logo=mongoose&logoColor=white)

## Features

1. User Registration and Authentication:
* Users can register on the platform by providing their basic information, such as name, phone number, and address.
* User authentication is implemented to ensure secure access to the platform's features.
* User roles are defined as "seller" and "buyer" to differentiate between those who sell cows and those who intend to buy.

2. Cow Listing Management:
* Sellers can create listings for cows they want to sell.
* Each cow listing includes details such as name, age, breed, category (e.g., dairy, beef), price, and location.
* Sellers can update the details of their cow listings, such as price and availability status (for sale or sold out).
* Cow listings are displayed on the platform, allowing potential buyers to view available cows.

3. Cow Search and Filtering:
* Buyers can search for cows based on various criteria, including breed, category, and price range.
* The platform provides a search interface that allows buyers to find cows that match their preferences.
* Filtering options are available to refine search results based on specific attributes.

4. User Budget and Income Tracking:
* Buyers have the option to set a budget for their cow purchase.
* The platform keeps track of the buyer's budget, ensuring that they stay within their allocated amount.
* Sellers can track their income from selling cows through the platform.

5. Error Handling and Security:
* Proper error handling mechanisms are implemented to ensure smooth operation and provide helpful error messages to users when issues occur.

6. API Documentation:
* Detailed documentation is provided for the backend APIs, including the available routes, request/response formats, and error handling.

### Project Routes

#### User
* Create new User **[POST]**: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/auth/signup
* Get all users **[GET]** : https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/users
* Get singel user  **[GET]**: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/users/648df86fd68048fff68fc2a0
* Update singel user  **[PATCH]**: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/users/648df86fd68048fff68fc2a0
* Delete singel user  **[DELETE]**: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/users/648df86fd68048fff68fc2a0

#### Cow
* Create cow **[POST]**: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/cows
* Get all cow **[GET]**: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/cows
* Get singel  cow **[GET]**: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/cows/648dfb30beb9c6bfbc60d05b
* Get update  cow **[PATCH]**: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/cows/648dfb30beb9c6bfbc60d05b
* Get delete  cow **[DELETE]**: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/cows/648dfb30beb9c6bfbc60d05b

#### Cow Pagination 
* Search **[GET]**: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/cows/?searchTerm=Bar 


#### Orders
* Creating new order **[POST]** : https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/orders
* Get order **[GET]**: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/orders


## DevDependencies

- **@types/cors** (^2.8.13): TypeScript definitions for the 'cors' library.
- **@types/express** (^4.17.17): TypeScript definitions for the 'express' library.
- **husky** (^8.0.3): Git hooks made easy.
- **lint-staged** (^13.2.2): Run linters on git staged files.
- **ts-node-dev** (^2.0.0): TypeScript fast-reloading development server.
- **typescript** (^5.1.3): TypeScript programming language.
- **@typescript-eslint/eslint-plugin** (^5.59.11): ESLint plugin for TypeScript.
- **@typescript-eslint/parser** (^5.59.11): TypeScript parser for ESLint.
- **cors** (^2.8.5): Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.
- **dotenv** (^16.2.0): Loads environment variables from a .env file into process.env.
- **eslint** (^8.42.0): Pluggable JavaScript linter.
- **eslint-config-prettier** (^8.8.0): Turns off ESLint rules that conflict with Prettier.
- **express** (^4.18.2): Fast, unopinionated, minimalist web framework for Node.js.
- **http-status-codes** (^2.2.0): Constants for HTTP status codes.
- **mongoose** (^7.3.0): MongoDB object modeling tool for Node.js.
- **nodemon** (^2.0.22): Monitor for changes in your Node.js application and automatically restart it.
- **prettier** (^2.8.8): Opinionated code formatter.

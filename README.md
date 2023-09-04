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


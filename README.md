# Project Title

Online Cow Selling Backend for Eid Ul Adha

## Getting Started

The "Online Cow Selling Backend for Eid Ul Adha" is a digital platform designed to facilitate the sale of cows for the Muslim festival of Eid Ul Adha. The backend system enables users to browse and select cows online, make payments, and arrange for delivery or pickup. It streamlines the process of purchasing sacrificial animals, providing convenience and accessibility to customers while adhering to the traditions of the festival.


### Server

* Live: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/


### Project Routes

#### User
* Create new User [POST]: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/auth/signup
* Get all users [GET] : https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/users
* Get singel user  [GET]: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/users/648df86fd68048fff68fc2a0
* Update singel user  [PATCH]: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/users/648df86fd68048fff68fc2a0
* Delete singel user  [DELETE]: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/users/648df86fd68048fff68fc2a0

#### Cow
* Create cow [POST]: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/cows
* Get all cow [GET]: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/cows
* Get singel  cow [GET]: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/cows/648dfb30beb9c6bfbc60d05b
* Get update  cow [PATCH]: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/cows/648dfb30beb9c6bfbc60d05b
* Get delete  cow [DELETE]: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/cows/648dfb30beb9c6bfbc60d05b

#### Cow Pagination 
* Search [GET]: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/cows/?page:1&limit=5&sortBy=price&sortOrder=asc&minPrice=20000&maxPrice=70000&location=Chattogram.searchTerm=Cha


#### Orders
* Creating new order [POST] : https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/orders
* Get order [GET]: https://digital-cow-hut-backend-mahmudulmk4-gmailcom.vercel.app/api/v1/orders
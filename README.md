# OSRZon

OSRZon is an Amazon clone that allows you to shop for items from the classic MMORPG Runescape. OSRZon allows you to shop for items using search functionality.

[Live Link](https://amazon-osrs.onrender.com/)

## Technologies Used
* ### Backend:
    * PostgreSQL
    * Ruby on Rails
* ### Frontend:
    * JavaScript
    * React
    * Redux

## Features:
* User Authentication:
    * OSRZon has a fully functional user authentication system. This includes:
        * Creating and logging in/out of an account
        * Protection from cross-site forgery
        * Logging into a demo-user account to tour the site
* Search Functionality:
    * OSRZon uses a search feature that:
        * Filters search in the backend based on API fetch request.
        * Alows users to render an item index based on a custom search
        * Filter searches by item category and search terms
* Shopping Cart:
    * OSRZon has a functioning shopping cart. This is a CRUD feature that allows users to:
        * Add items to their shopping cart.
        * Remove or update items in their cart.
        * Checkout items from their cart.
* Product Reviews:
    * OSRZon allows the user to write customer reviews of products on the website
        * Write new product reviews
        * Edit your existing reviews
        * Delete your existing reviews
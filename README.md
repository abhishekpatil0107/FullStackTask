Project Description
This is a full-stack shopping cart application built with:
Frontend: React.js, Tailwind CSS, Framer Motion
Backend: Spring Boot (Java)
Features:
    Browse products in a grid layout
    Add products to cart with quantity adjustment
    View cart as responsive cards
    Checkout page with table of selected items and grand total
    Dynamic product prices fetched from backend API
    Fully responsive UI


Project Structure
FullStackTask/
│
├─ shoppingcart/                 # Backend (Spring Boot)
│   ├─ src/
│   └─ pom.xml / build.gradle
│
├─ ShoppingcartFrontend/         # Frontend (React)
│   ├─ src/
│   └─ package.json
│
└─ README.md                     # Project documentation



Setup & Run Locally
Backend (Spring Boot)
Navigate to the backend folder:
cd FullStackTask/shoppingcart

Build and run the project:
./mvnw spring-boot:run      

The backend API will run at: http://localhost:8080/api/products

Frontend (React)
Navigate to the frontend folder:
cd FullStackTask/ShoppingcartFrontend

Install dependencies:
npm install
Start the React app:
npm start

The frontend will run at: http://localhost:5173

Make sure the backend is running before using the frontend to fetch product data.

Test Cases
No automated test cases are included for this version.

Manual test instructions:
Open the application in the browser.
Add products to the cart and verify quantity updates.
Verify cart totals reflect backend prices.
Proceed to checkout and verify items and total are correct.
Test responsiveness on different screen sizes.

Assumptions & Design Choices
Prices are fetched dynamically from the backend and always updated in the cart.
Product images are fixed size containers with full image visibility.
Cart and Home page use a card-style layout for a professional look.
Tailwind CSS is used for styling and Framer Motion for hover effects.
LocalStorage is used to persist cart data across page reloads.

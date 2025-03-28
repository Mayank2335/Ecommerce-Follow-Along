# -Ecommerce-Follow-Along

## Milestone_1
created readme.md
pushed readme.md

## Milestone 2 🚀 

## 📌 Overview  
Welcome to **Milestone 2** of our e-commerce application development! In this phase, we focus on setting up the project structure, frontend, backend, and styling, along with developing the **Login Page**.  

## 🛠️ Key Features  
### 📁 Project Folder Structure  
- Organize files into **frontend** and **backend** directories for better maintainability.  

### ⚛️ React Frontend Setup  
- Initialize a **React.js** application using Vite for a fast development experience.  

### 🟢 Node.js Backend Setup  
- Set up a basic **Node.js** server to prepare for API integration in the next milestones.  

### 🎨 Tailwind CSS Configuration  
- Integrate and configure **Tailwind CSS** for responsive, utility-based styling.  

### 🔐 Login Page Development  
- Build a **Login Page** with a user-friendly design and authentication functionality.  

## 📂 Folder Structure  

## Milestone 3 🛠️  

## 📌 Overview  
Welcome to **Milestone 3** of our e-commerce application development! This phase focuses on setting up the backend structure, server configuration, database integration, and error handling.  

## 🛠️ Key Features  

### 📁 Backend Folder Structure  
- Organize backend files into a structured hierarchy, including **routes, controllers, models, and middleware**.  
- Introduce **utils** and **middlewares** for better code organization and maintainability.  

### 🖥️ Server Setup  
- Use **Node.js** and **Express** to create a backend server.  
- Configure the server to listen on a designated port.  

### 🗄️ Database Connection  
- Integrate **MongoDB** for efficient data storage.  
- Establish and confirm a stable connection between the server and MongoDB.  

### ⚠️ Error Handling  
- Implement clear error messages for improved debugging and user feedback.  

## 📂 Folder Structure  

## Milestone 4 📦  

## 📌 Overview  
Welcome to **Milestone 4** of our e-commerce application development! In this phase, we focus on defining the **User Model**, creating the **User Controller**, and setting up **Multer** for file uploads.  

## 🛠️ Key Features  

### 🗺️ What’s a Model?  
- A **model** acts as a detailed map or plan for structuring data.  
- The **User Model** defines how user data (e.g., name, email, password) is stored in the database.  
- In **MongoDB**, we use **Schemas** to define the structure of a model.  

### 🎯 What’s a Controller?  
- A **controller** manages how the server responds to different requests.  
- For example, the **User Controller** handles user signup by managing data flow between the frontend and database.  
- Think of it as a "manager" ensuring smooth communication between different parts of the app.  

### 📂 File Uploads with Multer  
- Users may need to upload files like profile pictures.  
- **Multer** is a Node.js middleware that helps manage file uploads efficiently.  
- It allows storing user images on the server, acting like a virtual file cabinet.  

## 📝 Steps for Milestone 4  
This milestone will be covered in a **mentor-led lesson**, where your mentor will guide you through:  
1. **Explaining and creating the User Model**  
2. **Creating the User Controller**  
3. **Setting up Multer for file uploads**  

---

## **Milestone 5 📝**  

## 📌 **Overview**  
Welcome to **Milestone 5** of our e-commerce application development! In this phase, we will focus on creating the **Sign-Up Page** and implementing **form validation** to ensure a smooth user experience.  

## 🛠️ **Key Features**  

### 📝 **What’s a Sign-Up Page?**  
- The **Sign-Up Page** allows users to enter their details to create an account.  
- It typically includes fields like:  
  - **Name**  
  - **Email**  
  - **Password**  
- Once the user fills out the form, the data is sent to the server for processing.  
- We’ll design a **clean and user-friendly** sign-up form.  

### ✅ **What is Form Validation?**  
- **Form Validation** ensures that the information users enter is in the correct format.  
- Key validation checks include:  
  - **Email format validation** (ensuring a valid email structure).  
  - **Password validation** (checking length and security criteria).  
- Validation helps prevent errors and ensures that the backend receives clean data.  

## 📝 **Steps for Milestone 5**  
In this milestone, you will work on the **frontend**, while your mentor will guide you through:  
1. **Building the Sign-Up Page using HTML and CSS**.  
2. **Adding form validation to ensure users input valid data**.  

---

### Milestone 6: Secure User Registration
✅ Goals:
1. Password Encryption:
   - Used bcrypt to hash passwords before storing them in the database.
   - Ensured no plaintext passwords are stored.
2. Secure Data Storage:
   - Stored the user's encrypted password along with other necessary details in MongoDB.
3. Updated API Endpoints:
   - Modified the user registration endpoint to handle password hashing securely.
4. Security Compliance:
   - Followed best practices for protecting user credentials.
   - Complied with security standards like GDPR and PCI-DSS.
5. README Update:
   - Documented progress for Milestone 6 and updated the repository.

### Milestone 7: User Login & Authentication
*✅ Goals:*
1. *Login Endpoint:*
   - Created a backend endpoint for user login, accepting email/username and password.
   - Retrieved user data from MongoDB based on the provided email/username.
   - If the user does not exist, returned an error: "User does not exist."
2. *Password Validation:*
   - Utilized bcrypt to compare the entered password with the stored hashed password.
   - Ensured password verification was secure and efficient.
3. *Authentication Flow:*
   - If the hashed passwords matched, authenticated the user.
   - If not, sent an error indicating invalid credentials.
4. *Security Considerations:*
   - Implemented secure password handling without storing plaintext passwords.
   - Complied with security standards such as GDPR and PCI-DSS.
5. *README Update:*
   - Documented the progress and learning outcomes for Milestone 7.
   
   
   ### Milestone 8: Displaying Multiple Products with a Single Card Component
   ✅ Goals:
   1. Create a Dynamic Component:
      - Designed a reusable card component that accepts product details as props.
   2. Use Mapping:
      - Utilized array mapping to iterate over the product list and render a card for each product.
   3. Pass Data Dynamically:
      - Passed unique product information (e.g., name, price, image) to each card.
   4. Maintain Consistency:
      - Ensured the layout remains uniform for all products.
   5. README Update:
      - Documented progress for Milestone 8 and updated the repository.


### Milestone 9: Built a form to accept multiple product images as input.

✅ Goals:

1. Create the Product Form:
- Built a form to accept multiple product images as input.

2. Dynamic Product Creation:
- Allowed users to input product details like name, price, and images.

3. Experimentation Encouraged:
- Suggested adding features such as admin access for uploading products or creating a shop profile for product uploads.

### Milestone 10: Product Schema and Endpoint Creation with Mongoose.

✅ Goals:

1. Product Schema
- Defines the structure of product data (name, description, price, image URL) with proper validation.

2. Endpoint Creation
- Build a POST endpoint to receive product data, validate it, and save it to MongoDB.

3. Why Validation?
- Ensures only valid data is saved, maintaining data integrity and preventing errors.


### Milestone 11: Fetching and Displaying Products 🚀

✅ Goals:
Implement an API endpoint to send all product data to the frontend, and create a function to fetch and dynamically display that data using a product card component.

1. Backend (API)
- Create an Endpoint.
- Add a new route to your backend server (e.g., /api/products).
- Fetch product data from the database.
- Send the data as a JSON response.

2. Frontend (Fetching Data)
- Write a Function to Fetch Data
- Render Data Dynamically

### Milestone 12: My Products Page with Email Filtering 📩
✅ Goals:

Dynamically display the filtered product data using the previously created product card component.

1. Backend (API)

- Create an Endpoint with Email Filtering:
- Add a new route to your backend server (e.g., /api/my-products).
- Use query parameters or authentication to capture the user’s email.

2. Frontend (Fetching Data)
- Write a Function to Fetch Filtered Data:
- Use fetch or axios to call the API with the user's email.

3. Frontend (Displaying Data)
- Render Data Dynamically:
- Reuse the product card component.
- Map through the filtered product data and render a card for each product.

### Milestone 13: Editing Uploaded Products 🛠️
✅ Goals:

1.  Create an Update Endpoint:
- Add a new route to your backend server (e.g., /api/products/:id).
- Use the product ID to find the existing product in MongoDB.
- Update the product with the new data.

2. Add an Edit Button:
- Add an Edit button to the product card.

3. Auto-fill the Form:
- When clicking the Edit button, load the existing product data into the form.

### Milestone 14: Deleting Products 🗑️

✅ Goals:

1. Create a Delete Endpoint:
- Add a new route to your backend server (e.g., /api/products/:id).
- Use the product ID to find and delete the product in MongoDB.

2. Add a Delete Button:
- Add a Delete button to the product card.

3. Handle Delete Request:
- When clicking the Delete button, send a request to the server with the product ID.

4. Update the UI:
- After deletion, update the product list to reflect the changes.

### Milestone 15: Navigation Component Setup 🛠️

✅ Goals:

1. Create a New Nav Component:
- Build a navigation component that includes links to the following pages:
- Home
- My Products
- Add Product
- Cart

2. Implement Routing:
- Use a routing library (like React Router) to manage page navigation.
- Ensure each link routes to the correct page/component.

3. Make the Navbar Responsive:
- Use CSS or a framework (like Tailwind, Bootstrap) to make the navbar adapt to all screen sizes.
- Implement a hamburger menu or dropdown for smaller screens.

4. Integrate the Nav Component:
- Add the navigation component to all pages.
- Ensure smooth transitions between pages (you can use animations or page transitions if desired).

### Milestone 16: Product Data Display Page 🛍️

✅ Goals:

1. Build a new component to display product data.
- Use a responsive grid or card layout to present product information.

2. Fetch Product Data:
- Retrieve product data from the backend or a mock API.
- Use useEffect and fetch (or Axios) to load the data on component mount.

3. Render Product Details:
- Display essential product details like:
- Product name
- Price
- Description
- Image
 
 4. Style the Product Page:
- Use CSS or a framework (like Tailwind or Bootstrap) for styling.
- Make sure the layout is responsive and visually appealing.

5. Add Navigation:
- Integrate the navigation component (from Milestone 15) to allow easy page switching.

### Milestone 17: Cart Functionality

✅ Goals:
This milestone covers the implementation of cart functionality in the e-commerce project.

1. Features
- Create a cart schema to store product details
- Add products to the cart with quantity and price
- Automatically update total price when adding products

2. Endpoints
- `POST /api/cart`: Add a product to the user's cart

### Milestone 18: Cart Page Backend

✅ Goals:
This milestone focuses on creating the backend functionality to retrieve products inside a user's cart.

1. Features
- Fetch all products in a user's cart
- Return product details and quantity
- Handle scenarios where the cart is empty or missing

2. Endpoints
- `GET /api/cart/:userId`: Get products inside the cart for a specific user

### Milestone 19: Cart Functionality 🛒
✅ Goals:
In this milestone, we will create the Cart page for our e-commerce platform, allowing users to view products in their cart and update their quantities dynamically.

1. Display cart products on the frontend.
2. Allow users to increase/decrease product quantity with + and - buttons.
3. Create backend API endpoints to handle quantity updates.

### 📝 Milestone 20: User Profile Page 
✅ Goals:

1. Create a backend endpoint to send user data.

2. Create a frontend profile page to display:
- Profile photo, name, and email in one section.
- Address in another section, with an "Add Address" button.
- If no address is found, display "No address found"

### Milestone 21: Address Form in Frontend
✅ Goals:

1. Create Address Form Page
- Build a new React component (AddressForm.jsx).
- Include input fields for: Country,City etc.

2. Manage Form State
3. Implement Navigation
- Update the Profile component to include an "Add Address" button.

### Milestone 22: Address Storage in Backend
✅ Goals:

1. Create API Endpoint
- Define a new POST route in the backend (/api/user/address).
- Extract the address data from the request body.

2. Update User Collection
- Find the user by their ID.
- Append the new address to the addresses array in the database.
- Save the updated user document.

3. Send Response
- Return a success message and updated user data.

### Milestone 23: Place Order Functionality
✅ Goals:
1. Add "Place Order" Button
- Inside the cart page, create a "Place Order" button.
- When clicked, navigate to the Select Address page.

2. Create Select Address Page
- Display a list of all saved addresses.
- Provide an option to select one address for delivery.
- Add a "Confirm Address" button to proceed.

3. Implement Backend Endpoint for Address Retrieval
- Create a GET API route (/api/user/addresses).
- Fetch all addresses from the user's profile.
- Return the list of addresses as a response.

4. Define Mongoose Schema for Orders
- Create an Order model to store order details:
* User ID
* Selected Delivery Address

### Milestone 24: Order Confirmation Page
✅ Goals:
1. Display Ordered Products
- Fetch the list of products in the order.
- Render each product with its name, quantity, and price.

2. Show Selected Delivery Address
- Retrieve and display the chosen address.

3. Display Total Cart Value
- Calculate the total cost based on the ordered products.

4. Add Place Order Button
- Implement a button at the bottom for order confirmation.




# Project Briefing for AI Agent

This document contains the Product Requirements Document (PRD) and text-based wireframes for the "Fruity Fresh" e-commerce prototype. Use this information to understand the project scope, functionality, and UI layout.

---

## PRD: Fruity Fresh E-Commerce Prototype

### 1. Introduction & Purpose
- **Application Name**: Fruity Fresh
- **Purpose**: A client-side prototype of an e-commerce website for an online fruit store. It's designed to demonstrate a basic user flow from browsing products to checkout and will be used as a static prototype to demonstrate the basic concepts.

### 2. Target Audience
- **Primary**: Online shoppers interested in ordering fresh fruit products.

### 3. Functional Requirements

#### 3.1. Products Page
- **Route**: `/`
- **Layout**: A responsive grid or list displaying fruit products.
- **Product Card Content**: Each card must show the product's emoji, name, and price per unit (e.g., per lb, each).
- **Functionality**:
    - Each product card must have a quantity input field (defaulting to 1).
    - Each card must have an "Add to Cart" button.
    - Clicking on a product's name or emoji should navigate the user to the corresponding Product Details page.

#### 3.2. Product Details Page
- **Route**: `/product/:id`
- **Layout**: A simple, clean layout showing the details of a single product.
- **Content**: Displays a large product emoji, name, price, and a detailed description.
- **Functionality**: 
    - An "Add to Cart" button.
    - A link or button to navigate back to the main Products page.

#### 3.3. Shopping Cart Page
- **Route**: `/cart`
- **Layout**: A list of items currently in the cart.
- **Item Display**: Each item row should show the product name, price per unit, quantity, and the total price for that item.
- **Functionality**:
    - Users can increase or decrease the quantity of an item.
    - Users can remove an item from the cart completely.
    - A summary section displays the total price of all items in the cart.
    - A "Proceed to Checkout" button navigates to the Checkout page.
- **Empty State**: If the cart is empty, display a message like "Your cart is empty." with a link back to the Products page.

#### 3.4. Checkout Page
- **Route**: `/checkout`
- **Layout**: A summary of the products being purchased.
- **Content**: Displays a final list of products, their quantities, and individual totals. A clearly visible grand total must be shown.
- **Functionality**: 
    - A "Process Order" button. When clicked, the page should display a "Thank You for your order!" message, and the shopping cart state should be cleared.
    - A button to navigate back to the Products page should be present after the order is processed.

### 4. Navigation
- **Component**: A persistent Left Navigation Menu should be visible on all pages.
- **Layout**: The menu should be on the left side of the screen.
- **Links**:
    - "Products" link navigating to `/`.
    - "Cart" link navigating to `/cart`.
    - The "Cart" link should display a badge with the total number of unique items in the cart.
- **Responsiveness**: On screen widths below 600px (practically, we'll use Tailwind's `sm` breakpoint), the navigation menu should collapse to show only icons or 1-2 letter abbreviations.

### 5. Technical Requirements
- **Framework**: React 18+ with TypeScript (.tsx files).
- **Styling**: Tailwind CSS exclusively. No separate .css files or inline style attributes. The UI should be visually appealing, clean, and modern.
- **Color Palette Suggestion**:
    - Background: `slate-100`
    - Primary UI Elements / SideNav: `white` or `slate-50`
    - Accent/Buttons: `green-600`
    - Text: `slate-800`
- **Routing**: Use `react-router-dom` with `HashRouter` for client-side routing.
- **State Management**: Use React Hooks. `useState` for component-level state and `useContext` for global shopping cart state management.

### 6. Sample Dataset (Mock Data)
- Provide this exact JSON data directly within the application code.
- **Structure**: An array of product objects. Each object must have `id`, `name`, `price`, `description`, `emoji`, and `unit`.
- **Data**:
```json
[
  { "id": 1, "name": "Apple", "price": 2.50, "description": "Crisp and sweet, perfect for a healthy snack.", "emoji": "🍎", "unit": "lb" },
  { "id": 2, "name": "Banana", "price": 0.79, "description": "A great source of potassium, naturally sweet.", "emoji": "🍌", "unit": "lb" },
  { "id": 3, "name": "Orange", "price": 1.25, "description": "Juicy and packed with Vitamin C.", "emoji": "🍊", "unit": "each" },
  { "id": 4, "name": "Grapes", "price": 3.99, "description": "Sweet and juicy, a perfect bite-sized treat.", "emoji": "🍇", "unit": "lb" },
  { "id": 5, "name": "Strawberry", "price": 4.50, "description": "Fresh, sweet, and perfect for desserts.", "emoji": "🍓", "unit": "pint" },
  { "id": 6, "name": "Watermelon", "price": 5.00, "description": "The ultimate refreshing summer fruit.", "emoji": "🍉", "unit": "each" },
  { "id": 7, "name": "Pineapple", "price": 3.50, "description": "Tropical and tangy, great in salads or grilled.", "emoji": "🍍", "unit": "each" },
  { "id": 8, "name": "Mango", "price": 2.75, "description": "Sweet, tropical, and wonderfully fragrant.", "emoji": "🥭", "unit": "each" },
  { "id": 9, "name": "Blueberry", "price": 5.50, "description": "Small, sweet, and packed with antioxidants.", "emoji": "🫐", "unit": "pint" },
  { "id": 10, "name": "Peach", "price": 2.80, "description": "Soft, fuzzy, and incredibly juicy when ripe.", "emoji": "🍑", "unit": "lb" }
]
```

---

## Wireframes

### Navigation - Expanded
```
+------------------------+
| Fruity Fresh           |
|------------------------|
| -> Products            |
| -> Cart [3]            |
|                        |
|                        |
|                        |
|                        |
+------------------------+
```

### Navigation - Collapsed
```
+-----+
| FF  |
|-----|
| P   |
| C[3]|
|     |
|     |
|     |
|     |
+-----+
```

### Products Page
```
+------------------------+-------------------------------------------------+
| Fruity Fresh           | Products                                        |
|------------------------|-------------------------------------------------|
| -> Products            |                                                 |
| -> Cart [3]            | +----------------+   +----------------+         |
|                        | |       🍎       |   |       🍌       |         |
|                        | | Apple          |   | Banana         |         |
|                        | | $2.50/lb       |   | $0.79/lb       |         |
|                        | | Qty: [ 1 ]     |   | Qty: [ 1 ]     |         |
|                        | | [Add to Cart]  |   | [Add to Cart]  |         |
|                        | +----------------+   +----------------+         |
|                        |                                                 |
|                        | +----------------+   +----------------+         |
|                        | |       🍊       |   |       🍇       |         |
|                        | | Orange         |   | Grapes         |         |
|                        | | $1.25/each     |   | $3.99/lb       |         |
|                        | | Qty: [ 1 ]     |   | Qty: [ 1 ]     |         |
|                        | | [Add to Cart]  |   | [Add to Cart]  |         |
|                        | +----------------+   +----------------+         |
|                        |                                                 |
+------------------------+-------------------------------------------------+
```

### Product Details Page
```
+------------------------+-------------------------------------------------+
| Fruity Fresh           | < Back to Products                              |
|------------------------|-------------------------------------------------|
| -> Products            |                                                 |
| -> Cart [3]            |                   🍓                            |
|                        |                                                 |
|                        | Name: Strawberry                                |
|                        | Price: $4.50/pint                               |
|                        |                                                 |
|                        | Description: Fresh, sweet, and perfect for      |
|                        | desserts.                                       |
|                        |                                                 |
|                        | [Add to Cart]                                   |
|                        |                                                 |
|                        |                                                 |
|                        |                                                 |
+------------------------+-------------------------------------------------+
```

### Shopping Cart Page
```
+------------------------+-------------------------------------------------+
| Fruity Fresh           | Shopping Cart                                   |
|------------------------|-------------------------------------------------|
| -> Products            |                                                 |
| -> Cart [3]            | ----------------------------------------------- |
|                        | Product      | Qty       | Price      | [Remove]|
|                        | ----------------------------------------------- |
|                        | Apple        | [-] 2 [+] | $5.00      |   [X]   |
|                        | Watermelon   | [-] 1 [+] | $5.00      |   [X]   |
|                        | Strawberry   | [-] 1 [+] | $4.50      |   [X]   |
|                        | ----------------------------------------------- |
|                        |                                                 |
|                        |                          Total: $14.50          |
|                        |                                                 |
|                        |                          [Proceed to Checkout]  |
|                        |                                                 |
|                        |                                                 |
+------------------------+-------------------------------------------------+

--- EMPTY STATE ---

+------------------------+-------------------------------------------------+
| Fruity Fresh           | Shopping Cart                                   |
|------------------------|-------------------------------------------------|
| -> Products            |                                                 |
| -> Cart [0]            | Your cart is empty.                             |
|                        |                                                 |
|                        | [Go to Products Page]                           |
|                        |                                                 |
|                        |                                                 |
|                        |                                                 |
+------------------------+-------------------------------------------------+
```

### Checkout Page
```
+------------------------+-------------------------------------------------+
| Fruity Fresh           | Checkout Summary                                |
|------------------------|-------------------------------------------------|
| -> Products            |                                                 |
| -> Cart [2]            | Here is a summary of your order:                |
|                        | ----------------------------------------------- |
|                        | Product      | Qty | Price                      |
|                        | ----------------------------------------------- |
|                        | Strawberry   |  1  | $4.50                      |
|                        | Watermelon   |  2  | $10.00                     |
|                        | ----------------------------------------------- |
|                        |                                                 |
|                        |                          Grand Total: $14.50    |
|                        |                                                 |
|                        |                          [Process Order]        |
|                        |                                                 |
+------------------------+-------------------------------------------------+

--- AFTER ORDER PROCESSING ---

+------------------------+-------------------------------------------------+
| Fruity Fresh           | Order Confirmed!                                |
|------------------------|-------------------------------------------------|
| -> Products            |                                                 |
| -> Cart [0]            | Thank you for your order!                       |
|                        |                                                 |
|                        | [Back to Products Page]                         |
|                        |                                                 |
|                        |                                                 |
|                        |                                                 |
|                        |                                                 |
+------------------------+-------------------------------------------------+
```
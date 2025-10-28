# Fruity Fresh E-Commerce Prototype

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.1.4-646CFF?logo=vite)

A client-side prototype of an e-commerce website for an online fruit store. This project demonstrates a complete, basic user flow from browsing products to checkout, built with modern web technologies.

<!-- Add a screenshot or GIF of the application here -->
<!-- ![Fruity Fresh Screenshot](link-to-your-screenshot.png) -->

---

## ✨ Features

-   **Product Catalog**: Browse a grid of available fresh fruit products.
-   **Product Details**: View detailed information for each product on a dedicated page.
-   **Shopping Cart**: Add/remove products and update quantities in a fully functional cart.
-   **Global State Management**: Cart state is managed globally using React Context.
-   **Client-Side Routing**: Seamless navigation between pages powered by React Router.
-   **Responsive Design**: A clean, mobile-first interface that adapts to all screen sizes, featuring a collapsible side navigation.
-   **Modern Styling**: Styled with Tailwind CSS for a consistent and modern look.

## 🛠️ Tech Stack

-   **Frontend Library**: [React](https://react.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Routing**: [React Router DOM](https://reactrouter.com/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Development Server**: [Vite](https://vitejs.dev/) (or equivalent modern bundler)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or higher is recommended) and a package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed.

### Installation & Running Locally

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/fruity-fresh.git
    cd fruity-fresh
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```
    or if you use yarn:
    ```sh
    yarn install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    or
    ```sh
    yarn dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` (or the address shown in your terminal).

## 📂 Project Structure

The project is organized with a clear and scalable structure to make it easy to navigate and maintain.

```
fruity-fresh/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components (Layout, SideNav, ProductCard, etc.)
│   ├── context/          # React Context providers (CartContext)
│   ├── data/             # Mock data (product list)
│   ├── pages/            # Page-level components (Products, Cart, Checkout)
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component with routing
│   └── index.tsx         # Application entry point
├── .gitignore
├── index.html
├── package.json
├── README.md
└── tsconfig.json
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving this project, please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.
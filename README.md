# react-pizza-pro

**Disclaimer**: This repository is a TypeScript version of my original [React project](https://github.com/Martin-Andreev-288/react-pizza-pro), which is based on [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/) by Jonas Schmedtmann.
<br />The primary goal of this repository was to migrate the original project from JavaScript to TypeScript while preserving its functionality. No additional features or major changes were made beyond improving type safety and TypeScript adoption.
<br />All credit for the original design and concepts goes to Jonas Schmedtmann. This repository serves as my implementation of the project following the course, now adapted to TypeScript.

## Overview
Welcome to Pizza Pro! You can easily order your favorite pizzas without the need for complicated registrations. Simply enter your name, select the pizza/s you want, and provide your first name, phone number, and delivery address to complete your order. You can even set a priority for faster service. Pizza Pro makes ordering delicious pizza simple and quick—perfect for when you're hungry and don't want any hassle!

## Technologies Used
- React
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Router

## How to Run the Project
1. Install the packages
```
npm install
```
2. Run the application
```
npm run dev
```

### Usage

- **Home page**
<br />This is where you begin. Enter your name to access the pizza menu. You can also search for existing orders by entering a code. A simple and quick way to start ordering your favorite pizzas!
<img src="./src/assets/homePage.png"/>

- **Menu page**
<br />Explore all available pizzas here! Each pizza is displayed with a photo, name, description, and price. Add pizzas to your cart, adjust quantities, or view sold-out items. You can also track your order details and total price before heading to checkout or searching orders by code.
<img src="./src/assets/menuPage.png"/>

- **Cart Page**
<br />Review your selected pizzas and finalize your order here. You can adjust quantities, remove items, or clear your entire cart. Ready to order? Hit the "Order Pizzas" button, or return to the menu to make changes!
<img src="./src/assets/cartPage.png"/>

- **Order Page**
<br />Finalize your pizza order by entering your name, phone number, and address. Use the "Get Position" button for automatic address entry, and optionally mark your order as a priority. Click "Order now from (total price)" to complete your purchase.
<img src="./src/assets/orderPage.png"/>

- **Order Info Page**
<br />Track your order status here. See how many minutes are left until delivery, check the pizza details, and view the total payment due. You can also upgrade your order to priority with the "Make Priority" button. This page is also accessible by searching an order code.
<img src="./src/assets/orderInfoPage.png"/>

## Project Tool Links

- [GitHub Link](https://github.com/Martin-Andreev-288/fast-pizza)
- [Project deploy in Vercel](https://fast-pizza-8rtt.vercel.app/)
- [Demo Video](https://youtu.be/qLV75hrZ4-w)

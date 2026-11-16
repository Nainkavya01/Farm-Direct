# Farm Direct — Web + Mobile Portfolio Project

A farmer-to-consumer marketplace concept built as a learning/portfolio project. The repository contains the original HTML/CSS/JavaScript website plus an Expo + React Native mobile companion starter.

## Repository structure

```text
farm-direct/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── mobile-app/
│   ├── App.js
│   ├── app.json
│   ├── package.json
│   └── src/
│       ├── data/products.js
│       ├── components/ProductCard.js
│       └── screens/
│           ├── HomeScreen.js
│           ├── CartScreen.js
│           └── ProfileScreen.js
├── docs/
│   ├── API_CONTRACT.md
│   ├── TESTING_CHECKLIST.md
│   └── ONE_WEEK_LEARNING_PLAN.md
└── README.md
```

## Run the website

1. Open this folder in VS Code.
2. Open `index.html` directly, or use the VS Code Live Server extension.
3. Search, filter, add sample products to the basket, remove items and inspect the demo checkout message.

## Run the mobile app

Requirements: Node.js LTS and Expo Go on an Android phone (or an Android emulator).

```bash
cd mobile-app
npm install
npx expo start
```

Scan the QR code using Expo Go. The mobile starter uses React Native core components and React Navigation bottom tabs. Install dependencies with `npm install` from the `mobile-app` folder.

## Current implemented functionality

### Website
- Responsive marketplace landing page and mobile navigation
- Product search and category filtering
- Empty search state and result count
- Add-to-basket, basket count, remove item and subtotal
- Accessible labels, keyboard Escape close and reduced-motion support

### Mobile companion
- Expo application scaffold
- Home, basket and profile tabs
- Product list, search and category selection
- Add/remove basket items and subtotal
- Clear demo labels and mock data

## Important: honest project scope

This is a frontend portfolio prototype. Product data and prices are illustrative. No real farmer listings, backend, database, OTP delivery, authentication service, payment gateway, booking or subscription service is connected. The checkout button is deliberately a demo-only interaction.

## Suggested next engineering milestones
1. Replace mock data with a REST API.
2. Add server-side validation and persistent storage.
3. Implement authentication with a trusted identity provider and secure token storage.
4. Add order creation, inventory checks and payment provider sandbox integration.
5. Add unit/component tests and Android device testing.
6. Add screenshots, a short demo video and architecture notes to the GitHub repository.

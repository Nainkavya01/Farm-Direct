# Farm Direct — Homepage v1

A responsive static homepage built with HTML, CSS, and plain JavaScript.

## Folder structure

```text
farm-direct/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

## Run it

1. Extract the `farm-direct.zip` file.
2. Open the `farm-direct` folder in Visual Studio Code.
3. Open `index.html` in a browser. You can double-click it from File Explorer.
4. Recommended: install the VS Code extension **Live Server**, right-click `index.html`, and choose **Open with Live Server**. The browser will refresh as you save changes.

No Node.js or database is required for this first static version.

## Test checklist

- [ ] Homepage loads without a blank screen.
- [ ] Header links scroll to their matching sections.
- [ ] Category cards select the matching product filter.
- [ ] Product category filters show only the selected category.
- [ ] Searching `apple`, `spinach`, or `wheat` filters the sample products.
- [ ] A search with no matches shows a helpful message.
- [ ] At a narrow browser width, the navigation becomes a menu button.
- [ ] Images load when internet access is available.
- [ ] Open DevTools (F12) → Console and check for JavaScript errors.

## Important limitations

- Product names, prices, and farmer details are illustrative demo content.
- Images and Google Fonts are loaded from external services and require internet access.
- Search and filters work only on the sample products currently included in the page.
- There is no login, cart, checkout, API, backend, or database yet.
- The contact link uses a reserved `.example` email address and is a placeholder.

## Planned next steps

1. Review and refine the design.
2. Move sample products into a dedicated data module when useful.
3. Migrate the UI to React.
4. Create an Express API and PostgreSQL schema.
5. Connect the React UI to the API, then add authentication and real marketplace flows.

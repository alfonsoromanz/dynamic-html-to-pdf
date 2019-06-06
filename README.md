# Dynamic HTML to PDF

This project shows how easy is to create a PDF file from an HTML page with dynamic content.

It's built in NodeJS and it uses Handlebars for templating and Puppeteer for generating the PDF file.

In this example, I'm generating a sample contract with some products and their price.

## Getting started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/dynamic-html-to-pdf; npm install
    ```

3. Start your app

    ```
    node index.js
    ```
4. You'll see a success message and a new file `contract.pdf`
5. Get fun playing around with your own HTML templates.

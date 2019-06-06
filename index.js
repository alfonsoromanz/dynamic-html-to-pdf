const puppeteer = require ('puppeteer')
const hbs = require('handlebars');
const fs =  require('fs-extra');
const path = require('path');
const moment = require('moment');

const compile = async function (templateName, data) {
    const filePath = path.join(process.cwd(), 'templates', `${templateName}.hbs`);
    const html = await fs.readFile(filePath, 'utf-8');
    return hbs.compile(html)(data);
}

hbs.registerHelper('dateFormat', (value, format) => moment(value).format(format));

(async function(){
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const data = {
            title: 'Sponsorship Contract',
            name: 'Apple',
            products : [
                {
                    name: '20x20 Booth',
                    price: "$5000"
                },
                {
                    name: '10 Staff Passes',
                    price: "$2000"
                },
                {
                    name: 'Printed logo',
                    price: "$1000"
                }
            ]
        };
        const content = await compile('contract', data);
        await page.setContent(content);
        await page.emulateMedia('screen');
        await page.pdf({
            path: 'contract.pdf',
            format: 'A4',
            printBackground: true
        });
        console.log('Success.');
        await browser.close();
    } catch (e) {
        console.log(e)
    }
})();

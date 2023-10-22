import path from "node:path";
const { I18n } = require("@grammyjs/i18n");

const i18n = new I18n({
    defaultLocale: "en", 
    directory: path.resolve(process.cwd(), "locales"),
});

module.exports = i18n;
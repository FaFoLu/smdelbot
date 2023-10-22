const { Bot, GrammyError, HttpError, webhookCallback } = require("grammy");
const { hydrateReply } = require("@grammyjs/parse-mode");

const startCommand  = require("../src/handlers/commands/start");
const chatHandler = require("../src/handlers/chat");
const channelHandler = require("../src/handlers/channel");
const i18n = require("../src/i18n");

require("dotenv").config();

const bot = new Bot(process.env.BOT_TOKEN);

bot.catch((err) => {
    const e = err.error;
    if (e instanceof GrammyError) {
      console.error(e.description);
    } else if (e instanceof HttpError) {
      console.error("Не вдалося звʼязатися з Telegram:", e);
    } else {
      console.error("Невідома помилка:", e);
    }
});

bot.use(hydrateReply, i18n, startCommand, chatHandler, channelHandler);

module.exports =  webhookCallback(bot, "http");


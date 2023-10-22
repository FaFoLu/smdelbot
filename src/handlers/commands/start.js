const { Composer } = require ("grammy");
const start = new Composer();

start.chatType("private").command("start", async (ctx) => {
    await ctx.replyWithHTML(ctx.t("start"), {
    disable_web_page_preview: true,
}) 
});

module.exports = start;
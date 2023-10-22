const { Composer } = require ("grammy");
const channel = new Composer();

channel.on(
    [
        "channel_post:new_chat_photo",
        "channel_post:delete_chat_photo",
        "channel_post:new_chat_title",
        "channel_post:video_chat_started",
        "channel_post:video_chat_scheduled",
        "channel_post:video_chat_ended",
    ], 
    async (ctx) => {
        await ctx.deleteMessage();
    }
);

module.exports = channel;
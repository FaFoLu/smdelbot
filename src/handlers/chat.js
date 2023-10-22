const { Composer } = require ("grammy");
const chat = new Composer();

chat.on(
    [
        "message:new_chat_members",
        "message:left_chat_member",
        "message:new_chat_photo",
        "message:delete_chat_photo",
        "message:new_chat_title",
        "message:video_chat_started",
        "message:video_chat_scheduled",
        "message:video_chat_ended",
        "message:video_chat_participants_invited",
        "message:forum_topic_created",
        "message:forum_topic_edited",
        "message:forum_topic_closed"
    ],
    async (ctx) => {
        await ctx.deleteMessage();
    }
);

module.exports = chat;
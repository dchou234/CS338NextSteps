module.exports = async (req, res) => {
  let { zoomApp, zoomError, zoomWebhook,request } = res.locals;

  if (!zoomError) {
    let { type, payload } = zoomWebhook;
    let { toJid, userJid, accountId } = payload;
    try {
      await zoomApp.sendMessage({
        to_jid: toJid,
        account_id: accountId,
        user_jid: userJid,
        is_visible_you: true,
        content: {
          body: [
            {
              type: 'message',
              text: 'Look outside I cannot do that yet.'
            }
          ]
        }
      });
      res.send('success');
    } catch (e) {
      res.send('fail');
    }
  } else {
    res.send('fail');
  }
};

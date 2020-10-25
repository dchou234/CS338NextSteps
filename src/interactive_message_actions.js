module.exports = async (req, res) => {
  let { zoomApp, zoomError, zoomWebhook, databaseModels,request } = res.locals;
  if (!zoomError) {
    let { type, payload } = zoomWebhook;
    let { toJid, accountId, actionItem } = payload;
    try {
      await zoomApp.sendMessage({
        to_jid: toJid,
        account_id: accountId,
        content: {
          head: {
            type: 'message',
            text: 'Your favorite fruit',
            style: {
              bold: true
            }
          },
          body: [
            {
              type: 'message',
              text: `thanks for selecting "${actionItem.text}"`
            }
          ]
        }
      });
      res.send('success');
    } catch (e) {
      res.send('fail');
    }
  }
  else{
    res.send('fail');
  }
};


module.exports = {
  log:function(info){
    // info.message,info.type
    // console.log(info.type,info.message);
  },
  botCommands: [
    {
      command: 'help',
      callback: require('./src/help.js')
    },
    {
      command:'vote',
      callback:require('./src/vote')
    },
    {
      command:'greet',
      callback:require('./src/greet.js')
    },
    {
      command:'weather',
      callback:require('./src/weather.js')
    }
  ],
  botActions: [
    {
      command:'interactive_message_actions',
      callback:require('./src/interactive_message_actions.js')
    }
  ],
  apis: [
    { url: '/command', method: 'post', zoomType: 'command' },
    {
      url: '/auth',
      method: 'get',
      callback: require('./src/auth'),
      zoomType: 'auth'
    },
    {
      url:'/test',
      method:'get',
      callback:function(req,res){
        res.send('test success');
      }
    }
  ]
};

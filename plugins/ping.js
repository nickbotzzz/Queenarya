bot({
  pattern: 'button$',
  fromMe: true,
  desc: 'Restart the bot',
  type: 'user'
}, async (message, client) => {
await message.client.sendMessage(message.jid, {
     text: "Hello World !",
     footer: "Baileys - 2025",
     buttons: [
         {
             buttonId: PING, 
             buttonText: {
                 displayText: '-ping'
             },
             type: 1 
         }
     ],
     headerType: 1,
     viewOnce: true
 })
});

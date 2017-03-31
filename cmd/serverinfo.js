module.exports = function (bot, message, args) {
        let guild = message.guild;
        function online(m) {
          return m.presence.status === "online"
        }
        message.channel.sendMessage(" ", {embed: {
          color: 0x006400,
          author: {
            name: guild.name,
            icon_url: guild.iconURL,
          },
          description: `ID: ${guild.id}`,
          fields: [
            {
              name: "Default Channel",
              value: guild.defaultChannel.toString()
            },
            {
              name: "Region",
              value: guild.region
            },
            {
              name: `Members [${guild.memberCount}]`,
              value: message.guild.members.filter(online).size
            },
            {
              name: "Server Owner",
              value: `${guild.owner.user.username}#${guild.owner.user.discriminator} (${guild.owner.id})`
            },
            {
              name: "Created On",
              value: guild.createdAt
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: bot.user.avatarURL,
            text: '© Staff-Mod-Bot'
          }

        }}).catch(console.error);
};

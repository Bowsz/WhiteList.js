const Discord = require("discord.js");
const cooldown = new Set();
exports.run = (bot, message, args) => {

    if (cooldown.has(message.author.id)) {
        let tempo = new Discord.RichEmbed()

            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .setDescription(`⚠️ | Calma aí, espere 20s para executar novamente.`)
            .setColor(`#c8f8f1`)
            .setFooter(bot.user.username)

        return message.channel.send(tempo)
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 20000);

    message.reply('envie todas as instruções em seu DM.')
        .then(async msg => {
            await msg.react('❗')

            const a2 = (reaction, user) => reaction.emoji.name === '❗' && user.id === message.author.id
            const b2 = msg.createReactionCollector(a2, { time: 60000 });

            b2.on("collect", c2 => {
                msg.edit('**[AVISO]** Caso a mensagem não foi enviada, ative as mensagens diretas. ⚠️')
                // c1.remove(message.author.id)
            })
        });

    if (!args[0]) {
        let embed1 = new Discord.RichEmbed()
        embed1.setTitle(message.guild.name)
        embed1.setThumbnail(message.guild.iconURL)
        embed1.setDescription('Sua mensagem')
        embed1.setFooter('Escreva: Continuar')
        embed1.setColor('GREEN')
        message.member.send(embed1)
            .then(messagem => {

                let tm = setTimeout(function () {
                    message.member.send('⚠️ | Você demorou muito para responder.')
                }, 60000)

                let coletando = message.author.dmChannel.createMessageCollector(mee => mee.author.id == message.author.id, { max: 1 })
                    .on('collect', c => {
                        canal = message.guild.channels.find(`id`, "775922572251496479");



                        message.member.send(':star:  | **Pergunta [1]**')
                            .then(msg => {
                                let coletando = message.author.dmChannel.createMessageCollector(mee => mee.author.id == message.author.id, { max: 1 })
                                    .on('collect', c => {

                                        pergunta1 = c.content
                                        clearTimeout(tm);

                                        message.member.send(':star: | **Pergunta [2]**')
                                            .then(msg => {
                                                let coletando = message.author.dmChannel.createMessageCollector(mee => mee.author.id == message.author.id, { max: 1 })
                                                    .on('collect', c => {
                                                        pergunta2 = c.content

                                                        message.member.send(':star: | **Pergunta [3]**')
                                                            .then(msg => {
                                                                let coletando = message.author.dmChannel.createMessageCollector(mee => mee.author.id == message.author.id, { max: 1 })
                                                                    .on('collect', c => {
                                                                        pergunta3 = c.content

                                                                        message.member.send(':star: | **Pergunta [4]**')
                                                                            .then(msg => {
                                                                                let coletando = message.author.dmChannel.createMessageCollector(mee => mee.author.id == message.author.id, { max: 1 })
                                                                                    .on('collect', c => {
                                                                                        pergunta4 = c.content

                                                                                        let embedFinal = new Discord.RichEmbed()

                                                                                            .setTitle('WHITELIST')
                                                                                            .setDescription(`Membro: ${message.author.tag}`)
                                                                                            .addField(`Pergunta [1]`, `${pergunta1}`)
                                                                                            .addField(`Pergunta [2]`, `${pergunta2}`)
                                                                                            .addField(`Pergunta [3]`, `${pergunta3}`)
                                                                                            .addField(`Pergunta [4]` `${pergunta4}`)
                                                                                            .setColor('GREEN')
                                                                                            .setFooter(`ID DO JOGADOR: ${message.author.id}`)
                                                                                        canal.send(embedFinal)
                                                                                            .then(async msg => {

                                                                                                await msg.react('✅')
                                                                                                await msg.react('🔴')

                                                                                                const a2 = (reaction, user) => reaction.emoji.name === '✅'
                                                                                                const b2 = msg.createReactionCollector(a2, { time: 60000 });

                                                                                                // Caso queira que o bot adicione um cargo quando o usuário for aprovado.
                                                                                                // let carguinho = message.guild.roles.find(r => r.name === "Civil")
                                                                                                // if (!carguinho) {
                                                                                                // try {
                                                                                                //   carginho = await message.guild.createRole({
                                                                                                //     name: "Civil",
                                                                                                //   color: "#514f48",
                                                                                                // permissions: []
                                                                                                // })
                                                                                                // message.guild.channels.forEach(async (channel) => {
                                                                                                // await channel.overwritePermissions(carguinho, {
                                                                                                //   SEND_MESSAGES: true,
                                                                                                // ADD_REACTIONS: true,
                                                                                                // })
                                                                                                // })
                                                                                                // } catch (e) {
                                                                                                //   console.log(e.stack);
                                                                                                //  }
                                                                                                //     }

                                                                                                //    usuário.addRole(carguinho).then(() => {

                                                                                                b2.on("collect", c2 => {

                                                                                                    let aprovados = message.guild.channels.find(`id`, "775922789889605702");

                                                                                                    let embedAprovados = new Discord.RichEmbed()

                                                                                                        .setTitle('Aprovados: WHITELIST')
                                                                                                        .setDescription(`O usuário <@${message.author.id}> foi aprovado!`)
                                                                                                        .setColor('GREEN')
                                                                                                        .setFooter(bot.user.username)

                                                                                                    aprovados.send(embedAprovados)
                                                                                                });
                                                                                            });
                                                                                        setTimeout(function () {
                                                                                            const a3 = (reaction, user) => reaction.emoji.name === '🔴'
                                                                                            const b3 = msg.createReactionCollector(a3, { time: 60000 });

                                                                                            b3.on("collect", c3 => {

                                                                                                let reprovados = message.guild.channels.find(`id`, "775923620995661854");

                                                                                                let embedReprovados = new Discord.RichEmbed()

                                                                                                    .setTitle('Reprovados: WHITELIST')
                                                                                                    .setDescription(`O usuário <@${message.author.id}> foi reprovado!`)
                                                                                                    .setColor('RED')
                                                                                                    .setFooter(bot.user.username)

                                                                                                reprovados.send(embedReprovados)
                                                                                            });
                                                                                        }, 2000)
                                                                                    })
                                                                            })
                                                                    });
                                                            });
                                                    });
                                            });
                                    });
                            });
                    });
            });
        //})

    } else {
        message.channel.send('🚫| Ocorreu um erro ao tentar enviar a whitelist.')
    }

}

exports.help = {
    name: "Whitelist",
    descricao: null,
    aliases: ["whitelist", "wl"],
    icon: null
}
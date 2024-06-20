/*

______                          _____    _______________     _______________                       ________________        _______________
\     \          ____          /    /    |                   |              \     |         |     /                \      /               \     |      _/
 \     \        /    \        /    /     |                   |              |     |         |     |                |      |               |     |    _/
  \     \      /      \      /    /      |                   |              |     |         |     |                |      |               |     |  _/
   \     \    /        \    /    /       |-----------        |--------------|     |---------|     |                |      |               |     |_/ \
    \     \__/          \__/    /        |                   |              |     |         |     |                |      |               |     |    \
     \                         /         |                   |             /      |         |     |                |      |               |     |     \
      \_______________________/          |_____________      |____________/       |         |     \________________/      \_______________/     |      \


Version : 0.0.1 - Alpha
Description : For make some thing with webhooks of Discord.
By : Ylian1512

*/

// Variables
let webhookTarget = "none";
let dataPOST_content = "Hello, World!";
let dataPOST_embeds = [];

// end


(function (Scratch) {
    "use strict";
    if (!Scratch.extensions.unsandboxed) {
        return alert("$let:Name must to be unsandboxed for some functionnality!".replace("$let:Name", "Discord Webhook")); // If some codes does'nt run
    };


    const vm = Scratch.vm
    // Extension setup
    //const menuIconURI = "data:image/png;base64,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"

    class Extension {
        getInfo() {
            return {
                id: "discordwebhooks",
                name: "Discord Webhook",
                color1: "#5865f2",
                color2: "#ffffff",
                //menuIconURI,
                blocks: [
                    { blockType: Scratch.BlockType.LABEL, text: "Register" },
                    {
                        opcode: "haveREGISTRER",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "a webhook is registered?"
                    },
                    {
                        opcode: "registwh",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "register the webbook URL [WEBHOOK]",
                        arguments: {
                            WEBHOOK: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "https://discord.com/api/webhooks/guildid/token"
                            }
                        }
                    },
                    { blockType: Scratch.BlockType.LABEL, text: "Management" },
                    { blockType: Scratch.BlockType.LABEL, text: "COMING SOON" },
                    { blockType: Scratch.BlockType.LABEL, text: "Messages" },
                    {
                        opcode: "makeEmbed",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "set embed data to : title [TITLE] title url [TITLE_URL] author [AUTHOR] author image url [AUTHOR_IMG] thumbnail url [THUMBNAIL] image url [IMG] description (\\n for line) [DESCRIPTION]",
                        arguments: {
                            TITLE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Default Popular Text"
                            },
                            TITLE_URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "https://example.com/"
                            },
                            AUTHOR: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Discord Webhook Extension by Ylian1512"
                            },
                            AUTHOR_IMG: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ""
                            },
                            THUMBNAIL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "https://penguinmod.com/favicon.ico"
                            },
                            IMG: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ""
                            },
                            DESCRIPTION: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Hello, World!"
                            }
                        }
                    },
                    {
                        opcode: "makeMessage",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "set message data to : message (\\n for line) [MSG]",
                        arguments: {
                            MSG: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Hello, World!"
                            }
                        }
                    },
                    { blockType: Scratch.BlockType.LABEL, text: "Sending" },
                    {
                        opcode: "sendMSG",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "send the message and embed"
                    },
                    {
                        opcode: "sendMSGwithWH",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "send the message and embed with the webhook url [WEBHOOK]",
                        arguments: {
                            WEBHOOK: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "https://discord.com/api/webhooks/guildid/token"
                            }
                        }
                    },
                    { blockType: Scratch.BlockType.LABEL, text: "Get Information" },
                    {
                        opcode: "webhookUrlTargetinfo",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "get the webhook URL",
                        disableMonitor: true
                    },
                    {
                        opcode: "getEmbedDATA",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "get embed data",
                        disableMonitor: true
                    },
                    {
                        opcode: "getMsgDATA",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "get message data",
                        disableMonitor: true
                    },
                    { blockType: Scratch.BlockType.LABEL, text: "Other" },

                ]
            }
        }

        haveREGISTRER() {
            if (webhookTarget.startsWith("https://discord.com/api/webhooks/") || webhookTarget.startsWith("https://canary.discord.com/api/webhooks/") || webhookTarget.startsWith("https://ptb.discord.com/api/webhooks/")) {
                return true;
            } else {
                return false;
            }
            
        }
        registwh(args) {
            let arg1 = args.WEBHOOK;

            return webhookTarget = arg1;;
        }
        webhookUrlTargetinfo() {
            return webhookTarget;
        }
        sendMSG() {
            if (!dataPOST_embeds) {
                const datas = {
                    content: dataPOST_content
                }

                return Scratch.fetch(webhookTarget, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datas)
                })
            } else if (!dataPOST_content) {
                const datas = {
                    embeds: dataPOST_embeds
                }

                return Scratch.fetch(webhookTarget, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datas)
                })
            } else if (dataPOST_embeds && dataPOST_content) {
                const datas = {
                    content: dataPOST_content,
                    embeds: dataPOST_embeds
                }

                return Scratch.fetch(webhookTarget, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datas)
                })
            } else {
                alert("Error : [ERROR] [Discord-Webhook.js] Error when sending the message or and embed : Empty message cannot be sended");
                return console.error("Error : [ERROR] [Discord-Webhook.js] Error when sending the message or and embed : Empty message cannot be sended");
            }
        }
    }
    
    Scratch.extensions.register(new Extension());
})(Scratch);

// Memory

// WH Interaction :
/*
return Scratch.fetch(/*webhookUrl*\/, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify("ENTER JSON HERE")
})
*/
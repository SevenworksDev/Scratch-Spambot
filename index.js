const Scratch = require("scratch-site-api")
const fs = require("fs/promises")

const client = new Scratch.User()
const users = require("./users.json")
const config = require("./config.json")

const messages = [
    "SUB_SCR_IBE TO SEVENWORKS AT YouTube.com/@sevenworks !!!"
]

const rekt = async () => {
    await client.login(config.username, config.password)
    const messages = await client.messages.getCount()
    comment(users[Math.floor(Math.random() * users.length)])
}

const comment = async (user) => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    await client.comments.commentOnUser(message, user)
    console.log(`Commented on ${user}`)
    setTimeout(() => {
        comment(users[Math.floor(Math.random() * users.length)])
    }, (3000) + (Math.random() * 2) * 3000)
}

rekt()

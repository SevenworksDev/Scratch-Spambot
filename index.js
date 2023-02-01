const Scratch = require("scratch-site-api")
const fashion = require("fashion")
var prompt = require('prompt-sync')();
const fs = require("fs/promises")
const client = new Scratch.User()
const users = require("./users.json")

console.log(fashion.magentaBright("Scratch Spambot - By: Sevenworks"))
console.log(fashion.magentaBright("https://github.com/SevenworksDev/Scratch-Spambot"))
console.log(fashion.magentaBright("______________________________________________________________"))

const scratchusername = prompt(fashion.yellowBright("Scratch Username: "))
const scratchpassword = prompt(fashion.yellowBright("Scratch Password: "))

const messages = [
    "SUB TO SEVENWORKS AT YouTube.com/@sevenworks !!!"
]

const rekt = async () => {
    await client.login(scratchusername, scratchpassword)
    const messages = await client.messages.getCount()
    comment(users[Math.floor(Math.random() * users.length)])
}

const comment = async (user) => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    await client.comments.commentOnUser(message, user)
    console.log(fashion.greenBright(`Commented on ${user}`))
    setTimeout(() => {
        comment(users[Math.floor(Math.random() * users.length)])
    }, (2000) + (Math.random() * 2) * 2000)
}

rekt()

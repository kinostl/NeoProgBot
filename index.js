//Configuration
const prefix=">"
const DiscordToken=process.env.token

//Code
const Datastore = require('nedb')
const db = new Datastore({ filename: './db/chips' })

const Discord = require('discord.js')
const client = new Discord.Client()

const msgFunc= require('./msgFunc')

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', async (msg) => {
	if (msg.startsWith(prefix) {
		//This assumes that anything starting with > might be a command, and that whatever is after > is the command (one string)
	    	//substring removes the prefix
		const msgFuncId, msgInput = msg.content.substring(1).split(' ',1)

		//msgFunc is an object full of functions that we've imported
		const msgFunc[msgFuncId]

		//this makes sure that we only respond to existing commands
		if(msgFunc){
			const reply=await msgFunc(db, msgInput)
			msg.reply(reply)
		}
	}
})

async function start(){
	//Make the bot wait for the database to be ready before starting
	await db.loadDatabase()
	client.login(DiscordToken)
}

start()

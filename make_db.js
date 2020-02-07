const fs = require('fs-extra')
const csv=require("csvtojson")
const Datastore = require('nedb')

//Realistically, chips.csv should be grabbed by this script using [node-google-sheets](https://github.com/jpillora/node-google-sheets)
const chipCSV = './chips.csv'
async function makeDB(){
	try{
		//nedb is an append-only format, and we're not going to be downloading diffs. we're going to be downloading the entire chip dataset every time. So delete the db.
		await fs.remove('./db')
		console.log('Chips DB cleared.')
		//nedb database. Essentially a json file with some better searchability
		db = await new Datastore({ filename: './db/chips', autoload: true })
		//Turns the csv file into an array of json objects
		const chips = await csv().fromFile(chipCSV)
		//Adds all the json objects to the nedb
		await db.insert(chips)
		console.log('Chips DB updated.')
	}catch(err){
		console.error(err)
	}
}

makeDB()

module.exports={
	'chip':async (db, chipId)=>{
		//if you plan on doing no magic, just use the following
		//return db.findOne({Chip:chipId})

		//We're assumgin we'll use some magic, so we're going to wait for the results
		let foundChip = await db.findOne({Chip:chipId})

		//foundChip returns something like this:
		//
		// {
		// "Chip":"Interrupt",
		// "Dmg":"-",
		// "Range":"-",
		// "Effect":"Has been replaced with TimeCancel.",
		// "Category":"-",
		// "Tags":"-",
		// "Tags In Brackets":"[-]",
		// "Single Description":"Has been replaced with TimeCancel. [-]",
		// "From?":"Removed",
		// "_id":"QoLNNlIHZKsgI6k4"
		// }
		//
		// put the magic to turn foundChip into a pretty embed or string here
		return foundChip
	}
}

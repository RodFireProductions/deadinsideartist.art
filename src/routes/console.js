/*
    Rodrick hates their life.
--------------------------- # # # # #
	Console log custom group.
*/

// Feel free to change the default settings! β‘
let credit = {
	emoji: "πβ‘",
	name: 'This site',
    author: "",
	description: [
        //"--------------------------------",
        "β¨Trans Rights has been and will always be Human Rights!β¨",
        "β‘ POC lives will always matter! β‘",
		"βββ",
		"Have a lovely day."
    ]
}

// I wouldn't recommend touching this!

if (credit != null){
	console.group("πβ‘ Lookin' under the hood? β‘π")
	/*console.log(
		"%c"+ credit.name + " belongs to " + credit.author, "font-style: italic;"
	)*/
	let z;
    for (z = 0; z < credit.description.length; z++) {
		console.log(credit.description[z])
    }


	console.groupEnd()
}

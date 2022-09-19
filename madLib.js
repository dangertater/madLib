const verb1 = "triangle"
const verb2 = "arm bar"
const verb3 = "poop"
const verb4 = "omoplata"
const adjLy1 = "quickly"
const adjLy2 = "slowly"
const adjLy3 = "stinkily"
const adjLy4 = "gently"
const adj1 = "quick"
const adj2 = "slow"
const adj3 = "stink"
const adj4 = "gentle"
const secondVerb1 = "release tension"
const secondVerb2 = "choke harder"
const secondVerb3 = "commit murder"
const secondVerb4 = "say sorry alot"

let firstPlug = () => {
	let num = Math.floor(Math.random() * 4)
	if (num === 1) {
		return verb1
	} else if (num === 2) {
		return verb2
	} else if (num === 3) {
		return verb3
	} else {
		return verb4
	}
}

let secondPlug = () => {
	let num = Math.floor(Math.random() * 4)
	if (num === 1) {
		return adjLy1
	} else if (num === 2) {
		return adjLy2
	} else if (num === 3) {
		return adjLy3
	} else {
		return adjLy4
	}
}

let thirdPlug = () => {
	let num = Math.floor(Math.random() * 4)
	if (num === 1) {
		return secondVerb1
	} else if (num === 2) {
		return secondVerb2
	} else if (num === 3) {
		return secondVerb3
	} else {
		return secondVerb4
	}
}

//TODO make the second 'firstPlug' use the same output as the first, currently reruns the firstPlug function
console.log(
	"You may be " +
		firstPlug() +
		"ing. However in a moment you shall " +
		secondPlug() +
		" be " +
		firstPlug() +
		"ing your partner. You now have two options, depending on if your partner is an asshole. You can " +
		thirdPlug() +
		", follow your gut don't think of the consequences."
)

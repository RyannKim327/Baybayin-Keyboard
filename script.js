const keys = {
	"A": "5888", "E": "5889", "O": "5890",
	"Ba": "5898", "Ka": "5891", "Da": "5895",
	"Ga": "5892", "Ha": "5905", "La": "5902",
	"Ma": "5899", "Na": "5896", "Nga": "5893",
	"Pa": "5897", "Ra": "5901", "Sa": "5904",
	"Ta": "5894", "Wa": "5903", "Ya": "5900",
	"*e": "5906", "*o": "5907", "Virama": "5908",
	".": "5942", ",": "5941", "agwat": "32", "br": "9"
}

function keysClick(key){
	const text = key.textContent.replace(key.childNodes[0].textContent, "").trim()
	document.getElementById("input").value += String.fromCharCode(keys[text])
}
function bura(){
	document.getElementById("input").value = document.getElementById("input").value.substring(0, document.getElementById("input").value.length - 1)
}
function pugnaw(){
	document.getElementById("input").value = ""
}
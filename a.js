var txt = document.getElementById('a');
var par = document.getElementById('b');
d();
function a(text) {
	txt.value += text;
	d();
}
function b() {
	var val = txt.value;
	txt.value = val.substring(0,val.length -1);
	d();
}
function c() {
	txt.value = "";
	d();
}
function d(){
	if (txt.value.length == 1) {
		par.innerHTML = txt.value.length + " Character inserted";
	}else if(txt.value.length == 0){
		par.innerHTML = "No characters inserted";
	}else{
		par.innerHTML = txt.value.length + " Characters inserted";
	}
}
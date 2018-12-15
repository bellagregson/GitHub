//const secondHand = document.getElementsByClassName('second-hand');
var secondHand = document.querySelector("div");

console.log('secondHand: ' + secondHand);
console.log('hello: ' + document.querySelector('div'))

function setDate() {

	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	const secondsDegree = (seconds/60) * 360 

	secondHand.style.transform = "rotate(" + secondsDegree + ")";

	//console.log(seconds + ", " + secondsDegree);

}
setInterval(setDate, 10000);
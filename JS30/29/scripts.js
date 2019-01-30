let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time');

function timer(seconds) {

	clearInterval(countdown); // clear previous interval
	
	const now = Date.now(); // figure out when time started (in milliseconds)
	const then = now + seconds * 1000; // figure out when timer should stop (current time + seconds); convert seconds to milliseconds

	displayTimeLeft(seconds);
	displayEndTime(then);

	countdown = setInterval(() => {

		 // start countdown, convert to seconds
		const secondsLeft = Math.round((then - Date.now()) / 1000);

		// check if it should be stopped before numbers go below 0
		if (secondsLeft < 0) {
			clearInterval(countdown);
			return;
		} 

		displayTimeLeft(secondsLeft);
	}, 1000); 

}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes} : ${remainderSeconds < 10 ? 0 : ''}${remainderSeconds}`;

	timerDisplay.textContent = display;
	document.title = `Countdown Timer ${display}`;
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hour = end.getHours();
	const minutes = end.getMinutes();
	const adjustedHour = hour > 12 ? hour - 12 : hour;
	const adjustedMinutes = minutes < 10 ? 0 : '';

	endTimeDisplay.textContent = `Return to work at ${adjustedHour}:${adjustedMinutes}${minutes}`;
}

function setTimer() {
	const seconds = parseInt(this.dataset.time)
	timer(seconds);
	//console.log(seconds);
}

buttons.forEach(button => button.addEventListener('click', setTimer));
document.customForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const mins = this.minutes.value;
	this.reset();
	timer(mins * 60);
})
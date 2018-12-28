// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
let mousedown = false;

// Build out functions
/* play/pause the video */
function toggleOnOff(e) {
	if(video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

/* skip forward/backward */
let skipTo;
function skipVideo() {
	skipTo = Number(this.dataset.skip)
	if(video.currentTime < 10 && skipTo === -10) {
		video.currentTime = 0;
	} else {
		video.currentTime += skipTo;
	}
}

/* switch play/pause button icons */
function updateButton() {
	const icon = this.paused ? '►' : '||';
	toggle.innerText = icon;
}

/* update volume/speed ranges */
function updateRange() {
	element = this.name;
	video[element] = this.value
}

/* update progress bar */
function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;

}

function scrub(e) {
	console.log(e.offsetX);
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

// Hook up the event listeners
toggle.addEventListener('click', toggleOnOff);
video.addEventListener('click', toggleOnOff);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(button => button.addEventListener('click', skipVideo));
ranges.forEach(range => range.addEventListener('change', updateRange));
ranges.forEach(range => range.addEventListener('mousemove', updateRange));
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
	navigator.mediaDevices.getUserMedia({video: true, audio: false})
	.then(localMediaStream => {
		video.srcObject = localMediaStream;
		video.play();
	})
	.catch(err => {
		console.error(err.name + ": " + err.message);
	})
}

function paintToCanvas() {
	const width = video.videoWidth;
	const height = video.videoHeight;

	canvas.width = width;
	canvas.height = height;

	console.log("paintToCanvas");

	setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
		
		//take these pixels out
		let pixels = ctx.getImageData(0, 0, width, height);

		// manipulate the pixels
		//pixels = redEffect(pixels);
		//pixels = rgbSplit(pixels);
		//ctx.globalAlpha = 0.8;
		pixels = greenScreen(pixels);

		// put the pixels back
		ctx.putImageData(pixels, 0 ,0);
	}, 300);

}

function takePhoto() {
	snap.currentTime = 0;
	snap.play();

	const data = canvas.toDataURL('image/jpeg');
	const link = document.createElement('a');
	
	link.href = data;
	link.setAttribute('download', 'wonderful');
	link.innerHTML = `<img src="${data}" alt="">`;

	strip.insertBefore(link, strip.firstChild); 
}

function redEffect(pixels) {
	for(let i=0; i < pixels.data.length; i +=4) {
		pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
		pixels.data[i + 0] = pixels.data[i + 0] - 50; // GREEN
		pixels.data[i + 0] = pixels.data[i + 0] + 0.5; // BLUE
	}
	return pixels;
}

function rgbSplit(pixels) {
	for(let i=0; i < pixels.data.length; i += 4) {
		pixels.data[i -150] = pixels.data[i + 0]; // RED
		pixels.data[i + 100] = pixels.data[i + 1]; // GREEN
		pixels.data[i - 150] = pixels.data[i + 2]; // BLUE
	}
	return pixels;	
}

function greenScreen(pixels) {
	const levels = {};

	document.querySelectorAll('.rgb input').forEach((input) => {
		levels[input.name] = input.value;
	});

	for(i=0; i < pixels.data.length; i = i+4) {
		red = pixels.data[i + 0];
		green = pixels.data[i + 1];
		blue = pixels.data[i + 2];
		alpha = pixels.data[i + 3];
//console.log(red);
		if(red >= levels.rmin
			&& green >= levels.gmin
			&& blue >= levels.bmin
			&& red <= levels.rmax
			&& green <= levels.gmax
			&& blue <= levels.bmax) {
				// if conditions above match
				// remove that pixel - 4th pixel is the transparency pixel
				// which is set to 0
				pixels.data[i+3] = 0;
		}
	}

	return pixels;
}


getVideo();

// run paintToCanvas function when video starts playing
video.addEventListener('canplay', paintToCanvas);
export class AudioPlayer {
	static currentAudio = null;
	static progressInterval = null;
	static _isPaused = false;

	static get isPaused() {
		return AudioPlayer._isPaused;
	}

	static set isPaused(value) {
		AudioPlayer._isPaused = value;
	}

	static playAudio(url) {
		const progress = document.getElementById('progress-audio');
		const time = document.getElementById('time');
		const volumeControl = document.getElementById('volume');
		const volumeDisplay = document.getElementById('currentVolume');

		let playingAudio = AudioPlayer.currentAudio;
		if (playingAudio && playingAudio.src.endsWith(url)) {
			if (playingAudio.paused) {
				playingAudio.play().then(() => {
				});
				AudioPlayer.isPaused = false;
				AudioPlayer.startProgressUpdater(progress, time);
			} else {
				playingAudio.pause();
				AudioPlayer.isPaused = true;
				AudioPlayer.stopProgressUpdater();
			}
			return;
		}

		if (playingAudio) {
			playingAudio.pause();
			AudioPlayer.isPaused = true;
			AudioPlayer.stopProgressUpdater();
		}

		const newAudio = new Audio(url);
		AudioPlayer.currentAudio = newAudio;

		newAudio.addEventListener('loadedmetadata', () => {
			progress.max = newAudio.duration;
			time.textContent = `0:00 / ${AudioPlayer.formatTime(newAudio.duration)}`;
		});

		volumeControl.addEventListener('input', (event) => {
			const volume = parseFloat(event.target.value);
			if (AudioPlayer.currentAudio) {
				AudioPlayer.currentAudio.volume = volume;
				volumeDisplay.textContent = `${Math.round(volume * 100)}%`;
			}
		});

		newAudio.play().then(() => {
			AudioPlayer.startProgressUpdater(progress, time);
		});
	}

	static startProgressUpdater(progressElement, timeDisplay) {
		let playingAudio = AudioPlayer.currentAudio;
		if (!playingAudio) return;

		AudioPlayer.progressInterval = setInterval(() => {
			if (playingAudio) {
				progressElement.value = playingAudio.currentTime;
				const track = AudioPlayer.formatTime(playingAudio.currentTime);
				const duration = AudioPlayer.formatTime(playingAudio.duration);
				timeDisplay.textContent = `${track} / ${duration}`;
			}
		}, 500);
	}

	static stopProgressUpdater() {
		if (AudioPlayer.progressInterval !== null) {
			clearInterval(AudioPlayer.progressInterval);
			AudioPlayer.progressInterval = null;
		}
	}

	static formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.floor(seconds % 60);
		return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	}
}

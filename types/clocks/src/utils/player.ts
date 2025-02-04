export class AudioPlayer {
	static currentAudio: HTMLAudioElement | null = null;
	static progressInterval: number = 0;
	static _isPaused: boolean = false;

	static get isPaused(): boolean {
		return AudioPlayer._isPaused;
	}

	static set isPaused(value: boolean) {
		AudioPlayer._isPaused = value;
	}

	static playAudio(url: string): void {
		const progress = document.getElementById('progress-audio') as HTMLProgressElement;
		const time = document.getElementById('time') as HTMLSpanElement;
		const volumeControl = document.getElementById('volume') as HTMLInputElement;
		const volumeDisplay = document.getElementById('currentVolume') as HTMLSpanElement;

		const playingAudio: HTMLAudioElement | null = AudioPlayer.currentAudio;
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

		const newAudio: HTMLAudioElement = new Audio(url);
		AudioPlayer.currentAudio = newAudio;

		newAudio.addEventListener('loadedmetadata', (): void => {
			progress.max = newAudio.duration;
			time.textContent = `0:00 / ${AudioPlayer.formatTime(newAudio.duration)}`;
		});

		volumeControl.addEventListener('input', (event: Event): void => {
			const volume: number = parseFloat((event.target as HTMLInputElement).value);
			if (AudioPlayer.currentAudio) {
				AudioPlayer.currentAudio.volume = volume;
				volumeDisplay.textContent = `${Math.round(volume * 100)}%`;
			}
		});

		newAudio.play().then((): void => {
			AudioPlayer.startProgressUpdater(progress, time);
		});
	}

	static startProgressUpdater(
		progressElement: HTMLProgressElement,
		timeDisplay: HTMLSpanElement,
	): void {
		const playingAudio = AudioPlayer.currentAudio;
		if (!playingAudio) return;

		AudioPlayer.progressInterval = window.setInterval((): void => {
			if (playingAudio) {
				progressElement.value = playingAudio.currentTime;
				const track = AudioPlayer.formatTime(playingAudio.currentTime);
				const duration = AudioPlayer.formatTime(playingAudio.duration);
				timeDisplay.textContent = `${track} / ${duration}`;
			}
		}, 500);
	}

	static stopProgressUpdater(): void {
		if (AudioPlayer.progressInterval !== 0) {
			clearInterval(AudioPlayer.progressInterval);
			AudioPlayer.progressInterval = 0;
		}
	}

	static formatTime(seconds: number): string {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.floor(seconds % 60);
		return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	}
}

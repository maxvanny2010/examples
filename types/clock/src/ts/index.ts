export class AudioPlayer {
    private static currentAudio: HTMLAudioElement | null = null;
    private static progressInterval: number | null = null;
    private static _isPaused: boolean = false;

    public static get isPaused(): boolean {
        return AudioPlayer._isPaused;
    }

    private static set isPaused(value: boolean) {
        AudioPlayer._isPaused = value;
    }

    static playAudio(url: string): void {
        const progress = document.getElementById('progress-audio') as HTMLProgressElement;
        const time = document.getElementById('time') as HTMLSpanElement;
        const volumeControl = document.getElementById('volume') as HTMLInputElement;
        const volumeDisplay = document.getElementById('currentVolume') as HTMLSpanElement;

        let playingAudio = AudioPlayer.currentAudio;
        if (playingAudio && playingAudio.src.endsWith(url)) {
            if (playingAudio.paused) {
                playingAudio.play().then((r) => r);
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
            const volume = parseFloat((event.target as HTMLInputElement).value);
            if (AudioPlayer.currentAudio) {
                AudioPlayer.currentAudio.volume = volume;
                volumeDisplay.textContent = `${Math.round(volume * 100)}%`;
            }
        });
        newAudio.play().then(() => {
            AudioPlayer.startProgressUpdater(progress, time);
        });
    }

    static startProgressUpdater(
        progressElement: HTMLProgressElement,
        timeDisplay: HTMLSpanElement): void {
        let playingAudio = AudioPlayer.currentAudio;
        if (!playingAudio) return;

        AudioPlayer.progressInterval = window.setInterval(() => {
            if (playingAudio) {
                progressElement.value = playingAudio.currentTime;
                let track = AudioPlayer.formatTime(playingAudio.currentTime);
                let duration = AudioPlayer.formatTime(playingAudio.duration);
                timeDisplay.textContent = `${track} / ${duration}`;
            }
        }, 500);
    }

    static stopProgressUpdater(): void {
        if (AudioPlayer.progressInterval !== null) {
            clearInterval(AudioPlayer.progressInterval);
            AudioPlayer.progressInterval = null;
        }
    }

    static formatTime(seconds: number): string {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

}

import { SOUND } from './data/sound';
import { AudioPlayer } from './utils/player';
import { CLASSES } from './data/classes';
import { BACKGROUND } from './data/background';
import { ICONS } from './data/icons';
import './css/style.css'

let currentClassName = 'empty';

document.addEventListener('DOMContentLoaded', () => {
	const rainButton = document.querySelector('.rain') as HTMLElement | null;
	const winterButton = document.querySelector('.winter') as HTMLElement | null;
	const summerButton = document.querySelector('.summer') as HTMLElement | null;

	// Проверяем, что кнопки существуют
	if (!rainButton || !winterButton || !summerButton) return;

	// Добавляем иконки в кнопки
	addIconToButton(rainButton, ICONS.RAIN);
	addIconToButton(winterButton, ICONS.WINTER);
	addIconToButton(summerButton, ICONS.SUMMER);
	const main = document.querySelector('main')! as HTMLElement | null;
	const title = document.querySelector('.main-title')! as HTMLElement | null;
	const rain = document.querySelector('.rain')!;
	const winter = document.querySelector('.winter')!;
	const summer = document.querySelector('.summer')!;
	if (!rain || !main || !title) return;
	rain.addEventListener('click', () => {
		AudioPlayer.playAudio(SOUND.RAIN);
		setIcon(CLASSES.RAIN, ICONS.RAIN, currentClassName);
		main.style.backgroundImage = `url(${updateBackground(CLASSES.RAIN)})`;
		title.style.color = `white`;
		currentClassName = CLASSES.RAIN;
	});

	winter.addEventListener('click', () => {
		AudioPlayer.playAudio(SOUND.WINTER);
		setIcon(CLASSES.WINTER, ICONS.WINTER, currentClassName);
		main.style.backgroundImage = `url(${updateBackground(CLASSES.WINTER)})`;
		title.style.color = `white`;
		currentClassName = CLASSES.WINTER;
	});

	summer.addEventListener('click', () => {
		AudioPlayer.playAudio(SOUND.SUMMER);
		setIcon(CLASSES.SUMMER, ICONS.SUMMER, currentClassName);
		main.style.backgroundImage = `url(${updateBackground(CLASSES.SUMMER)})`;
		title.style.color = `white`;
		currentClassName = CLASSES.SUMMER;
	});
});

function updateBackground(classes: string): string {
	switch (classes) {
		case CLASSES.RAIN:
			return BACKGROUND.RAIN;
		case CLASSES.WINTER:
			return BACKGROUND.WINTER;
		case CLASSES.SUMMER:
			return BACKGROUND.SUMMER;
		default:
			throw new Error('Unsupported classes');
	}
}
function addIconToButton(button: HTMLElement, icon: string): void {
	const img = document.createElement('img');
	img.src = icon;
	img.alt = 'Icon';
	button.appendChild(img);
}
function setIcon(className: string, typeIcon: string, currentClassName: string): void {
	const currentButtonImg = document.querySelector(`.${className} > img`) as HTMLImageElement | null;
	const buttonBeforeImg = document.querySelector(`.${currentClassName} > img `) as HTMLImageElement | null;
	if (!currentButtonImg || !buttonBeforeImg) return;
	currentButtonImg!.src = (AudioPlayer.isPaused && currentClassName === className)
		? ICONS.PAUSE : typeIcon;
	if (AudioPlayer.isPaused && currentClassName !== className) {
		buttonBeforeImg!.src = updateIcon(currentClassName);
	}
}

function updateIcon(classes: string): string {
	switch (classes) {
		case CLASSES.RAIN:
			return ICONS.RAIN;
		case CLASSES.WINTER:
			return ICONS.WINTER;
		case CLASSES.SUMMER:
			return ICONS.SUMMER;
		default:
			throw new Error('Unsupported classes');
	}
}
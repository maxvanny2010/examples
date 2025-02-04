import { SOUND } from './data/sound.js';
import { AudioPlayer } from './utils/player.js';
import { CLASSES } from './data/classes.js';
import { BACKGROUND } from './data/background.js';
import { ICONS } from './data/icons.js';
import './css/style.css';

let currentClassName = 'empty';

document.addEventListener('DOMContentLoaded', () => {
	const rainButton = document.querySelector('.rain');
	const winterButton = document.querySelector('.winter');
	const summerButton = document.querySelector('.summer');

	// Проверяем, что кнопки существуют
	if (!rainButton || !winterButton || !summerButton) return;

	// Добавляем иконки в кнопки
	addIconToButton(rainButton, ICONS.RAIN);
	addIconToButton(winterButton, ICONS.WINTER);
	addIconToButton(summerButton, ICONS.SUMMER);

	const main = document.querySelector('main');
	const title = document.querySelector('.main-title');

	const rain = document.querySelector('.rain');
	rain.addEventListener('click', () => {
		AudioPlayer.playAudio(SOUND.RAIN);
		setIcon(CLASSES.RAIN, ICONS.RAIN, currentClassName);
		main.style.backgroundImage = `url(${updateBackground(CLASSES.RAIN)})`;
		title.style.color = `white`;
		currentClassName = CLASSES.RAIN;
	});
	document.querySelector('.winter')
		.addEventListener('click', () => {
			AudioPlayer.playAudio(SOUND.WINTER);
			setIcon(CLASSES.WINTER, ICONS.WINTER, currentClassName);
			main.style.backgroundImage = `url(${updateBackground(CLASSES.WINTER)})`;
			title.style.color = `white`;
			currentClassName = CLASSES.WINTER;
		});
	document.querySelector('.summer')
		.addEventListener('click', () => {
			AudioPlayer.playAudio(SOUND.SUMMER);
			setIcon(CLASSES.SUMMER, ICONS.SUMMER, currentClassName);
			main.style.backgroundImage = `url(${updateBackground(CLASSES.SUMMER)})`;
			title.style.color = `white`;
			currentClassName = CLASSES.SUMMER;
		});
});
function addIconToButton(button, icon) {
	const img = document.createElement('img');
	img.src = icon;
	img.alt = 'Icon';
	button.appendChild(img);
}
function updateBackground(classes) {
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

function setIcon(className, typeIcon, currentClassName) {
	const currentButtonImg = document.querySelector(`.${className} > img`);
	const buttonBeforeImg = document.querySelector(`.${currentClassName} > img `);
	currentButtonImg.src = (AudioPlayer.isPaused && currentClassName === className)
		? ICONS.PAUSE : typeIcon;
	if (AudioPlayer.isPaused && currentClassName !== className) {
		buttonBeforeImg.src = updateIcon(currentClassName);
	}
}

function updateIcon(classes) {
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
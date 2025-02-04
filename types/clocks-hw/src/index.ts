import data from './data';
import './index.scss';
import { IWeatherItem } from './types/IWeatherItem';

let playingMusicId: string;
const list: HTMLElement = document.querySelector('.weather-list');

const audioElement = new Audio();
audioElement.loop = true;

const volume: HTMLInputElement = document.querySelector('.volume-controller');
volume.addEventListener('input', (e) => {
	const target = e.currentTarget as HTMLInputElement;
	audioElement.volume = +target.value / 100;
});

list.addEventListener('click', (e) => {
	const target = e.target as HTMLElement;
	const closestTarget: HTMLElement = target.closest('[data-item-id]');
	const targetId = closestTarget.dataset.itemId;
	if (!targetId) return;

	const item = data.find((i) => i.id === targetId);
	if (!item) return;

	if (playingMusicId !== item.id) {
		playingMusicId = item.id;
		audioElement.src = item.sound;
		audioElement.play();
		document.body.style.backgroundImage = `url('${item.background}')`;
		return;
	}

	if (audioElement.paused) {
		audioElement.play();
	} else {
		audioElement.pause();
	}
});

function renderItem(item: IWeatherItem) {
	const listItem = document.createElement('li');
	const weatherItem = document.createElement('button');
	const itemIcon = document.createElement('img');

	listItem.classList.add('weather-list__item');
	weatherItem.classList.add('weather-item');
	itemIcon.classList.add('weather-item__icon');

	weatherItem.dataset.itemId = item.id;
	weatherItem.style.backgroundImage = `url('${item.background}')`;
	itemIcon.src = item.icon;

	weatherItem.append(itemIcon);
	listItem.append(weatherItem);
	list.append(listItem);
}

data.forEach(renderItem);

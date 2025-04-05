import characters from './characters.json';
import location from './location.json';
import episode from './episode.json';

export const CATEGORIES = {
	characters,
	location,
	episode,
};

export const CATEGORY_NAME = {
	characters: 'Hero',
	location: 'Location',
	episode: 'Episode',
};

/*
type CategoryType = "characters" | "location" | "episode";
const CATEGORIES: Record<CategoryType, any[]> = {
  characters: [...],
  location: [...],
  episode: [...],
};

// В useParams category уже будет проверяться как один из этих значений
const { category } = useParams<{ category: CategoryType }>();
const items = CATEGORIES[category]; // category валидно


 */
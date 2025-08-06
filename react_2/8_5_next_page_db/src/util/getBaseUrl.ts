export function getBaseUrl() {
	if (typeof window !== 'undefined') {
		// Мы в браузере – используем относительный путь
		return '';
	}

	// Мы на сервере – используем абсолютный путь
	// В продакшене можно задать домен через переменную окружения
	return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
}

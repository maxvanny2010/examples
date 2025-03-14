import { useCallback, useEffect, useState } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
	value: LocalStorageReturnValue,
	{
		setItem: (value: LocalStorageSetValue) => void;
		removeItem: () => void;
	}
];

export const useLocalStorage: UseLocalStorage = (key) => {
	const [storedValue, setStoredValue] = useState<LocalStorageReturnValue>(() => {
		return localStorage.getItem(key);
	});

	useEffect(() => {
		const handleStorageChange = () => {
			setStoredValue(localStorage.getItem(key));
		};

		window.addEventListener('storage', handleStorageChange);
		return () => window.removeEventListener('storage', handleStorageChange);
	}, [key]);

	const setItem = useCallback((value: LocalStorageSetValue) => {
		localStorage.setItem(key, value);
		setStoredValue(value);
	}, [key]);

	const removeItem = useCallback(() => {
		localStorage.removeItem(key);
		setStoredValue(null);
	}, [key]);

	return [storedValue, { setItem, removeItem }];
};

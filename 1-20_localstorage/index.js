window.addEventListener('storage', (event) => {
    console.log(event);
});

// Запись в localStorage
localStorage.setItem('record', 'newRecord');

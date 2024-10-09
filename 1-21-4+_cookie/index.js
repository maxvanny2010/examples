import './index.css';

document.addEventListener('DOMContentLoaded', () => {
    const state = window.localStorage.getItem('state');
    const cookieConsent = document.querySelector('.cookie-consent');
    if (state) cookieConsent.style.display = state;
});

document.querySelector('.cookie-consent__button')
    .addEventListener('click', () => {
        const cookieConsent = document.querySelector('.cookie-consent');
        if (!window.localStorage.getItem('state')) {
            window.localStorage.setItem('state', 'none');
            cookieConsent.remove();
        }
    });
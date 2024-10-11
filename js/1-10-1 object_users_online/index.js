const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];
const usersOnlineNames = users.filter(user => user.status === 'online').map(user => user.username);
console.log(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames.join(', ')}`);
const { v4: uuidv4 } = require('uuid');

const bookmarks = [
    {
        id: uuidv4(),
        title: 'YouTube',
        url: 'https://www.youtube.com',
        description: 'Watch some videos',
        rating: 3
    },
    {
        id: uuidv4(),
        title: 'Google',
        url: 'https://www.google.com',
        description: 'Look some stuff up',
        rating: 5
    },
    {
        id: uuidv4(),
        title: 'GitHub',
        url: 'https://www.github.com',
        description: 'Find some cool repositories and post your own work too',
        rating: 5
    },
]

module.exports = { bookmarks }
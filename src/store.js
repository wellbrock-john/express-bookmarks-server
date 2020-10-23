const uuid = require('uuid/v4')

const bookmarks = [
    {
        id: uuid(),
        title: 'YouTube',
        url: 'https://www.youtube.com',
        description: 'Watch some videos',
        rating: 3
    },
    {
        id: uuid(),
        title: 'Google',
        url: 'https://www.google.com',
        description: 'Look some stuff up',
        rating: 5
    },
    {
        id: uuid(),
        title: 'GitHub',
        url: 'https://www.github.com',
        description: 'Find some cool repositories and post your own work too',
        rating: 5
    },
]

module.exports = { bookmarks }
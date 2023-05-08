const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(express.static('assets'))

const movies = [{
    id: '1',
    title: 'The Mummy',
    description: 'A movie about a mummy',
    rating: 9,
    thumbnailUrl: '/thumbnails/the-mummy.jpg'
}, {
    id: '2',
    title: 'Guardians of the Galaxy Vol 2.',
    description: 'Flying through the galaxy like a boss v2',
    rating: 7,
    thumbnailUrl: '/thumbnails/guardiants-of-the-galaxy-2.jpeg'
}, {
    id: '3',
    title: 'Avatar',
    description: 'I am blue',
    rating: 6,
    thumbnailUrl: '/thumbnails/avatar.jpg'
}, {
    id: '4',
    title: 'A Man called Otto',
    description: 'Is he called otto though?',
    rating: 8,
    thumbnailUrl: '/thumbnails/a-man-called-otto.webp'
}, {
    id: '5',
    title: '300',
    description: 'There were more than 300 ...',
    rating: 7,
    thumbnailUrl: '/thumbnails/300.jpg'
}, {
    id: '6',
    title: 'Dune',
    description: 'I have no idea what happened',
    rating: 7,
    thumbnailUrl: '/thumbnails/dune.jpeg'
}];

app.get('/movies', (req, res) => {
    res.json(movies)
});

app.get('/movies/:movieId', (req, res) => {
    const movie = movies.find(v => v.id === req.params.movieId);

    res.json(movie)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
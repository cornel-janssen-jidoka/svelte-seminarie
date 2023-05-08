const express = require('express')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())

const todos = [{
    id: 1,
    title: 'Clean the house',
    done: true,
}, {
    id: 2,
    title: 'Take out the trash',
    done: false,
}, {
    id: 3,
    title: 'Prepare Svelte seminar',
    done: true,
}, {
    id: 4,
    title: 'Mow the lawn',
    done: false,
}];

app.get('/todos', (req, res) => {
    setTimeout(() => res.json(todos), 2000)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
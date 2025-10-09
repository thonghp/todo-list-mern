import express from 'express'

const app = express()

app.listen(5001, () => {
  console.log('Server started on port 5001')
})

app.get('/api/tasks', (req, res) => {
  res.status(200).send('Hello world')
})

app.get('/api/tasks', (req, res) => {
  res.status(200).send('Hello world')
})

app.get('/api/tasks', (req, res) => {
  res.status(200).send('Hello world')
})

app.get('/api/tasks', (req, res) => {
  res.status(200).send('Hello world')
})

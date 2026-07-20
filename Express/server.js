const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

//setup static folder also middleware
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

let posts = [
  {id: 1, title: 'Post One'},
  {id: 2, title: 'Post Two'},
  {id: 3, title: 'Post Three'},
  {id: 4, title: 'Post Four'},
]

app.get('/api/posts', (req, res) => {
  console.log(req.query);

  res.json(posts);
})

app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
})

app.listen(port, () => console.log(`Server is running on port ${port}`));
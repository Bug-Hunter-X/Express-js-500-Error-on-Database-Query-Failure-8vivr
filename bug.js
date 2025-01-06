const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user by userId ...
  if (!user) {
    return res.status(404).send('User not found'); // Error handling here is incomplete
  }
  res.send(user);
});
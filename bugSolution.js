const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  if (isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }

  try {
    const user = users.find(user => user.id === parseInt(userId));
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).send('Internal server error');
  }
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));
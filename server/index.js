const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.post('/login', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (username === 'test' && password === 'test') {
    return res.status(200).json({
      userId: 1,
      loggedIn: true,
      userType: 'student',
    });
  } else if (username === 'company' && password === 'company') {
    res.status(200).json({
      userId: 2,
      loggedIn: true,
      userType: 'company',
    })
  } else {
    res.status(404).json({
      loggedIn: false,
    })
  }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


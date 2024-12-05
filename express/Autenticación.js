const jwt = require('jsonwebtoken');
app.post('/login', (req, res) => {
    const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
});

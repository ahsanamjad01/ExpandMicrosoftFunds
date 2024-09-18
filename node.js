const express = require('express');
const app = express();
let globalCount = 0;

app.use(express.urlencoded({ extended: true }));

app.get('/getglobalcount', (req, res) => {
    res.send(globalCount.toString());
});

app.post('/updateglobalcount', (req, res) => {
    let playerCount = parseInt(req.body.count);
    globalCount += playerCount;
    res.send('Global count updated');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

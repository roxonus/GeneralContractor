const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.static('public'));

app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html')
// })

app.get('/contactform', (req, res) => {
    res.sendFile(__dirname + '/public/contactform.html')
})

app.post('/contactform', (req, res) => {
    console.log(req.body);
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})


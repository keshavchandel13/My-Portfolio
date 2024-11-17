var express = require('express')
var cors = require('cors')
var app = express()
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: 'https://my-portfolio-ljg7.vercel.app/' // Replace with your frontend's URL during production
  }));
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Backend is running');
  });


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
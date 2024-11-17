var express = require('express')
var cors = require('cors')
var app = express()
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: 'https://my-portfolio-ljg7.vercel.app/' 
  }));
app.use(express.json())
app.get('/test', (req, res) => {
    res.json({ message: 'Data fetched successfully!' });
    console.log("jai ho");
  });
  
app.get('/', (req, res) => {
    res.send('Backend is running');
  });


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
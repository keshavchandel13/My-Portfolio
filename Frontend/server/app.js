import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = 5000;
const corsOptions = {
  origin: 'https://my-portfolio-one-ochre-28.vercel.app/', 
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};
// Enable CORS
app.use(cors(corsOptions));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user: process.env.EMAIL,
    pass : process.env.PASSWORD, 
  },
});

app.post('/send-email',(req,res)=>{
  const {name, email,message} = req.body;
  if(!name || !email || !message){
    return res.status(400).json({error:'All fields are required'});
  }
  // set up email options
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: 'Contact Form Submission',
    text: `
      Name : ${name}
      Email : ${email}
      Message : ${message}
    `,
  };
  // Send email using transporter
  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      console.log('Error sending email:',error);
      return res.status(500).json({error:error.toString()});
    }
    //Success message
    res.status(200).json({
      message: 'Email sent successfully'
    });
  });
    

})
app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');

});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

//import { EmailTemplate } from '../../../components/EmailTemplate';



var nodemailer = require('nodemailer');
const fromEmail=process.env.FROM_EMAIL;
const emailPassword=process.env.EMAIL_PASSWORD;
const sendMail=async (email,subject,message)=>{
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: fromEmail,
      pass: emailPassword
    }
  });
  
  var mailOptions = {
      from: fromEmail,
      to: [fromEmail,email],
      subject:subject,
      text: subject+"Thank You for Contacting"+"New message submitted:"+message
  };
  
  await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export async function POST(req,res) {
    
  try {
    
    const { email, subject, message } = await req.json();
    const data=await sendMail(email,subject,message);
    console.log(email, subject, message);

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

var nodemailer = require("nodemailer");
var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Enviando...");
  var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    post: 587,
    secure: false,
    auth: {
      user: "rodrick.mraz61@ethereal.email",//kenna96@ethereal.email
      pass: "eZYfEhxtt4KNkkgRvq",//SEmEmdgg7H2tNRtW4Y
    },
  });

  var mivariable =
    "<button style='background-color: #28afea;'><a href='http://localhost:3000/mailvalido'>Presiona aqui</a></button>";
  mivariable =
    mivariable +
    '<img src="https://aws.admagazine.com/prod/designs/v1/assets/1200x628/69052.jpg">';

  var mailOptions = {
    from: "Remitente",
    to: "dilanperalta05@gmail.com",
    subject: "Notification - Validate Email",
    text: "Notification",
    html: mivariable,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    /* if (!error) {
      res.status(500).send(error, message);
    } else {
      console.log("Email enviado");
      res.status(200).jsonp(req, body);
    } */
    if (error) {
      console.log(error);
    } else {
      /* res.send("Mensaje Enviado"); */
      console.log("Mensaje Enviado");
    }
  });
});

app.get("/mailvalido", (req, res) => {
  res.send("Tu correo ha sido validado");
  //var isValid = true;
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000/");
});

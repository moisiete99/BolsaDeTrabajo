var nodemailer = require("nodemailer");
var express = require("express");
var app = express();
message = '';
app.get("/", (req, res) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    post: 587,
    secure: false,
    auth: {
      user: "jordon.gusikowski@ethereal.email",
      pass: "wZ3fGjeynk5saeyavq",
    },
  });

  var mivariable =
    "<h1>Hola, gracias por unirte a nosotros y a esta comunidad,</h1>" +
    "<h2>'LOOKING FOR JOB'</h2>" +
    "<h3>Para comprobar tu registro de correo, <a href='http://localhost:3000/mailvalido'>pulsa aquí</a></h3>";
  mivariable =
    mivariable +
    '<img src="https://aq-sf.com/wp-content/uploads/2020/09/UGG.jpg" width="720" height="480">';

  var mailOptions = {
    from: "Remitente",
    to: "dilanperalta05@gmail.com",
    subject: "Notification - Validate Email",
    text: "Notification",
    html: mivariable,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      /* res.send("Mensaje Enviado"); */
      console.log("Mensaje Enviado");
    }
  });
  res.send("Enviando... Revisar correo");
});

app.get("/mailvalido", (req, res) => {
  res.send("Tu correo ha sido validado");
  //var isValid = true;
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000/");
});

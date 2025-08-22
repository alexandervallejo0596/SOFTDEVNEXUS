const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"SoftDev Nexus" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h3>Mensaje recibido desde tu sitio web:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${process.env.PORT}`);
});

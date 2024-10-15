import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const sendMail = async (req, res) => {
    const { name, email, phone, html } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "mirjetakurti224@gmail.com",
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    let mailOptions = {
        from: "mirjetakurti224@gmail.com",
        to: "mirjetakurti224@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        html: `
            <h1>Contact Form Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${html}</p>
        `,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        res.status(200).send({ message: "Email sent", info });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send({ message: "Error sending email", error });
    }
};

app.post("/api/mail", sendMail);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

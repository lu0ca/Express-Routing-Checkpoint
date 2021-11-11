const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, (err) =>
    err ? console.error(err) : console.log(`server is running on ${PORT}`)
);

const Temps = new Date();
const days = Temps.getDay();
const hours = Temps.getHours();
if (days >= 1 && days <= 5 && hours >= 9 && hours < 17) {
    app.use(express.static("Public"));

    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/Public/Home.html");
    });

    app.get("/contact-us", (req, res) => {
        res.sendFile(__dirname + "/Public/Contact.html");
    });

    app.get("/our-services", (req, res) => {
        res.sendFile(__dirname + "/Public/Services.html");
    });
} else {
    app.use(express.static("NotAvailable"));
}

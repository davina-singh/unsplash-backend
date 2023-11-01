const express = require("express");
const cors = require("cors");
const { response } = require("express");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
const axios = require

app.get("/", (request, response) => {
    response.json("You are looking at my route... how roude!");
});

app.get("/photos", async (request, response) => {
    const API = `https://api.unsplash.com/search/photos?client_id=${process.env.PORT}&query=wizard`;
    const res = await axios.get(API)
    const wrangledData = res.data.results.map(())=>{
        return {
            image_url: image.
            photographer:
        }

    })
    response.json("Photos endpoint");
});

app.listen(POORT, () => console.log('App is running on port ${PORT}'));


import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
import "dotenv/config";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const cardSchema = new Schema({
  img: String,
  title: String,
  rating: Number,
  like: Number,
  description: String,
});

const cardModel = mongoose.model("Card", cardSchema);

app.get("/", async (req, res) => {
  const cards = await cardModel.find();
  res.send(cards);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const cards = await cardModel.findById(id);
  res.send(cards);
});

app.post("/", async (req, res) => {
  const { img, title, rating, like, description } = req.body;
  const newCards = new cardModel({ img, title, rating, like, description });
  await newCards.save();
  res.send(newCards);
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { img, title, rating, like, description } = req.body;
  const cards = await cardModel.findByIdAndUpdate(id, {
    img,
    title,
    rating,
    like,
    description,
  });
  res.send(cards);
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cards = await cardModel.findByIdAndDelete(id);
    res.send("Got a DELETE request at /user");
  } catch (error) {
    console.error(error.message);
  }
});

mongoose.connect(process.env.SECRET_KEY).then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

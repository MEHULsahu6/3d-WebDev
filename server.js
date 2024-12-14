import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// App setup
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/gaming_tournament")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));


const RegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  teamName: String,
  players: Number,
});

const Registration = mongoose.model("Registration", RegistrationSchema);

// API route
app.post("/api/register", async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).send("Registration successful!");
  } catch (error) {
    res.status(500).send("Error saving registration.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

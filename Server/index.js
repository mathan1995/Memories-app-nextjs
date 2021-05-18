import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Connection URI
import { CONNECTION_URL } from "./config/index.js";
// Import Routes
import PostRoutes from "./routes/posts.routes.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Calling Routes
app.use("/posts", PostRoutes);

const PORT = process.env.PORT || 6789;

// Handeling with mongo db Connection
mongoose
  .connect(CONNECTION_URL.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server Running on Port: http://localhost:${PORT}`);
      console.log("Connected to Mongo DB !");
    })
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);

import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import messagingRouter from "./routes/messages.js";
import { pusher } from "./pusher/pusher.js";
import Messagings from "./models/message.js";

//App configuration

const app = express();

// middleware configurations
dotenv.config();
app.use(cors());
app.use(helmet());
app.use(helmet({ crossOriginResourcePolicy: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//Routing
app.use("/api", messagingRouter);

//mongo database configuration t
try {
  const port = process.env.PORT || 4002;
  mongoose.set({ strictQuery: true });
  mongoose
    .connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      console.log("Database connection established...")
    )
    .then(() => {
      app.listen(port, console.log(`server running on port ${port}...`));
    });

  //   pusherConnfig();
} catch (error) {
  console.log(error, "database connection error..");
}

//pusher configuration

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB Connected");
  const msgCollection = db.collection("messagings");
  const changeStream = msgCollection.watch();
  changeStream.on("change", (change) => {
    console.log(change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        createdAt: messageDetails.createdAt,
        received: messageDetails.received,
      });
    } else {
      console.log("Error trigerring Pusher");
    }
  });
});

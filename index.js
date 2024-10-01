import express from "express";
import { bookingRouter } from "./routes/all-routes.js";

const app = express();

const PORT = 3001

app.use(bookingRouter)

app.listen(3001, ()  => {
    console.log("Server is listening on port 3001")
});
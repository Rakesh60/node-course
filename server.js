import express from "express";
import appRoutes from "./app/routes/appRoute.js";
const app = express();
const PORT = 5000;
// Added Comment
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Backend is running at Port ${PORT}`);
});

appRoutes(app);

app.listen(PORT, () => {
  console.log(`Backend is running at Port ${PORT}`);
});

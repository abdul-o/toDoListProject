import express from "express";
import todoRoutes from "./Router/todorouter.js";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("I am so delighted to welcome you to TODO project");
});

app.use("/api", todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

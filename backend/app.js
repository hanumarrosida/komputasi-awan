const express = require("express");
const cors = require("cors");
const app = express();
const taskRoutes = require("./routes/taskRoutes");app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);
const PORT = 3000;
app.get("/", (req, res) => {
res.send("Task Management API");
});
app.listen(PORT, "0.0.0.0", () => {
console.log(`Server berjalan pada port ${PORT}`);
});

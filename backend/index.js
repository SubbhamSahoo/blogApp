const express = require("express");
const { PORT } = require("./config/config");
const authRoutes = require("./routes/authRoutes")
const blogRoutes = require("./routes/blogRoutes")
const commentRoutes = require("./routes/commentRoutes")
const contactRoutes = require("./routes/contactRoutes")
const databaseConnection = require("./database/connection");
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())


databaseConnection()
  .then(() => {
    app.listen(PORT || 8000, () => {
      app.use("/api/v1",authRoutes)
      app.use("/api/v1",blogRoutes)
      app.use("/api/v1",commentRoutes)
      app.use("/api/v1",contactRoutes)

      console.log("db connected");
      console.log(`${PORT} is listening`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

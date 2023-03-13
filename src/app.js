import express from "express";
import routes from "./routers";
import dotenv from "dotenv";
import ejs from "ejs";

dotenv.config();

const app = express();
const PORT = 3000;

//setup template engine
app.set("view-engine", "html");
app.engine("html", ejs.renderFile);

//public folder setup
app.use(express.static(__dirname + "/public"));

//body parser middleware
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(routes);

const server = app.listen(PORT, console.log(`Server Listening on ${PORT} `));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  // close server & exit process
  server.close(() => process.exit(1));
});

export default app;

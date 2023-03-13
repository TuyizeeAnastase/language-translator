import express from "express";
import translateRouter from "./translator.routers";
import { translate } from "@vitalets/google-translate-api";

const routes = express();

routes.get("/", (req, res) => {
  res.render("index.ejs");
});

routes.use("/api/v1/translater", translateRouter);

routes.post("/api/v1/translate", (req, res) => {
  // get form data from the request body
  const { text, lan } = req.body;
  translate(text, { to: lan })
    .then((response) => {
      res.render("index.ejs", {
        translatedText: response.text,
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

routes.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found, try again",
  });
});

export default routes;

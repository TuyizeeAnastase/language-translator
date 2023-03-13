import express from "express";
import translating from "../controllers/translate.controller";

const routes = express();

routes.post("/", translating.translaterController);

export default routes;
